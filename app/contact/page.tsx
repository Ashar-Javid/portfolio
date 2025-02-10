import { Suspense } from "react"
import LoadingScreen from "../components/LoadingScreen"
import Contact from "../components/Contact"

export default function ContactPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Contact />
    </Suspense>
  )
}

