# Mini App de Registro de Usuarios

Aplicación web Full Stack para registrar usuarios y visualizarlos, construida con Flask (backend), React (frontend), y PostgreSQL (base de datos).

## Características
- Registro de usuarios con nombre completo, correo electrónico y contraseña.
- Validaciones en frontend y backend (campos obligatorios, correo válido, contraseña de 6+ caracteres).
- Verificación de correo único y hash de contraseñas con `bcrypt`.
- Visualización de la lista de usuarios registrados (sin mostrar contraseñas no hasheadas).
- Base de datos creada automáticamente en PostgreSQL.
- Control de versiones con Git y subido a GitHub.

## Tecnologías
- **Backend**: Flask, PostgreSQL, psycopg2, bcrypt, python-dotenv
- **Frontend**: React, axios, react-router-dom
- **Base de datos**: PostgreSQL
- **Control de versiones**: Git, GitHub

## Instalación

### Prerrequisitos
- Python 3.9+
- Node.js 16+
- PostgreSQL
- Git

### Pasos
1. Clona el repositorio:
   ```bash
   git clone https://github.com/LA9905/user-registration-app
   cd user-registration-app