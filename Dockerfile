FROM node:alpine AS builder
ENV NODE_ENV production
ENV NODE_OPTIONS=--openssl-legacy-provider

# Create app directory
WORKDIR /app

# Cache and Install dependencies
COPY package*.json ./
COPY yarn.lock .
RUN npm install --production

## Copy app files
COPY . .

# Start the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:alpine as production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]