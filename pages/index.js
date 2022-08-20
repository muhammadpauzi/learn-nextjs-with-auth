import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-5">
      <h1>Hello</h1>
      <Link href="/auth/login">
        <a>Login</a>
      </Link>
      <Link href="/protected">
        <a>Protected</a>
      </Link>
      <Link href="/api/auth/logout">
        <a>Logout</a>
      </Link>
    </div>
  );
}
