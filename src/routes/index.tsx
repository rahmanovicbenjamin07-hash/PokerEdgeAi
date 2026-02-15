import { createFileRoute } from '@tanstack/react-router'
import { Navigation } from "../components/ui/Navigation";
import HeroSection from '../components/ui/sectionHero';

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
    </>
  )
}
