import 'reflect-metadata';
import { User } from '../entity/User';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: '******', // 数据库账号
  password: '******', // 数据库密码
  database: '******', // 数据库名称
  synchronize: true,
  logging: false,
  entities: [
    User
  ],
  migrations: [],
  subscribers: [],
});

export const UserRepository = AppDataSource.getRepository(User);

