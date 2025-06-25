# ---- Base Node ----
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# ---- Dependencies ----
FROM base AS dependencies
WORKDIR /app
COPY . .
# If you have specific build steps that need all files before building,
# you could run them here, but for Vite, `npm run build` handles it.

# ---- Build ----
# Rebuild the source code only when needed
FROM dependencies AS build
WORKDIR /app
RUN npm run build

# ---- Release ----
# Use a lightweight Nginx image to serve the static files
FROM nginx:1.27-alpine AS release
WORKDIR /usr/share/nginx/html

# Remove default Nginx welcome page
RUN rm -rf ./*

# Copy static assets from the build stage
COPY --from=build /app/dist .

# Copy custom Nginx configuration (we will create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]