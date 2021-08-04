import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { UserPosts } from './user.posts.entity';
//const bcrypt = require("bcrypt-nodejs");

@Table({
  tableName: 'Users',
})
export class Users extends Model<Users> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  userId: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;
  
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true
  })
  email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
//@bcrypt()  
  password: string;  
 
  @Column({
    type: DataType.DATE,
    allowNull: false,    
    defaultValue:Date.now
  })
  createdAt: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: Boolean;

  @HasMany(() => UserPosts, 'userId')
  UserPosts: UserPosts;

}
