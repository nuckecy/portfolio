import { Metadata } from "next"
import { readFileSync } from "fs"
import { join } from "path"
import ReactMarkdown from 'react-markdown'
import { LinkedInResume } from "@/components/linkedin-resume"
import { ExperienceSection } from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Resume",
  description: "Senior Product Designer - Building Products from Zero to Scale | AI | SaaS | Enterprise | B2B & B2C",
}

async function getResumeContent() {
  try {
    const filePath = join(process.cwd(), "md", "resume.md")
    const content = readFileSync(filePath, "utf-8")
    return content
  } catch (error) {
    console.warn("Failed to load resume markdown:", error)
    return "# Resume\n\nResume content not available."
  }
}

export default async function ResumePage() {
  const resumeContent = await getResumeContent()

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8 md:py-16">
      {/* Mobile Sticky Download Button */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <a
          href="/resume.pdf"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          download
        >
          Download PDF Resume
        </a>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        {/* LinkedIn-style Card Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="px-6 py-8 md:px-12 md:py-12">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                  O
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">Otobong Okoko</h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-2">Senior Product Designer - Building Products from Zero to Scale | AI | SaaS | Enterprise | B2B & B2C</p>
                  <p className="text-blue-100 mb-4">Berlin, Germany • otobongsok@gmail.com • +491756899970</p>

                  {/* Desktop Download Button */}
                  <div className="hidden md:block">
                    <a
                      href="/resume.pdf"
                      className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      download
                    >
                      Download PDF Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 md:px-12 md:py-12">
            <LinkedInResume content={resumeContent} />
            
            {/* Experience Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <ExperienceSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
