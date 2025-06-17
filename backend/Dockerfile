# Dockerfile to containerize the Express app for Cloud Run
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Expose port and run the app
EXPOSE 3000
CMD ["node", "app.js"]
