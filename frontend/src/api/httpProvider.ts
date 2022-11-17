import axios from 'axios';
const headers = {
  'Content-Type': 'application/json',
};
const post = async (url: string, data: any) => {
  let res = {};
  try {
    res = await axios({
      method: 'post',
      url: url,
      data,
      headers,
      withCredentials: false,
    });
    return res;
  } catch (e) {
    return e;
  }
};
const get = async (url: string, data: any) => {
  try {
    const res = await axios({
      method: 'get',
      url: url,
      data,
      headers,
      withCredentials: false,
    });
    return JSON.stringify(res);
  } catch (e) {
    return e;
  }
};
export {post, get};
