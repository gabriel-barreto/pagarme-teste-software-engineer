import { Payable } from '../Models';

const create = payload => new Payable(payload).save();

const getStatement = sinceDate =>
    Payable.find({ paymentDate: { $gte: sinceDate } });

const getBalance = () =>
    Payable.aggregate([
        { $group: { _id: '$status', value: { $sum: '$value' } } },
    ]);

export default { create, getBalance, getStatement };
