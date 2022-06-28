import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
query MyQuery {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`
interface GetLessonsQueryResponse {
  lessons: Array<{
    id: string;
    title: string;
    slug: string;
    avaliableAt: string;
    lessonType: 'live' | 'class';
  }>
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  console.log("🚀 ~ file: Sidebar.tsx ~ line 18 ~ Sidebar ~ data", data)

  return (
    <aside className="w-[340px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-b-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.avaliableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}