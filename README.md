# React Authorization Template

This is a authorization template which contains:

- Login form
- Registration form
- Confirmation
- Password reset form

It can be used in various project which require authorization process. It uses libraries like redux for state management, redux-thunk for creating asynchronous actions, prop-types for typechecking and many more.

## Connection to your API

Set your API URL adress in .env file and create your own backend logic based on this template or change it as you like.

### Docker

At first, make sure you have installed latest stable version of `docker` and `docker-compose` packages in your system.

Most of the times that's the only commands you'll need:

- Running containers
  ```bash
  $ docker-compose up
  ```
- Stopping containers
  ```bash
  $ docker-compose stop
  ```
- Rebuilding containers
  ```bash
  $ docker-compose up --build
  ```

## React and Docker? Tiny problem

The goal is to achieve ability to run this React application as a Docker container that is built once. It is known that object `process` does not exist inside the browser environment, but it does exists in Node.js applications. By default, React does not do server-side rendering. It cannot inject environment variables (e.g. API_URL) during content serving. This means it can only be configured during build time. The solution is to pass the environment variables to the global `window` object (thanks to the bash script) so Docker can read them when the container is started. It is also possible to put them into a JavaScript file which can be served via Nginx (at the same time serving this React app).
