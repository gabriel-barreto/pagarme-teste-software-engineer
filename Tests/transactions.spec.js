import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Controller from '../Controllers/transactions.controller';
import { transactions } from '../Functions/Models';

chai.use(sinonChai);

describe('Transactions', () => {
    const sendStub = sinon.stub();
    const statusStub = sinon.stub().returns({
        send: sendStub,
    });

    const res = {
        status: statusStub,
        send: sendStub,
    };

    const exception = {
        name: 'ValidationError',
        message: 'Path `qualquerCoisa` is required',
    };
    sinon.stub(transactions, 'create').throws(exception);

    beforeAll(() => {
        Controller.create({ body: { description: 'hello' } }, res);
    });

    test('Should response with an 400 when receives an incomplete payload', () => {
        expect(statusStub).to.have.been.calledOnce;
        expect(statusStub).to.have.been.calledWith(400);
    });

    test('should response with exception message when receives an incomplete payload', () => {
        expect(sendStub).to.have.been.calledOnce;
        expect(sendStub).to.have.been.calledWith({
            message: exception.message,
        });
    });
});
