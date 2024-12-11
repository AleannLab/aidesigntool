/* eslint-disable @typescript-eslint/no-explicit-any */

import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .withSchema("aidesigntool")
    .createTable("users")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("name", "text")
    .addColumn("email", "text", (col) => col.notNull().unique())
    .addColumn("password", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.withSchema("aidesigntool").dropTable("users").execute();
}
