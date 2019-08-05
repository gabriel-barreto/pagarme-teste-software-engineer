// CORS/Default Middleware
export default (_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');
    res.header(
        'Access-Control-Allow-Methods',
        'DELETE, GET, POST, PUT, OPTIONS',
    );
    next();
};
