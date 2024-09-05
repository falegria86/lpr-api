import sql from 'mssql';
import { dbConfig } from './dbConfig';

export async function connectToDatabase() {
    try {
        let pool = await sql.connect(dbConfig);
        console.log("Conectado a SQL Server");
        return pool;
    } catch (err) {
        console.error("Error al conectar a la base de datos:", err);
        throw err;
    }
}
