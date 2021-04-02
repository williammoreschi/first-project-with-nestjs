export default {
  jwt: {
    secret: process.env.JWT_APP_SECRET || 'default',
    expiresIn: process.env.JWT_APP_EXPIRES_IN || '1d',
  },
};
