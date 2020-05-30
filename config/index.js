const config = {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    tokenKey: process.env.SECRET,
    saltRounds: 10,
    files: {
        path: "files",
        filename: {
            users: "users.json",
            accessLog: "access.log"
        }
    }
};

module.exports = config;