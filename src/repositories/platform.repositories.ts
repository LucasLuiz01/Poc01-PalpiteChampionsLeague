import { connection } from "../database/db.js";
import { QueryResult } from "pg";

export async function insertPlat (nome:string): Promise<void> {
    console.log(nome,"dsdasdasdasdasdasdsadas")
    await connection.query('INSERT INTO platform (name) VALUES ($1)', [nome]);  
}

export async function getMovies (): Promise<QueryResult> {
const movies = await connection.query(`SELECT p.name AS "Plataforma", COUNT(s.id) AS "Quantidade de filmes" FROM platform p LEFT JOIN "moviePlatform" m ON p.id = "idPlatform" LEFT JOIN movie s ON m."idMovie" = s.id GROUP BY p.id`);
return movies
}