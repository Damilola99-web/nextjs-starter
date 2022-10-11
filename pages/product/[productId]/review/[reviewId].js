
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function reviewDetails() {
	const { query } = useRouter();
	return (
        <div>
            <Head>
                <title>review</title>
            </Head>
			<h1>
				review {query.reviewId} for product {query.productId}
			</h1>
		</div>
	);
}
