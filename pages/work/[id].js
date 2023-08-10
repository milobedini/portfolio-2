import { useRouter } from 'next/router'
import React from 'react'

const ProjectPage = () => {
  const router = useRouter()
  const { id } = router.query

  console.log(id)
  return (
    <div>
      <h2>Project Title</h2>
      <p>id {id}</p>
    </div>
  )
}

export default ProjectPage
