import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { SEQUELIZE } from 'src/common/db.env.constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        ...databaseConfig[process.env.NODE_ENV || 'local'],
        models: [],
      });
      
    //   await sequelize.sync();
      return sequelize;
    },
  },
];
