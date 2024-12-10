import * as DB from "@/db"

export class Application {
    public db
    public logger = console as Console

    private constructor() {
        this.db = DB.connect()

    }

    public static create() {
        const app = new Application()

        return app
    }

}


const app = Application.create()
export default app