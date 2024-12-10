/* eslint-disable @typescript-eslint/no-explicit-any */

import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {

    await db.schema.withSchema("aidesigntool").createTable("users_balances")
        .addColumn("user_id", "integer", col => col.notNull().primaryKey())
        .addColumn("balance", "integer", col => col.notNull())
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {

    await db.schema.withSchema("aidesigntool").dropTable("users_balances").execute()
}
