import app, { Application } from "@/app/app"
import {FileMigrationProvider, Migrator} from "kysely"
import { promises as fs } from 'fs'
import path from 'path'
import {Config} from "@/app/config";
const migrationFolder = path.resolve(__dirname, './migrations')

async function migrate(app: Application) {

  const migrator = new Migrator({
    db: app.db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder,
    }),
    allowUnorderedMigrations: true,
    migrationTableSchema: Config.database.schema
  })

  const { error, results } = await migrator.migrateToLatest()

  results?.forEach(it => {
    if (it.status === "Success") {
      console.log(`migration "${it.migrationName}" was executed successfully`)
    } else if (it.status === "Error") {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (results?.length === 0) {
    console.log("nothing to migrate!")
    return
  }

  if (error) {
    console.error("failed to migrate")
    console.error(error)
    process.exit(1)
  }
}


migrate(app).catch(console.error)