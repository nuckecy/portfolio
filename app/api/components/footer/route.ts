import { getComponentDataServer } from "@/lib/load-json-server"

export async function GET() {
  try {
    const footerData = await getComponentDataServer('footer')

    if (!footerData) {
      return new Response(
        JSON.stringify({ error: 'Footer data not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify(footerData),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch footer data' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
