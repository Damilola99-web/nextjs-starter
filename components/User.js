import React from 'react';

export default function User({ user }) {
	return (
		<div>
			<div key={user.id}>
				<p>username: {user.name}</p>
				<p>user email: {user.email}</p>
			</div>
		</div>
	);
}
