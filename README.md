# CORS examples

An ExpressJS server with CORS enabled and a ReactJS client that demonstrates
how it works.

## Folder structure

- `react-client`: A standalone ReactJS client that makes requests to the server.
- `express-server`: An ExpressJS server that serves the ReactJS client and
  handles CORS requests.

## Run 

Both can be run independently. Make sure to install the dependencies first. Or
you can run both at the same time with the `npm run dev` command.

```bash
# Install dependencies
cd react-app && npm install
cd ..
cd rest-app && npm install
cd ..
npm install && npm run dev
```
