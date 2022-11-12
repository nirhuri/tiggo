import {baseAuthDomain} from './domains';
import {post} from './httpProvider';

export async function signin(data: any) {
  return await post(`${baseAuthDomain}/users/signin`, data);
}
export async function signup(data: any) {
  return await post(`${baseAuthDomain}/users/signup`, data);
}
