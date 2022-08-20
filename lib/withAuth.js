import { withSessionSsr } from './session';

export const withAuth = (gssp) => {
  return async (context) => {
    const { req } = context;
    const user = req.session.user;

    if (!user) {
      return {
        redirect: {
          destination: '/',
          statusCode: 302,
        },
      };
    }

    return await gssp(context);
  };
};

export const withAuthSsr = (handler) => withSessionSsr(withAuth(handler));
