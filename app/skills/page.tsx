import { Suspense } from "react"
import LoadingScreen from "../components/LoadingScreen"
import Skills from "../components/Skills"

export default function SkillsPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Skills />
    </Suspense>
  )
}

