import { Metadata } from "next"
import { getPageDataServer } from "@/lib/load-json-server"

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and work experience.",
}

export default async function ResumePage() {
  const resumeData = await getPageDataServer('resume')

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
            {resumeData?.pageTitle || "Resume"}
          </h1>

          {/* Personal Info */}
          {resumeData?.personal && (
            <div className="mb-8 text-muted-foreground">
              <h2 className="text-2xl font-semibold mb-4">{resumeData.personal.name}</h2>
              <p className="text-xl">{resumeData.personal.title}</p>
              <p>{resumeData.personal.location}</p>
              <p>{resumeData.personal.email}</p>
            </div>
          )}

          {/* Summary */}
          {resumeData?.summary && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="text-muted-foreground">{resumeData.summary}</p>
            </section>
          )}

          {/* Experience */}
          {resumeData?.experience && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Experience</h2>
              {resumeData.experience.map((job: any, index: number) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-muted-foreground">{job.company} • {job.duration} • {job.location}</p>
                  <p className="mt-2">{job.description}</p>
                  {job.achievements && (
                    <ul className="mt-2 list-disc list-inside text-muted-foreground">
                      {job.achievements.map((achievement: string, i: number) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Download Link */}
          {resumeData?.downloadLink && (
            <div className="mt-8">
              <a
                href={resumeData.downloadLink}
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                download
              >
                Download PDF Resume
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
