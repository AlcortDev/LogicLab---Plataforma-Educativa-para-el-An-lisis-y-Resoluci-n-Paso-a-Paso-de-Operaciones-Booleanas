# Imagen de desarrollo: todos usan Node dentro del contenedor.
FROM node:22.23.3-alpine3.23

WORKDIR /app

# Corepack instala la versión de pnpm declarada en package.json.
RUN corepack enable

# Copiamos primero los archivos de dependencias para aprovechar la caché de Docker.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# El código fuente se monta desde la computadora mediante compose.yaml.
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev", "--hostname", "0.0.0.0"]
