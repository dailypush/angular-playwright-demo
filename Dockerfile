# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the current directory
COPY package.json package-lock.json ./

# Install any needed packages
RUN npm ci

# Copy the rest of the application
COPY . .

# Install Angular CLI
RUN npm install -g @angular/cli

# Build the Angular app for production
RUN ng build --configuration=production

# Expose port 80 for the app to be accessible
EXPOSE 80

# Start the application using the production build
CMD ["npx", "http-server", "dist/angular-playwright-demo", "-p", "80"]
