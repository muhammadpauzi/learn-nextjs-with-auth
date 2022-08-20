import Head from 'next/head';
import useUser from 'hooks/useUser';
import Container from 'components/Container';
import Layout from 'components/Layout';
import Input from 'components/Forms/Input';
import Button from 'components/Forms/Button';
import Label from 'components/Forms/Label';
import Router from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/session';

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) return alert(data.message);

    mutateUser(data);
    Router.push('/');
  };

  return (
    <Layout title="Silahkan Masuk">
      <Container className="py-20">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg p-7 rounded bg-white mx-auto"
        >
          <h1 className="text-3xl mb-5 font-extrabold">Silahkan Masuk</h1>
          <div className="space-y-3 mb-5">
            <div>
              <Label>Email</Label>
              <Input type="email" name="email" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" name="password" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="px-10"
              processing={false}
              processingText="Proses..."
            >
              Masuk
            </Button>
          </div>
        </form>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
},
sessionOptions);
