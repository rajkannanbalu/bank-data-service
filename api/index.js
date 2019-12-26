import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import bankRoutes from './server/routes/BankRoutes';
import login from './server/controllers/LoginController';
import auth from './server/middleware/auth';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use('/login', login)
app.use('/v1', auth.checkToken, bankRoutes);

app.get('/health', (req, res) => res.status(200).send({
  message: 'BankService is healthy',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
