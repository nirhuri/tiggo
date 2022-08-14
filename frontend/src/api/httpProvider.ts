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
    console.log(res);
    return res;
  } catch (e) {
    console.log(JSON.stringify(e));
    return e;
  }
};
const get = async (url: string, data: any) => {
  try {
    await axios({
      method: 'get',
      url: url,
      data,
      headers,
      withCredentials: false,
    });
  } catch (e) {
    console.log(e);
  }
};
export {post, get};
