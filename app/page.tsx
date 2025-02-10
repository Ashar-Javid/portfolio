import { Suspense } from "react"
import LoadingScreen from "./components/LoadingScreen"
import Home from "./components/Home"

export default function Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Home />
    </Suspense>
  )
}

