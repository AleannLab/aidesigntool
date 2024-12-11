import { DB } from "./db.overrides";
import { createKysely } from "@vercel/postgres-kysely";

export function connect() {
  const db = createKysely<DB>();

  return db;
}

export type Type = ReturnType<typeof connect>;
