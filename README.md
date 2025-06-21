# 👥 Mini App de Registro de Usuarios

Una aplicación web fullstack de registro de usuarios desarrollada por Alejandro Arraga. Utiliza **Flask** como backend, **React** en el frontend y **PostgreSQL** como base de datos relacional. Esta aplicación puede ejecutarse de forma local en tu computadora o en entornos como **GitHub Codespaces** y **Gitpod**, adaptándose a diferentes configuraciones gracias a variables de entorno y scripts de automatización.

---

## 📦 Tecnologías Utilizadas

| Categoría       | Tecnologías                          |
|------------------|--------------------------------------|
| Backend          | Flask · Python · psycopg2 · bcrypt   |
| Frontend         | React · Axios · React Router DOM     |
| Base de Datos    | PostgreSQL                           |
| Herramientas     | Git · npm · pip · dotenv             |

---

## 🧰 Requisitos Previos

### Para ejecución local:
- Python 3.x
- Node.js y npm (v14 o superior)
- PostgreSQL
- Git

### Para GitHub Codespaces:
- Una cuenta de GitHub con acceso a Codespaces
- No necesitas instalar nada localmente

### Para Gitpod (opcional):
- Una cuenta de Gitpod
- No necesitas instalaciones locales

---

## 🚀 Instalación y Configuración

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/LA9905/user-registration-app
cd user-registration-app
```

---

### 2️⃣ Configura el entorno

#### 🔹 Para ejecución local:

##### PostgreSQL:
1. Asegúrate de que PostgreSQL esté en ejecución:  
   - **Windows:** desde el Administrador de servicios  
   - **Linux/Mac:**  
     ```bash
     sudo service postgresql start
     ```

2. Accede al shell de PostgreSQL:
   ```bash
   psql -U postgres
   ```

3. (Opcional) Establece una contraseña:
   ```sql
   ALTER USER postgres WITH PASSWORD 'tu_contraseña';
   ```

4. Crea la base de datos:
   ```sql
   CREATE DATABASE users_db;
   ```

5. Sal del shell:
   ```sql
   \q
   ```

#### 🔹 Para GitHub Codespaces:
- PostgreSQL y los contenedores se configuran automáticamente.
- La base de datos `users_db` se crea automáticamente al iniciar el contenedor gracias a `docker-compose.yml`.

#### 🔹 Para Gitpod:
- El entorno se configura automáticamente si está presente el archivo `.gitpod.yml`.

---

### 3️⃣ Configura las variables de entorno

#### Frontend (`frontend/.env`):

##### Local:
```env
REACT_APP_API_URL=http://localhost:5000
```

##### Codespaces:
```env
REACT_APP_API_URL=https://<tu-codespace-id>-5000.app.github.dev
```

##### Gitpod:
```env
REACT_APP_API_URL=http://localhost:5000
```

#### Backend (`backend/.env`):

##### Local:
```env
DATABASE_URL=postgresql://postgres:tu_contraseña@localhost:5432/users_db
```

##### Codespaces:
```env
DATABASE_URL=postgresql://postgres:postgres@db:5432/users_db
```

> 🔒 **Importante:** No subas archivos `.env` a repositorios públicos. Ya están incluidos en `.gitignore`.

---

### 4️⃣ Backend (Flask)

#### Local:
```bash
cd backend
python -m venv venv
```

##### Activa el entorno virtual:
- **Windows:**
  ```bash
  .\venv\Scripts\Activate.ps1
  ```
- **Linux/Mac:**
  ```bash
  source venv/bin/activate
  ```

##### Instala dependencias:
```bash
pip install -r requirements.txt
```

##### Inicia el servidor:
```bash
python app.py
```

Accede a: [http://localhost:5000](http://localhost:5000)

#### Codespaces:
- El backend se inicia automáticamente con `docker-compose.yml`.
- Accede a la URL en la pestaña **Ports**, ejemplo:
  ```
  https://<tu-codespace-id>-5000.app.github.dev
  ```

#### Gitpod:
- El backend se inicia automáticamente. Usa:
  ```
  http://localhost:5000
  ```

---

### 5️⃣ Frontend (React)

#### Local:
```bash
cd frontend
npm install
npm start
```

Accede a: [http://localhost:3000](http://localhost:3000)

#### Codespaces:
- El frontend se inicia automáticamente con `docker-compose.yml`.
- Verifica que el puerto 3000 esté expuesto.
- Accede mediante la pestaña **Ports**, ejemplo:
  ```
  https://<tu-codespace-id>-3000.app.github.dev
  ```

#### Gitpod:
```bash
cd frontend
npm install
npm start
```

Accede a: [http://localhost:3000](http://localhost:3000) o la URL proporcionada por Gitpod.

---

## 🧪 Uso de la Aplicación

### 📥 Registro
1. Accede a la URL del frontend (según entorno).
2. Llena el formulario con tu nombre completo, correo y contraseña.
3. Haz clic en **Registrar**.

### 📋 Lista de Usuarios
Navega a: `/users`  
Ejemplo: `http://localhost:3000/users`

---

## 🔎 API – Pruebas con Postman (opcional)

### ➕ Crear usuario

**POST**  
- Local: `http://localhost:5000/api/register`  
- Codespaces: `https://<tu-codespace-id>-5000.app.github.dev/api/register`

**Body (JSON):**
```json
{
  "full_name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
```

### 📤 Obtener usuarios

- **Local:** `GET http://localhost:5000/api/users`
- **Codespaces:** `GET https://<tu-codespace-id>-5000.app.github.dev/api/users`

---

## 📁 Estructura del Proyecto

```
user-registration-app/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env              ← configuración de la DB (no subir)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── RegisterForm.jsx
│   │   │   └── UserList.jsx
│   │   └── App.js
│   ├── package.json
│   └── .env              ← configuración del API URL (no subir)
│
├── .devcontainer/
│   ├── devcontainer.json
│   ├── docker-compose.yml
│   └── Dockerfile
│
├── .gitignore
└── README.md
```

---

## 🪪 Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).
