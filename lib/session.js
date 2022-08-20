import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: 'iron-session/examples/next.js',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
  ttl: 60 * 2,
};

function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}

export { withSessionRoute, withSessionSsr };
