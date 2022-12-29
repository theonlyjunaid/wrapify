import React from 'react'
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter()
    const { design } = router.query
    console.log(router)
  return (
    <div>hola</div>
  )
}

export default index