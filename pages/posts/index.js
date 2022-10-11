import Link from 'next/link';
import style from './post.module.css'
// import { Router } from 'next/router';

export default function index({ articles }) {
	return (
		<div className={style.container}>
			{articles.map((article) => (
				<Link href={`/posts/${article.id}`} key={article.id}>
					<div className={style.article}>
						<h1>{article.name}</h1>
						<p>{ article.description }</p>
					</div>
				</Link>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const response = await fetch('http://localhost:3000/api/articles');
	const data = await response.json();
	console.log(data);

	return {
		props: {
			articles: data
		}
	};
}
