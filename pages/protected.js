import { withAuthSsr } from 'lib/withAuth';
import Link from 'next/link';

export default function Protected() {
  return (
    <>
      <h1>Protected</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </>
  );
}

export const getServerSideProps = withAuthSsr((context) => {
  return {
    props: {},
  };
});
