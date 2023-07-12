FROM node:18 as reactapp

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm ci --omit=dev

# Bundle app source
RUN npm install
RUN npm build
# COPY ./build .

# EXPOSE 8080
# CMD [ "node", "server.js" ]
FROM nginx
# WORKDIR /Reactjs
COPY ./build .
RUN rm -r /usr/share/nginx/html/
COPY --from=reactapp /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]