import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ error: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    await app.listen({
      port: 3333,
      host: "0.0.0.0",
    });
    console.log(`Server listening on http://localhost:3333`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();

//  The  setErrorHandler  method is used to handle errors. The  start  function is used to start the server.
//  Next, we need to add the routes to the server.
