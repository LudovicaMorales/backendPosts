// Importación de paquetes
import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import * as dotenv from "dotenv";
import { optionsEnv } from "./configEnv.js";
import cors from "@fastify/cors";
import formBody from "@fastify/formbody";

// Importación de la base de datos
import { connectDb } from "./database.js";

// Importación de las rutas
import { postRoutes } from "./routes/post.routes.js";

// Crear el servidor de Fastify
const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyEnv, optionsEnv).ready((err) => {
  if (err) console.error(err);
});

// Regístrar y modificar los paquetes
fastify.register(connectDb);
fastify.register(cors, { origin: "*" });
fastify.register(formBody);

// Regístrar las rutas
fastify.register(postRoutes, { prefix: "/post" });

// Función para inicializar el servidor
const start = async () => {
  try {
    await fastify.ready();
    fastify.listen({ port: process.env.PORT, host: process.env.HOST });
    console.log("El servidor está escuchando por el puerto ", process.env.PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

// Inicializar el servidor
start();
