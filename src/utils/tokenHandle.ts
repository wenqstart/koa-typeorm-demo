/*
 * @Author: 山上沙锅 2943223781@qq.com
 * @Date: 2023-04-09 18:48:34
 * @LastEditors: 山上沙锅 2943223781@qq.com
 * @LastEditTime: 2023-04-14 15:33:42
 * @FilePath: \koa-typeorm-demo\src\utils\tokenHandle.ts
 * @Description: 控制 jwt 的类
 *
 * Copyright (c) 2023 by 山上沙锅, All Rights Reserved.
 */

import jwt from 'jsonwebtoken';
import { TOKEN_CONF } from '../config/index';
const { secretKey, expiresIn } = TOKEN_CONF;

// 使用jwt生成token，传入用户id和权限
function generateToken(payload: object) {
  const token = jwt.sign(
    payload,
    secretKey,
    {
      expiresIn,
    },
  );
  return token;
}
async function verifyToken(token: string) {
  try {
    jwt.verify(token.split(' ')[1], secretKey);
    return true;
  } catch (e) {
    return false;
  }
}

export { generateToken, verifyToken };
