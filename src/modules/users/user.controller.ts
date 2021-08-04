import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateFollowersDto } from './dto/create.followers.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('/create-user')
  @ApiFoundResponse({
    description: 'returns the data of the created user',
    type: CreateUserDto,
  })
  insertUserData(
    @Body()    
    createUserDto: CreateUserDto,
  ) {
    return this.userService.insertUserData(createUserDto);
  }

  @Post('/post-update')
  @ApiFoundResponse({
    description: 'returns the data of the post',
    type: CreatePostDto,
  })
  insertPostData(
  @Body()
  createPostDto: CreatePostDto) {
    console.log('body ', createPostDto)
    return this.userService.insertPostData(createPostDto);
  }

  @Get('/follow-people:userId')
  
  getPeople(
    @Query  
    ('userId') userId: number)    
     {
    return this.userService.getPeople(userId);
  }

  @Post('/followers')
  @ApiFoundResponse({
    description: 'returns the data of the followers',
    type: CreateFollowersDto,
  })
  insertFollowers(
  @Body()
  createFollowersDto: CreateFollowersDto) {
    console.log('body ', createFollowersDto)
    return this.userService.insertFollowers(createFollowersDto);
  }

  @Get('/timeline:followerId')
  
  getTimeline(
    @Query  
    ('followerId') followerId: number)    
     {
    return this.userService.getTimeline(followerId);
  }
}
