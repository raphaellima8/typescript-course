module.exports = {
    env: process.env.NODE_ENV,
    serverPort: 5000,
    dbURL: process.env.DATABASE_URL,
    secret: process.env.SECRET
};
