import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Data from './Data/Data.js';
import userRouter from './routes/register.js';
import transRouter from './routes/transactions.js';


const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', transRouter);

Data()
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

