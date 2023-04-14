/*
 * @Author: 山上沙锅 2943223781@qq.com
 * @Date: 2023-04-14 15:08:00
 * @LastEditors: 山上沙锅 2943223781@qq.com
 * @LastEditTime: 2023-04-14 15:32:48
 * @FilePath: \koa-typeorm-demo\src\utils\routerResponse.ts
 * @Description: 设置统一返回 json 数据
 * 
 * Copyright (c) 2023 by 山上沙锅, All Rights Reserved. 
 */

import { Context } from 'koa';

function routerResponse(option = {} as any) {
  return async function (ctx: Context, next: () => void) {
    ctx.success = function (data: any) {
      console.log(data);

      ctx.type = option.type || 'json';
      ctx.body = {
        code: option.successCode || 20000,
        msg: option.successMsg || 'success',
        data: data,
      };
    };

    ctx.fail = function (msg: string = 'fail', code: number = 10010) {
      ctx.type = option.type || 'json';
      ctx.body = {
        code: option.failCode || code,
        msg: option.successMsg || msg,
      };
    };

    await next();
  };
}

export { routerResponse };
