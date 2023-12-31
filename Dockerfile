FROM node
ENV NODE_ENV development
# Add a work directory
WORKDIR /who-is-in-town
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 5173
# Start the app
CMD [ "npm", "run", "dev" ]