import { payables } from '../Functions/Models';
import { responses } from '../Functions/Utilities';

const getStatement = async (req, res) => {
    const { sinceDate } = req.params;

    try {
        const payload = await payables.getStatement(sinceDate);
        if (!payload || payload.length < 1) {
            const message =
                'Nenhuma entrada foi encontrada para o período específicado.';
            return responses.notFound(res, message);
        }
        return responses.success(res, payload);
    } catch (ex) {
        console.log(ex);
        return responses.internalError(res, ex);
    }
};

const getBalance = async (req, res) => {
    try {
        const payload = await payables.getBalance();
        return responses.success(res, payload);
    } catch (ex) {
        console.log(ex);
        return responses.internalError(res, ex);
    }
};

export default { getBalance, getStatement };
