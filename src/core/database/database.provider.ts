import { Sequelize } from 'sequelize-typescript';
import { UserFollowers } from 'src/modules/users/entities/user.followers.entity';
import { UserPosts } from 'src/modules/users/entities/user.posts.entity';
import { Users } from 'src/modules/users/entities/user.entity.';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constant';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        Users,
        UserPosts,
        UserFollowers
      ]);      
      await sequelize.sync({logging: console.log});
      return sequelize;
    },
  },
];
