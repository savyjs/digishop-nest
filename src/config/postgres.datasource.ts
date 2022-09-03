import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
  port: 5432,
  migrations: [__dirname + "/../migrations/*{.js,.ts}"],
  entities: [__dirname + "/../entities/*{.js,.ts}"],
  migrationsTableName: "migrations"
});