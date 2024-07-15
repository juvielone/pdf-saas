import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

//Caches connection
neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
  throw new Error("Database URL Not Found");
}

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);

export const db = drizzle(sql);
