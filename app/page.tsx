import { Suspense } from "react"
import Loading from "./components/Loading"
import Home from "./components/Home"

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  )
}

