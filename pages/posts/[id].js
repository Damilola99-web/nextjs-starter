import React from 'react'

function details({article}) {
  return (
    <div>
      <h1>{ article.name}</h1>
    </div>
  )
}

export default details

export async function getStaticProps(context) {
  const {params} = context
  const response = await fetch(`http://localhost:3000/api/articles/${params.id}`)
  const data = await response.json()
  console.log(data)
  return {
    props: {
      article : data
    }
  }
}