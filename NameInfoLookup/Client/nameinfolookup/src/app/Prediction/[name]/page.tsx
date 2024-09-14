import React from 'react'

function page({params} : any) {
  return (
    <div>{params.name}</div>
  )
}

export default page