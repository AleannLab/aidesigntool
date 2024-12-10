import app from "@/app/app";


export const Balances = {
    async findOneByUserId(userId: number) {

        return await app.db.selectFrom("aidesigntool.users_balances")
            .selectAll()
            .where("user_id", "=", userId)
            .executeTakeFirst()
            .then((row) => {
                if (!row) {
                    return 0
                }
                return Number(row.balance)
            })

    },

    async subtract(userId: number, amount: number) {

        await app.db
            .insertInto("aidesigntool.users_balances")
            .values({
                user_id: userId,
                balance: amount,
            })
            .onConflict(onConflict =>
                onConflict.column("user_id").doUpdateSet(eb => ({
                    balance: eb("aidesigntool.users_balances.balance", "-", eb.ref("excluded.balance")),
                })),
            )
            .returningAll()
            .executeTakeFirstOrThrow()

    },
    async add(userId: number, amount: number) {
        await app.db
            .insertInto("aidesigntool.users_balances")
            .values({
                user_id: userId,
                balance: amount,
            })
            .onConflict(onConflict =>
                onConflict.column("user_id").doUpdateSet(eb => ({
                    balance: eb("aidesigntool.users_balances.balance", "+", eb.ref("excluded.balance")),
                })),
            )
            .returningAll()
            .executeTakeFirstOrThrow()
    }
}