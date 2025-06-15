# 👥 Mini App de Registro de Usuarios

Una aplicación web fullstack de registro de usuarios desarrollada por Alejandro Arraga. Utiliza **Flask** como backend, **React** en el frontend y **PostgreSQL** como base de datos relacional.

---

## 📦 Tecnologías Utilizadas

| Categoría     | Tecnologías                                 |
|---------------|----------------------------------------------|
| Backend       | Flask · Python · psycopg2 · bcrypt           |
| Frontend      | React · Axios · React Router DOM             |
| Base de Datos | PostgreSQL                                   |
| Herramientas  | Git · npm · pip · dotenv                     |

---

## 🧰 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- [Python 3.x](https://www.python.org/downloads/)
- [Node.js y npm (v14 o superior)](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

---

## 🚀 Instalación y Configuración

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/LA9905/user-registration-app
cd user-registration-app
```

---

### 2️⃣ Configura PostgreSQL

1. Asegúrate de que PostgreSQL esté en ejecución:
   - **Windows**: desde el Administrador de servicios.
   - **Linux/Mac**:  
     ```bash
     sudo service postgresql start
     ```

2. Accede al shell de PostgreSQL:
   ```bash
   psql -U postgres
   ```

3. (Opcional) Establece una contraseña si aún no lo hiciste:
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

---

### 3️⃣ Backend (Flask)

```bash
cd backend
python -m venv venv
```

#### Activa el entorno virtual:

- **Windows**:
  ```bash
  .\venv\Scripts\Activate.ps1
  ```

- **Linux/Mac**:
  ```bash
  source venv/bin/activate
  ```

#### Instala las dependencias:

```bash
pip install -r requirements.txt
```

#### Crea el archivo `.env` con la cadena de conexión a la base de datos:

```env
DATABASE_URL=postgresql://postgres:TU_CONTRASEÑA@localhost:5432/users_db
```

> 🔒 **Importante:** No compartas este archivo en repositorios públicos. Añádelo a `.gitignore`.

#### Inicia el servidor backend:

```bash
python app.py
```

El backend estará disponible en: `http://localhost:5000`

---

### 4️⃣ Frontend (React)

En una nueva terminal:

```bash
cd frontend
npm install
npm install axios react-router-dom
npm start
```

El frontend se ejecutará en: `http://localhost:3000`

---

## 🧪 Uso de la Aplicación

### 📥 Registro

1. Accede a `http://localhost:3000`
2. Llena el formulario con tu nombre completo, correo electrónico y contraseña.
3. Haz clic en **Registrar** para enviar los datos.

### 📋 Lista de Usuarios

Navega a: `http://localhost:3000/users`  
Verás una tabla con todos los usuarios registrados.

---

## 🔎 API – Pruebas con Postman (opcional)

### ➕ Crear usuario

**POST** `http://localhost:5000/api/register`  
**Body (JSON):**
```json
{
  "full_name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
```

### 📤 Obtener usuarios

**GET** `http://localhost:5000/api/users`

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
│   │   │   ├── RegisterForm.js
│   │   │   └── UserList.js
│   │   └── App.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🪪 Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).
