import { Suspense } from "react"
import LoadingScreen from "../components/LoadingScreen"
import About from "../components/About"

export default function AboutPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <About />
    </Suspense>
  )
}

