import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = (port: number) => swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API con Swagger',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['src/infrastructure/controllers/**/*.ts'], // rutas donde Swagger buscará los comentarios JSDoc
});