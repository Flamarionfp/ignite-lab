import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from './lib/apolo'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string,
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  console.log("🚀 ~ file: App.tsx ~ line 16 ~ App ~ data", data)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
