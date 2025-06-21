FROM mcr.microsoft.com/devcontainers/python:3.11-bullseye

# Agregar el repositorio de PostgreSQL
RUN apt-get update && apt-get install -y gnupg wget lsb-release
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list

# Instalar postgresql-client-17 y herramientas para Node.js
RUN apt-get update && apt-get install -y postgresql-client-17 curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

ENV PYTHONUNBUFFERED 1