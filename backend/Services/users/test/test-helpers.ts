import jwt from 'jsonwebtoken';
import axios from 'axios';

export const getAxiosInstance = (address) => {
  const axiosConfig = {
    baseURL: `http://127.0.0.1:${address.port}`,
    Headers: {
      'content-type': 'application/json',
      authorization: 'Bearer...',
    },
  };

  return axios.create(axiosConfig);
};

export function generateRandomEmailAddress() {
  const randomName = Math.floor(Math.random() * 10000 + 1);
  const emailProvider = ['gmail', 'gml', 'gmal', 'yahoo', 'yho', 'yo'];
  const randomProvider =
    emailProvider[Math.floor(Math.random() * emailProvider.length)];
  const email = `${randomName}@${randomProvider}.com`;
  return email;
}

export function signValidTokenWithDefaultUser() {
  return internalSignTokenSynchronously('joe', 'admin', Date.now() + 60 * 60);
}

export function signValidToken(user, role) {
  return internalSignTokenSynchronously(user, role, Date.now() + 60 * 60);
}

export function signExpiredToken(user, role) {
  return internalSignTokenSynchronously(user, role, 0);
}

function internalSignTokenSynchronously(user, roles, expirationInUnixTime) {
  const token = jwt.sign(
    {
      exp: expirationInUnixTime,
      data: {
        user,
        roles,
      },
    },
    exampleSecret
  );

  return token;
}

export const exampleSecret = 'secret';
