// ==> 200
const success = (res, payload) => res.status(200).send(payload);
const created = (req, payload) => res.status(201).send(payload);

// ==> 400
const badRequest = (res, payload) => res.status(400).send(payload);
const notFound = (res, message = '') => res.status(404).send(message);

// ==> 500
const internalError = (res, { message }) => res.status(500).send({ message });

export default {
    // ==> 200
    success,
    created,

    // ==> 400
    badRequest,
    notFound,

    // ==> 500
    internalError,
};
