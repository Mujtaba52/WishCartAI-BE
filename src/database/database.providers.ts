import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { SEQUELIZE } from 'src/common/db.env.constants';
import { User } from 'src/core/users/entities/user.entity';
import { Product } from 'src/core/products/entities/product.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        ...databaseConfig[process.env.NODE_ENV || 'local'],
        models: [User, Product],
      });

      //   await sequelize.sync();
      return sequelize;
    },
  },
];
