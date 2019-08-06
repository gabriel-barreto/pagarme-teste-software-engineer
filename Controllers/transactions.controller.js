import { transactions } from '../Functions/Models';
import { responses } from '../Functions/Utilities';

const create = async (req, res) => {
    const { body: payload } = req;

    try {
        const transaction = await transactions.create(payload);
        return responses.success(res, transaction);
    } catch (ex) {
        console.log(ex);

        if (ex.name == 'ValidationError')
            return responses.badRequest(res, { message: ex.message });
        return responses.internalError(res, ex);
    }
};

export default { create };
