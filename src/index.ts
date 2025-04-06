import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { coctailRouter } from './router/v1/coctailRouter';
import dotenv from 'dotenv';
import { swaggerSpec } from './docs/swagger';

dotenv.config();

const app = express();
const port = process.env.PORT || '3003';
const isProduction = process.env.NODE_ENV === 'production';
const urlServer= isProduction ? process.env.URL_SERVER as string : `http://localhost:${port}`;
//swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec(urlServer)));

app.use('/v1/coctail', coctailRouter);

app.listen(port, () => {
  console.log(`✅ Servidor corriendo en ${urlServer}`);
  console.log(`📘 Swagger en ${urlServer}/docs`);
});