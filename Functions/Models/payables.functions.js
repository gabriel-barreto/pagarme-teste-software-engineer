import { payables } from '../../Queries';

const create = payload => payables.create(payload);

const getStatement = rawSinceDate => {
    const today = new Date();
    let sinceDate = today.setDate(today.getDate() - 30);
    if (rawSinceDate) {
        sinceDate = rawSinceDate;
    }

    return payables.getStatement(new Date(sinceDate).setHours(0, 0, 0, 0));
};

const getBalance = () =>
    payables.getBalance().then(docs =>
        docs.map(each => ({
            status: each._id,
            value: each.value,
        })),
    );

export default { create, getBalance, getStatement };
