import { useRouter } from 'next/router';
import React from 'react';

export default function Doc() {
    const {query} = useRouter()
  return (
    <div>
      <h1>doc</h1>
    </div>
  );
}
