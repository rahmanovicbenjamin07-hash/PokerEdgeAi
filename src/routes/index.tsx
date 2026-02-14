import { createFileRoute } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Popup } from '../components/ui/CustomDialog';
import { Navigation } from "../components/ui/Navigation";
import HeroSection from '../components/ui/sectionHero';
import { EmailInput } from '../components/ui/input';
import { PlayerTypeSelect } from "../components/ui/SelectPlayerType";


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
