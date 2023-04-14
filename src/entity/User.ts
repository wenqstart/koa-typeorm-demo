/*
 * @Author: 山上沙锅 2943223781@qq.com
 * @Date: 2023-04-14 15:18:55
 * @LastEditors: 山上沙锅 2943223781@qq.com
 * @LastEditTime: 2023-04-14 15:22:27
 * @FilePath: \koa-typeorm-demo\src\entity\User.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by 山上沙锅, All Rights Reserved. 
 */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid') // 主键标识，使用 uuid 随机数
    id: string;
  
    @Column({
        unique: true // 用户名唯一
      })
    username: string;
  
    @Column()
    password: string
}