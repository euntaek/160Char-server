import { ReturnData } from './return';
import { ErroInfo } from './error';

declare global {
  interface UserInfo {
    _id: string;
    email: string;
    username: string;
    profile: {
      _id: string;
      display_name: string;
      thumbnail: string;
    };
  }
  interface ServiceData<T = any> extends ReturnData<T> {}
  interface ErrorParams extends ErroInfo {}
}
