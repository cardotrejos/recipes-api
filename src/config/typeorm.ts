import {createConnection} from 'typeorm'
import path from 'path'

export async function connect() {
  await createConnection({
    type: "postgres",
    host: "172.17.0.2",
    port: 5432,
    username: "postgres",
    password: "Pass2020!",
    database: "recipes",
    entities: [
      path.join(__dirname, "../entity/**/**.ts")
    ],
    synchronize: true
  });
  console.log("Database is connected")
}