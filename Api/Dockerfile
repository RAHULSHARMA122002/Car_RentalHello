# Use an official Node.js runtime as a parent image
FROM node:18.20.8

# Set the working directory inside the container
WORKDIR /api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Make the container's port 5000 available to the outside
EXPOSE 5000

# Define the command to run your application
CMD ["node", "index.js"]
