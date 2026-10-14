# LogicLab

Plataforma educativa para aprender lógica booleana paso a paso. Usa Next.js, React, TypeScript y App Router.

## ¿Por qué usamos Docker?

Docker permite que el equipo ejecute LogicLab con las mismas versiones de Node.js, pnpm y las dependencias del proyecto, aunque cada integrante use un sistema operativo distinto. Así evitamos que la aplicación funcione en una computadora y falle en otra por diferencias en la configuración local. El archivo `pnpm-lock.yaml` fija las versiones de las dependencias y Docker Compose prepara el entorno con un solo comando. Durante el desarrollo, los cambios de código se reflejan en el navegador sin reconstruir la imagen.

## Requisitos

- Git.
- Docker Desktop en Windows o macOS, o Docker Engine y Docker Compose v2 en Linux.
- Acceso al repositorio de GitHub. Si clonas por SSH, configura antes una clave SSH en tu cuenta de GitHub.

## Descargar e iniciar LogicLab

Abre una terminal y ejecuta:

```bash
git clone git@github.com:AlcortDev/LogicLab---Plataforma-Educativa-para-el-An-lisis-y-Resoluci-n-Paso-a-Paso-de-Operaciones-Booleanas.git LogicLab
cd LogicLab
docker compose up --build
```

La primera ejecución descarga la imagen de Node.js e instala las dependencias. Puede tardar unos minutos. Cuando aparezca el mensaje de que Next.js está listo, abre [http://localhost:3000](http://localhost:3000).

Deja abierta la terminal mientras trabajas. Docker mostrará ahí los mensajes del servidor. Cuando cambies y guardes un archivo, Next.js actualizará la página.

En las siguientes sesiones, desde la carpeta `LogicLab`, basta con ejecutar:

```bash
docker compose up
```

Para detener el servidor, presiona `Ctrl+C`. Luego puedes apagar los contenedores con:

```bash
docker compose down
```

## Solución de problemas comunes

### El puerto 3000 ya está ocupado

Otra aplicación está usando el puerto que LogicLab necesita. En `compose.yaml`, cambia:

```yaml
ports:
  - "3000:3000"
```

por:

```yaml
ports:
  - "3001:3000"
```

Guarda el archivo, inicia de nuevo con `docker compose up` y abre [http://localhost:3001](http://localhost:3001).

### Agregué o actualicé una dependencia

Actualiza `package.json` y `pnpm-lock.yaml` juntos. Después instala las dependencias en el volumen de Docker:

```bash
docker compose run --rm logiclab pnpm install --frozen-lockfile
```

Luego inicia o reinicia con `docker compose up`. Sube los dos archivos de dependencias a GitHub para que el equipo reciba los mismos cambios.

### Docker no encuentra cambios o el servidor quedó en un estado extraño

Detén el servicio con `Ctrl+C` y vuelve a iniciarlo:

```bash
docker compose down
docker compose up --build
```

Si Docker Desktop no está abierto, inícialo y repite el comando.

## Flujo de trabajo con ramas

Usa `main` para las versiones estables y `develop` para integrar el trabajo del equipo. Crea una rama propia para cada cambio y abre una solicitud de integración (Pull Request o PR) hacia `develop`. Así el equipo puede revisar el cambio antes de incorporarlo.

Si `develop` aún no existe en GitHub, quien coordina el proyecto debe crearla desde `main` y publicarla antes de que el equipo empiece a usar este flujo. Después, cada integrante sigue estos pasos:

### 1. Actualiza `develop`

Antes de empezar, cambia a `develop` y descarga los cambios recientes:

```bash
git switch develop
git pull --ff-only origin develop
```

### 2. Crea una rama para tu tarea

Usa un nombre corto que indique el tipo y el propósito del cambio:

```bash
git switch -c feature/tabla-verdad
```

Prefijos recomendados: `feature/` para una funcionalidad, `fix/` para corregir un error y `docs/` para documentación.

### 3. Haz y revisa el cambio

Ejecuta LogicLab con Docker, realiza la tarea y revisa qué archivos modificaste:

```bash
docker compose up
git status
git diff
```

Antes de compartir el cambio, comprueba que ESLint no encuentre problemas. Si usas Docker, ejecuta:

```bash
docker compose exec logiclab pnpm lint
```

Para compilar, detén el servidor con `Ctrl+C` y ejecuta `docker compose run --rm logiclab pnpm build`. Si instalaste las herramientas directamente en tu computadora, puedes usar `pnpm lint` y `pnpm build`.

### 4. Guarda y publica tu rama

Agrega los archivos de tu tarea, crea un commit y publica la rama en GitHub:

```bash
git add app/page.tsx
git commit -m "feat: agrega tabla de verdad"
git push -u origin feature/tabla-verdad
```

Usa `git add` con los archivos que corresponden a tu cambio. Ajusta el nombre de la rama y el mensaje del commit a tu tarea.

### 5. Abre un Pull Request

En GitHub, crea un Pull Request desde tu rama hacia `develop`. Describe qué cambiaste y cómo lo revisaste. Pide revisión a un compañero; si solicita ajustes, hazlos en la misma rama y vuelve a publicarlos con `git push`.

Cuando el equipo apruebe el Pull Request, intégralo en `develop`. La persona que coordina el proyecto decide cuándo los cambios de `develop` están listos para pasar a `main`.

### 6. Prepara la siguiente tarea

Después de integrar tu cambio, actualiza tu rama local de desarrollo y elimina la rama de la tarea:

```bash
git switch develop
git pull --ff-only origin develop
git branch -d feature/tabla-verdad
```

## Ejecutar sin Docker

También puedes ejecutar la aplicación directamente en tu computadora. Necesitas Node.js 22 o posterior y pnpm 11.3.0:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos útiles

```bash
pnpm dev    # inicia el servidor de desarrollo
pnpm lint   # revisa el código con ESLint
pnpm build  # genera una compilación de producción
pnpm start  # inicia la compilación de producción
```

La configuración de pnpm permite el script de instalación de `unrs-resolver`, que usan las herramientas de ESLint. La aplicación incluye manifiesto y service worker como base para PWA; el service worker se registra en producción.
