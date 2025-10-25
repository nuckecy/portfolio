import { getComponentDataServer } from "@/lib/load-json-server"
import { ConditionalFooter } from "./conditional-footer"

// Server Component - automatically refreshes in dev when JSON changes
export async function FooterWrapper() {
  // Fetch footer data server-side
  const footerData = await getComponentDataServer('footer')

  return <ConditionalFooter data={footerData} />
}
