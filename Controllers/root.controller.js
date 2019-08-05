const run = (_req, res) => {
    res.status(200).send({
        message: 'Hello World!',
    });
};

export default {
    run,
};
