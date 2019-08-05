import mongoose, { Schema } from 'mongoose';

const cardNumbersValidator = v => {
    return !`${v}`
        .split('')
        .map(each => isNaN(parseInt(each)))
        .includes(true);
};

const transactionSchema = {
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
};

const model = mongoose.model('Transaction', transactionSchema, 'transactions');

export default model;
