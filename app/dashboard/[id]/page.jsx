import { useSearchParams } from 'next/navigation';
import React from 'react'

const page = () => {

  const params = useSearchParams().id

  return (
    <div>page</div>
  )
}

export default page;