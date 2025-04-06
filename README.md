# 🍸 Bartender Service

Servicio RESTful para buscar y obtener información de cócteles utilizando la API de TheCocktailDB.

## 🚀 Características

- Búsqueda de cócteles por nombre
- Documentación de API con Swagger
- Arquitectura limpia (Clean Architecture)
- Validación de parámetros
- Manejo de errores
- TypeScript

## 📋 Prerequisitos

- Node.js (v14 o superior)
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd bartender-service
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```
Editar el archivo `.env` con tus configuraciones.

## 🏃‍♂️ Ejecución

Para desarrollo:
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3003`

## 📚 Documentación de la API

La documentación de la API está disponible en:
```
http://localhost:3003/docs
```

### Endpoints

#### GET /v1/coctail/{name}
- **Descripción**: Busca cócteles por nombre
- **Parámetros**:
  - `name` (path): Nombre del cóctel (mínimo 3 caracteres)
- **Respuestas**:
  - 200: Lista de cócteles encontrados
  - 400: Error de validación
  - 500: Error del servidor

## 🏗️ Estructura del Proyecto

```
src/
├── application/     # Casos de uso y servicios
├── domain/         # Entidades y puertos
├── infrastructure/ # Implementaciones concretas
│   ├── adapter/    # Adaptadores
│   ├── controllers/# Controladores
│   └── repositories/# Repositorios
├── router/         # Rutas de la API
└── docs/           # Documentación
```

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express
- TypeScript
- Axios
- Swagger UI
- dotenv

## 📝 Licencia

ISC

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos. 