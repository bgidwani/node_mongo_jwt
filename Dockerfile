FROM node:22-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm pkg delete scripts.prepare && npm i --omit=dev

# Copy the source code
COPY . .

CMD ["node", "src/index.js"]
