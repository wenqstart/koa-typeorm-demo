import { UserRepository } from '../config/data-source';
import { User } from '../entity/User';

export default class TestService {
  public static async test() {
    return '测试成功';
  }
}
