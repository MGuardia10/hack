import { Grid } from "../components/Grid"
import { Hero } from "../components/Hero"
import { Suscribe } from "../components/Suscribe"


export const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Workflow section */}
      <Grid />

      {/* Suscribe Section */}
      <Suscribe />
    </div>
  )
}
