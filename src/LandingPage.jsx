import Navbar from "./Navbar"
import { Content } from "./sections/Content"
import { HeroSection } from "./sections/HeroSection"
import { cn } from "@/lib/utils";

function LandindPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Content/>
    </>
  )
}

export default LandindPage
