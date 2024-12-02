import { Sequelize } from 'sequelize-typescript';
import { sequelizeConfig } from './database.config';
// import { SomeModel } from 'src/models/some.model'; 
// import { AnotherModel } from 'src/models/another.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const config = await sequelizeConfig();
            console.log('About to run  new Sequelize...');
            const sequelize = new Sequelize({
                ...config,
                logging: process.env.NODE_ENV !== 'production',
            });
            // try {
            //     console.log('Testing database connection...');
            //     await sequelize.authenticate(); // Test the connection
            //     console.log('Database connection established successfully!');
            // } catch (err) {
            //     console.error('Database connection failed:', err);
            //     throw err;
            // }
            // sequelize.addModels();
            return sequelize;
        },
    },
];
