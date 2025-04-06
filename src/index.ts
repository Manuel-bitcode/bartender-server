import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { coctailRouter } from './router/v1/coctailRouter';
import dotenv from 'dotenv';
import { swaggerSpec } from './docs/swagger';

dotenv.config();

const app = express();
const urlServer = process.env.URL_SERVER as string;
//swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec(urlServer)));

app.use('/v1/coctail', coctailRouter);

app.listen(urlServer, () => {
  console.log(`✅ Servidor corriendo en ${urlServer}`);
  console.log(`📘 Swagger en ${urlServer}/docs`);
});