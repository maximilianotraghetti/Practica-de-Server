import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} from "../settings/environment.js";

const createMyPool = () => {
  try {
    const pool = createPool({
      database: DB_NAME,
      password: DB_PASS,
      user: DB_USER,
      host: DB_HOST,
      port: DB_PORT,
    });

    console.log("Conectado a la base de datos");

    return pool;
  } catch (error) {
    console.log("Hubo un error al conectar con la base de datos");
  }
};

const myPool = createMyPool();

export { myPool };
