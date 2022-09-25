import { jwtVerifierMiddleware } from '@practica/jwt-token-verifier';
import * as configurationProvider from '@practica/configuration-provider';

export const verifyJwt = () => {
  return jwtVerifierMiddleware({
    secret: configurationProvider.getValue('jwtTokenSecret'),
  });
};
