/**
 * Resume Page Configuration
 */

export const resumeConfig = {
  metadata: {
    title: "Resume",
    description: "Professional resume and work experience.",
  },
  
  pageTitle: "Resume",
  
  // Personal Information
  personal: {
    name: "Otobong Okoko",
    title: "Senior Product Designer",
    email: "your.email@example.com",
    location: "Your Location",
    website: "https://yourwebsite.com",
    linkedin: "https://linkedin.com/in/otobong-okoko"
  },
  
  // Summary
  summary: "Add your professional summary here...",
  
  // Work Experience
  experience: [
    // Add your work experience items here
    // {
    //   company: "Company Name",
    //   position: "Position Title",
    //   duration: "2020 - Present",
    //   location: "Location",
    //   description: "Description of your role...",
    //   achievements: []
    // }
  ],
  
  // Education
  education: [
    // Add your education items here
  ],
  
  // Skills
  skills: {
    design: [],
    technical: [],
    soft: []
  },
  
  // Certifications
  certifications: [
    // Add certifications here
  ],
  
  // Download Resume
  downloadLink: "/resume.pdf" // Add your resume PDF to public folder
}

export type ResumeConfig = typeof resumeConfig
