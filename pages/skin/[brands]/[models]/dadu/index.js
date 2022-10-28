import React from 'react'
import { useRouter } from 'next/router'

const index = () => {

    const router = useRouter()
    const { designs } = router.query
    return (
        <div>you are surfing {designs}</div>
    )
}

export default index