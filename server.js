import express from 'express';
import cors from 'cors';
import routes from './routes';
// import router from './routes';
// import db = require('./database');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/employers', routes.employers);
app.use('/api/users', routes.users);
app.use('/api/auth', routes.auth);

// db.connect().then((conn) => console.log('Mongo Connected'));
app.listen(PORT, () => console.log(`Server works on Port: ${PORT}`));
