import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { DataSource } from "typeorm";


require("dotenv").config();
console.log(0, process.env.DATABASE_HOST);
const config: PostgresConnectionOptions = {
  "type": "postgres",
  "name": "default",
  "port": 5432,
  "host": process.env.DATABASE_HOST,
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "entities": ["src/entities/*.ts"],
  "migrations": ["src/migrations/*.ts"]
};
console.log({ config });
const connectDB = new DataSource(config);
export default connectDB;