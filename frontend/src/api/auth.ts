import {baseAuthDomain} from './domains';
import {post} from './httpProvider';

export async function signin(data: any) {
  let res = await post(baseAuthDomain + '/signin', data);
  return res;
}
export async function signup(data: any) {
  let res = await post(baseAuthDomain + '/signup', data);
  return res;
}
