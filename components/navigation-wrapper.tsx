import { getComponentDataServer } from "@/lib/load-json-server"
import { Navigation } from "./navigation"

// Server Component - automatically refreshes in dev when JSON changes
export async function NavigationWrapper() {
  // Fetch navigation data server-side
  const navigationData = await getComponentDataServer('navigation')

  return <Navigation data={navigationData} />
}
