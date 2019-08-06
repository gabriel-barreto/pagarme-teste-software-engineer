import { payables } from '../../Queries';
import { parseCIDR } from 'ipaddr.js';

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
    new Promise((resolve, reject) => {
        const defaultBalance = [
            { status: 'waiting_funds', value: 0 },
            { status: 'paid', value: 0 },
        ];

        payables
            .getBalance()
            .then(docs => {
                if (!docs || docs.length < 1) return resolve(defaultBalance);
                return docs;
            })
            .then(entries => {
                return entries.map(each => ({
                    status: each._id,
                    value: each.value,
                }));
            })
            .then(resolve)
            .catch(reject);
    });

export default { create, getBalance, getStatement };
