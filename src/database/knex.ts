import { knex as knexConfig } from "knex"

import confing from "../../knexfile"

export const knex = knexConfig(confing)
