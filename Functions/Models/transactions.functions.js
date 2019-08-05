import { transactions } from '../../Queries';

const create = payload => {
    const hideCardNumber = payload => {
        const target = payload.card.number;
        return target.substring(target.length - 4, target.length);
    };
    const cardNumber = hideCardNumber(payload);
    console.log(cardNumber);

    return transactions.create({
        ...payload,
        card: { ...payload.card, number: cardNumber },
    });
};

export default { create };
