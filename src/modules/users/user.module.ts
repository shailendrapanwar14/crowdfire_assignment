import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './entities/user.entity.';
import { UserPosts } from './entities/user.posts.entity';
import { UserFollowers } from './entities/user.followers.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
@Module({
  imports: [
    SequelizeModule.forFeature([
      Users,
      UserPosts,
      UserFollowers,
    ]),
  ],

  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
