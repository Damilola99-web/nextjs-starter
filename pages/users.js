import User from '../components/User';

export default function userList({ users }) {
	return (
		<div>
			<h1>List of users</h1>
			{users && users.map((user) => <User user={user} key={user.id} />)}
		</div>
	);
}

export async function getStaticProps() {
	const response = await fetch('http://localhost:3000/api/users');
	const data = await response.json();
	console.log(data);
	return {
		props: {
			users: data
		}
	};
}
