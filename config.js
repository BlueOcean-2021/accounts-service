import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    db: {
        url: process.env.DB_URL
    },
    secret: {
        key: process.env.SECRET
    }
};
