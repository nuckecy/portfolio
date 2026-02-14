import { Metadata } from "next"
import { getPageDataServer } from "@/lib/load-json-server"
import { AboutPageContent } from "@/components/about-page-content"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my design philosophy and approach",
}

export default async function AboutPage() {
  const aboutData = await getPageDataServer('about')

  return <AboutPageContent data={aboutData} />
}
