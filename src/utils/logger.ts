/*
 * @Author: 山上沙锅 2943223781@qq.com
 * @Date: 2023-04-14 15:08:00
 * @LastEditors: 山上沙锅 2943223781@qq.com
 * @LastEditTime: 2023-04-14 15:33:14
 * @FilePath: \koa-typeorm-demo\src\utils\logger.ts
 * @Description: 生成操作日志
 * 
 * Copyright (c) 2023 by 山上沙锅, All Rights Reserved. 
 */

import { Context } from 'koa';
 
export function logger() {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
  };
}