import React from 'react';
import { useRouter } from 'next/router';

export default function productDetail() {
    const {query} = useRouter()
  return (
    <div>
      <h1>Proudct {query.productId}  details</h1>
      {/* <h1></h1> */}
    </div>
  );
}
