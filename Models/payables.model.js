import mongoose, { Schema } from 'mongoose';

const payableSchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: ['paid', 'waiting_funds'],
    },
    transaction: {
        type: String,
        default: 'Transaction-XXX',
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Transaction',
        required: true,
    },
    value: {
        type: Number,
        required: true,
        min: 0,
    },
    paymentDate: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

const model = mongoose.model('Payable', payableSchema, 'payables');

export default model;
