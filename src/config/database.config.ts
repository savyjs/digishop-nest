import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {

  let options = {
    type: process.env.TYPE,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT || 5432,
  };
  console.log({ options });
  return options;
});