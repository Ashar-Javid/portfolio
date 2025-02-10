import { Suspense } from "react"
import LoadingScreen from "../components/LoadingScreen"
import Projects from "../components/Projects"

export default function ProjectsPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Projects />
    </Suspense>
  )
}

