import { Transaction } from '../Models';

const create = payload => new Transaction(payload).save();

export default { create };
