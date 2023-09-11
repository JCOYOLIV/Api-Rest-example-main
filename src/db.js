import {createPool} from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config.js'


//      export const pool = createPool({
//      host: '172.18.168.156',
//      user: 'usr_wizeline',
//      password: 'Wiz3%$5123#',
//      port: '',
//      database: 'dbPaperless'
//      });



//      export const pool = createPool({
//      host: '127.0.0.1',
//      user: 'root',
//      password: '',
//      port: '3306',
//      database: 'paperless'
//      });


export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
})

