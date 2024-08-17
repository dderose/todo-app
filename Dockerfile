FROM node:20-slim

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

RUN apt-get update -y && apt-get install -y openssl

# Install production dependencies.
RUN npm install -g next
RUN npm i -g sass
RUN npm install

# Copy local code to the container image.
COPY . ./

# Set environment variables
ENV NODE_ENV development

# Make port 3000 available to the world outside this container
EXPOSE 3000

# RUN npx prisma  push
# RUN npx prisma generate
CMD ["npm", "run", "dev"]