import mongoose, { Schema } from 'mongoose';

import { payables } from '../Functions/Models';

const cardNumbersValidator = v => {
    return !`${v}`
        .split('')
        .map(each => isNaN(parseInt(each)))
        .includes(true);
};

const transactionSchema = new Schema({
    value: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['debit_card', 'credit_card'],
    },
    card: {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 4,
            validate: cardNumbersValidator,
        },
        expirationDate: {
            type: Date,
            required: true,
        },
        securityCode: {
            type: String,
            required: true,
            min: 0,
            max: 999,
            validate: cardNumbersValidator,
        },
    },
    date: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

transactionSchema.pre('save', function(doc) {
    doc.date = new Date();
    return doc;
});

transactionSchema.post('save', function(doc) {
    const getPaymentDate = paymentMethod => {
        if (paymentMethod == 'debit_card') return doc.date.setHours(0, 0, 0, 0);
        return new Date(doc.date.setDate(doc.date.getDate() + 30)).setHours(
            0,
            0,
            0,
            0,
        );
    };

    const getStatus = paymentMethod => {
        if (paymentMethod == 'debit_card') return 'paid';
        return 'waiting_funds';
    };

    const genPaymentInfo = paymentMethod => ({
        status: getStatus(paymentMethod),
        paymentDate: getPaymentDate(paymentMethod),
    });

    const payload = {
        value: doc.value,
        transaction: doc._id,
        ...genPaymentInfo(doc.paymentMethod),

        // Worse than wrapper
        // paymentDate: getPaymentDate(doc.paymentMethod),
        // status: getStatus(doc.paymentMethod),

        // Barely readable
        // status: doc.paymentMethod == "debit_card" ? "paid" : "waiting_funds",
        // paymentDate: doc.paymentMethod == "debit_card" ? new Date() : new Date().setDate(new Date().getDate() + 30),
    };

    return payables.create(payload);
});

const model = mongoose.model('Transaction', transactionSchema, 'transactions');

export default model;
