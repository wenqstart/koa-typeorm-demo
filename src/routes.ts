/*
 * @Author: 山上沙锅 2943223781@qq.com
 * @Date: 2023-02-16 19:12:16
 * @LastEditors: 山上沙锅 2943223781@qq.com
 * @LastEditTime: 2023-04-13 17:51:24
 * @FilePath: \news_cms\src\routes.ts
 * @Description: 注册所有路由
 * 
 * Copyright (c) 2023 by 山上沙锅, All Rights Reserved. 
 */
// src/routes.ts
import Router from '@koa/router';
import TestController from './controller/TestController';
 
const router = new Router();
 
// 注册相关的路由
router.post('/test', TestController.test);



export default router;