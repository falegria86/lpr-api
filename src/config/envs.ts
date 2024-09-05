import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    SQLSERVER_USER: get('SQLSERVER_USER').required().asString(),
    SQLSERVER_PASSWORD: get('SQLSERVER_PASSWORD').required().asString(),
    SQLSERVER_SERVER: get('SQLSERVER_SERVER').required().asString(),
    SQLSERVER_DATABASE: get('SQLSERVER_DATABASE').required().asString(),
    SQLSERVER_PORT: get('SQLSERVER_PORT').required().asPortNumber(),
}