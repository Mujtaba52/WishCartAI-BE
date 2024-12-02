import * as AWS from 'aws-sdk';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import "dotenv/config";

async function getAuroraEndpoint(): Promise<string> {
    const rds = new AWS.RDS({ region: process.env.AWS_REGION });
    const dbClusterIdentifier = process.env.DB_CLUSTER_IDENTIFIER;

    if (!dbClusterIdentifier) {
        throw new Error('DB_CLUSTER_IDENTIFIER environment variable is not set');
    }
    console.log('Before calling RDS');

    try {
        const result = await rds.describeDBClusters({ DBClusterIdentifier: dbClusterIdentifier }).promise();
        console.log('RDS result:', result);
        if (result.DBClusters && result.DBClusters[0].Endpoint) {
        return result.DBClusters[0].Endpoint;
        }
        throw new Error('DB Cluster endpoint not found');
    } catch (error) {
        console.error('Error retrieving Aurora endpoint:', error);
        throw error;
    }
}

export async function sequelizeConfig(): Promise<SequelizeModuleOptions> {
    let dbUsername: string;
    let dbPassword: string;

    switch (process.env.NODE_ENV) {
        case 'production':
        dbUsername = process.env.DB_MASTER_USERNAME_prod;
        dbPassword = process.env.DB_MASTER_PASSWORD_prod;
        break;
        case 'staging':
        dbUsername = process.env.DB_MASTER_USERNAME_staging;
        dbPassword = process.env.DB_MASTER_PASSWORD_staging;
        break;
        case 'development':
        default:
        dbUsername = process.env.DB_MASTER_USERNAME_dev;
        dbPassword = process.env.DB_MASTER_PASSWORD_dev;
        break;
    }

    console.log('Fetching Aurora endpoint...');
    const dbHost = await getAuroraEndpoint();
    console.log('Aurora endpoint resolved:', dbHost);
    return {
        dialect: 'postgres',
        host: dbHost,
        port: Number(process.env.DB_PORT) || 5432,
        database: process.env.DB_NAME,
        username: dbUsername,
        password: dbPassword,
        autoLoadModels: true,
        synchronize: false, // To use migrations instead of sync
        dialectOptions: {
        ssl: process.env.NODE_ENV === 'production'
            ? { require: true, rejectUnauthorized: false }
            : undefined,
        },
    };
}
