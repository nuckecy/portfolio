import { getPageDataServer } from "@/lib/load-json-server"
import { HomePageContent } from "@/components/home-page-content"

export default async function Home() {
  const homeData = await getPageDataServer('home')

  return <HomePageContent data={homeData} />
}
