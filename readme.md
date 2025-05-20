# Quantia

**Quantia** es una aplicación móvil para controlar tus microgastos y finanzas personales. El frontend está hecho con React Native + Tailwind (Expo) y el backend con Node.js/Express conectado a PostgreSQL vía Docker.

---

## 📂 Estructura del proyecto

```
Quantia-app/
├── db/                     # Scripts de inicialización de PostgreSQL
│   └── init.sql            # Crea tablas y esquemas necesarios
├── backend-quantia/        # Código del backend (Node.js + Express)
│   ├── migrations/         # Migraciones de esquema con node-pg-migrate
│   ├── src/
│   │   ├── db.js           # Configuración de la conexión PostgreSQL
│   │   └── index.js        # Servidor Express y rutas API
│   ├── test-connection.js  # Prueba de conexión a la base de datos
│   ├── .env.example        # Ejemplo de variables de entorno
│   └── package.json        # Dependencias y scripts del backend
├── docker-compose.yml      # Orquestación de PostgreSQL en Docker
├── package.json            # Dependencias y scripts del frontend (Expo)
└── app.json                # Configuración de Expo
```

---

## 🚀 Requisitos previos

* Node.js 14+ instalado
* Expo CLI (`npm install -g expo-cli`)
* Docker Desktop

---

## 🔧 Configuración paso a paso

### 1. Clonar el repositorio

```bash
git clone https://github.com/AngelGallegoDev/Quantia-app.git
cd Quantia-app
git checkout develop
```

### 2. Levantar el frontend (Expo)

```bash
npm install      # en la raíz (frontend)
npm start        # arranca Expo
```

### 3. Base de datos (PostgreSQL en Docker)

```bash
# Desde la raíz del proyecto (contiene docker-compose.yml)
docker-compose down --volumes
docker-compose up -d
docker ps       # confirma que quantia-db está Up en puerto 5433
```

### 4. Backend (Node.js + Express)

```bash
cd backend-quantia
npm install                     # instala dependencias
cp .env.example .env            # crea tu .env según ejemplo
node test-connection.js         # prueba la conexión a la BD
npm run dev                     # levanta servidor en modo nodemon
```

Tu API estará en `http://localhost:5000`. Por ejemplo:
`GET /api/ping` devuelve la hora del servidor.

---

## 🗂️ Migraciones de esquema

Para versionar cambios en tablas y columnas usa **node-pg-migrate**:

1. Instala como dev-dependency:

   ```bash
   npm install --save-dev node-pg-migrate
   ```
2. Configura scripts en `package.json`:

   ```jsonc
   "scripts": {
     "dev": "nodemon src/index.js",
     "migrate": "node-pg-migrate up",
     "migrate:down": "node-pg-migrate down"
   }
   ```
3. Crea la carpeta `backend-quantia/migrations/` y añade tus archivos de migración, por ejemplo:

   ```js
   // migrations/1653050000000_create_gastos_table.js
   exports.up = (pgm) => {
     pgm.createTable('gastos', {
       id: 'id',
       descripcion: { type: 'varchar(120)', notNull: true },
       monto: { type: 'numeric', notNull: true }
     });
   };
   exports.down = (pgm) => {
     pgm.dropTable('gastos');
   };
   ```
4. Al clonar/pull y configurar `.env`, tu colaborador simplemente corre:

   ```bash
   npm run migrate    # aplica todas las migraciones
   ```

Así compartís el esquema de BD actualizado sin versionar datos.

---

## 📖 Uso en desarrollo

* **Frontend**: recarga inmediata en Expo.
* **Backend**: nodemon recarga al guardar cambios.
* **BD**: si modificas `db/init.sql` o migraciones, usa `docker-compose down --volumes && docker-compose up -d` y `npm run migrate`.

---

## 📦 Despliegue

* Backend: desplegar Express + Postgres gestionado (Heroku, Render).
* Frontend: compilar Expo para iOS/Android o publicar en EAS.

---

## 🔗 Recursos

* [node-pg-migrate](https://github.com/salsita/node-pg-migrate)
* [Docker Compose](https://docs.docker.com/compose/)
* [Express.js](https://expressjs.com/)
* [Expo](https://docs.expo.dev/)
