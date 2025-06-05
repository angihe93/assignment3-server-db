import { jsonb, pgTable, varchar } from "drizzle-orm/pg-core"
import type { Grid } from "../game/game"

export const gamesTable = pgTable("connect4_games", {
    id: varchar({ length: 255 }).primaryKey(),
    currentPlayer: varchar({ length: 255 }).notNull(),
    grid: jsonb().$type<Grid>().notNull(),
    result: varchar({ length: 255 }),
})