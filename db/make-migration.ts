import { fileURLToPath } from "url"
import fs from "fs/promises"
import path from "path"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const migrationTemplate = `
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  
}

// export async function down(db: Kysely<any>): Promise<void> {
// 
// }
`.trimStart()

async function main(migrationName: string) {
  const fileName = `${__dirname}/migrations/${Date.now()}-${migrationName}.ts`
  await fs.writeFile(fileName, migrationTemplate)

  console.log("migration created!")
}

main(process.argv[2])