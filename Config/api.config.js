const mode = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

export default Object.freeze({
    port,
    mode,
    isDev: mode == 'development',
});
