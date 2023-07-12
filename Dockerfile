FROM node:current-alpine3.18 as reactapp
# FROM node as reactapp

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#add / when using jenkins
COPY package*.json ./

# If you are building your code for production
RUN npm ci --omit=dev
RUN npm install

# Bundle app source
COPY . .
RUN npm run build

# EXPOSE 8080
# CMD [ "node", "server.js" ]
FROM nginx
# WORKDIR /Reactjs
# COPY ./build .
RUN rm -r /usr/share/nginx/html/
COPY --from=reactapp /usr/src/app/build /usr/share/nginx/html
# RUN rm -r --from=reactapp /usr/src/app/
EXPOSE 80
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]