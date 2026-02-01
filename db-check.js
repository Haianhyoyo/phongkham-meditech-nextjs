require('dotenv').config();
const mysql = require('mysql2/promise');

async function checkConnection() {
    console.log('--- START CONNECTION TEST ---');
    console.log('Reading .env file...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL || 'NOT FOUND');

    try {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            throw new Error('DATABASE_URL is missing in .env');
        }

        // Parse connection string
        // Format: mysql://USER:PASS@HOST:PORT/DB_NAME
        const regex = /mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
        const match = dbUrl.match(regex);

        if (!match) {
            throw new Error('DATABASE_URL format is invalid. Expected: mysql://USER:PASS@HOST:PORT/DB');
        }

        const [_, user, password, host, port, database] = match;

        console.log('Connecting to MySQL with:');
        console.log('User:', user);
        console.log('Host:', host);
        console.log('Port:', port);
        console.log('Database:', database);

        const connection = await mysql.createConnection({
            host,
            user,
            password,
            database,
            port: parseInt(port)
        });

        console.log('✅ KẾT NỐI THÀNH CÔNG! (SUCCESS)');
        const [rows] = await connection.execute('SHOW TABLES');
        console.log('Tables in database:', rows.map(r => Object.values(r)[0]));

        await connection.end();

    } catch (error) {
        console.error('❌ KẾT NỐI THẤT BẠI (FAILED)');
        console.error('Lỗi chi tiết:', error.message);
        if (error.code) console.error('Error Code:', error.code);
    }
    console.log('--- END CONNECTION TEST ---');
}

checkConnection();
