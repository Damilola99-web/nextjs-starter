import React from 'react';
import { useRouter } from 'next/router';

export default function review() {
    const {query} = useRouter()
  return (
    <div>
      <h1>review for product {query.productId}</h1>
    </div>
  );
}
