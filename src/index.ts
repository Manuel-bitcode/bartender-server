import express from 'express';
import { coctailRouter } from './router/v1/coctailRouter';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3003;


app.use('/v1/coctail', coctailRouter);

app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});