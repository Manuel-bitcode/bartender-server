import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { coctailRouter } from './router/v1/coctailRouter';
import dotenv from 'dotenv';
import { swaggerSpec } from './docs/swagger';

dotenv.config();

const app = express();
const port = 3003;

//swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec(port)));

app.use('/v1/coctail', coctailRouter);

app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
  console.log(`📘 Swagger en http://localhost:${port}/docs`);
});