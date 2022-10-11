import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
	return (
		<div>
			<Head>
				<title>Web development</title>
				<meta name="description" content="news" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<h1>Hello Next!!</h1>
				<Link href="/posts">
					<a>posts</a>
				</Link>
				<br />
				<Link href="/users">
					<a>users</a>
				</Link>
			</div>
		</div>
	);
}
