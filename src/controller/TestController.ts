import { Context } from 'koa';
import TestService from '../service/TestService';
export default class TestController {
    public static async test(ctx: Context) {
      try {
        const res = await TestService.test()
        ctx.success(res)
      } catch (error) {
        ctx.fail('测试失败')
      }
    }
}