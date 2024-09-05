import { envs } from "./envs";

export const dbConfig = {
    user: envs.SQLSERVER_USER,
    password: envs.SQLSERVER_PASSWORD,
    server: envs.SQLSERVER_SERVER,
    database: envs.SQLSERVER_DATABASE,
    port: envs.SQLSERVER_PORT,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};