import { getComponentDataServer } from "@/lib/load-json-server"
import { ConditionalNavigation } from "./conditional-navigation"

// Server Component - automatically refreshes in dev when JSON changes
export async function NavigationWrapper() {
  // Fetch navigation data server-side
  const navigationData = await getComponentDataServer('navigation')

  return <ConditionalNavigation data={navigationData} />
}
