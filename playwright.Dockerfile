# Use official Playwright image as a base
FROM mcr.microsoft.com/playwright:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .


# Run the end-to-end tests
CMD ["npm", "run", "e2e"]
