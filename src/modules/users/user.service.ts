import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Users } from './entities/user.entity.';
import { UserPosts } from './entities/user.posts.entity';
import { UserFollowers } from './entities/user.followers.entity';
const { Op } = require('sequelize');

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users)
    private usersModel: typeof Users,

    @InjectModel(UserPosts)
    private userPostModel: typeof UserPosts,

    @InjectModel(UserFollowers)
    private userFollowersModel: typeof UserFollowers,

    private sequelize: Sequelize,
  ) {}

  async insertUserData(createUserDto) {
    // to check whether username is taken or not
    const checkUsername = await this.usersModel.findOne({
      where: {
        username: createUserDto.username
      },
    });

    // to check whether email is register or not
    const checkEmail = await this.usersModel.findOne({
      where: {
        email: createUserDto.email
      },
    });

    if (checkUsername) {
      return "username already taken";
    }

    else if (checkEmail) {
      return "email id already registered";
    }

  else{
    const user = await this.usersModel.create(
      createUserDto
    )
    return { user };
  }
  }

  async insertPostData(createPostDto) { 
        const post = await this.userPostModel.create(
          createPostDto,
        );
        return { post };
    
  }

  async getPeople(userId) {
    const people = await this.usersModel.findAll({
      attributes: ['userId', 'name'],
      where: {
        userId: {
          [Op.ne]: userId,
        },
        active: true
      },
    });
    return { people };
  }

  async insertFollowers(createFollowersDto) { 
    const followers = await this.userFollowersModel.create(
      createFollowersDto,
    );
    return { followers };

}

  async getTimeline(followerId) {
    const follower = await this.userFollowersModel.findAll({
      attributes: ['userId'],
      where: {
        followerId: followerId,
        active: true
      },
    });
    const userId = follower.map(({ userId }) => userId)
    
     const timelinePost =  await this.usersModel.findAll({
      attributes: ['userId', 'name'],
      include: {
     model: this.userPostModel,
      
        attributes: ['post', 'postedAt'],
        where: {
          userId: {
            [Op.in]: userId,
          },
          active: true          
        }
      },
      order: [
        [ this.userPostModel, 'postedAt', 'DESC' ],
      ],      
      limit: 10,     
     });  
  return {
    timelinePost };
  }
}
