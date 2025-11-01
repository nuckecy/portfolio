"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Lock } from "lucide-react"

interface PasswordWallProps {
  caseStudySlug: string
  correctPassword: string
  children: React.ReactNode
}

export function PasswordWall({ caseStudySlug, correctPassword, children }: PasswordWallProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [error, setError] = useState("")
  const [shake, setShake] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [isRecruiter, setIsRecruiter] = useState<boolean | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "" })

  const MAX_ATTEMPTS = 3

  // Note: Password does NOT persist - resets on page refresh
  // Removed localStorage check - user must enter password on every visit

  // Prevent scroll and print when wall is active
  useEffect(() => {
    if (!isUnlocked) {
      // Prevent scroll
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"

      // Prevent print
      const handleBeforePrint = (e: Event) => {
        e.preventDefault()
        alert("This page cannot be printed while access is restricted.")
        return false
      }

      window.addEventListener("beforeprint", handleBeforePrint)

      return () => {
        document.body.style.overflow = ""
        document.documentElement.style.overflow = ""
        window.removeEventListener("beforeprint", handleBeforePrint)
      }
    }
  }, [isUnlocked])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password === correctPassword) {
      // Correct password - unlock (session only, resets on refresh)
      setIsUnlocked(true)
      setPassword("")
    } else {
      // Wrong password - shake animation
      setShake(true)
      setTimeout(() => setShake(false), 500)

      const newAttempts = attempts + 1
      setAttempts(newAttempts)

      if (newAttempts >= MAX_ATTEMPTS) {
        setError(`Incorrect password. Please contact Otobong for access.`)
        setShowRequestForm(true)
      } else {
        setError(`Incorrect password. ${MAX_ATTEMPTS - newAttempts} attempt${MAX_ATTEMPTS - newAttempts > 1 ? 's' : ''} remaining.`)
      }
      setPassword("")
    }
  }

  const handleRequestAccess = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields")
      return
    }

    if (isRecruiter === null) {
      alert("Please answer if you are a recruiter")
      return
    }

    if (!isRecruiter) {
      alert("This portfolio is only visible to recruiters at the moment.")
      return
    }

    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`Password Request - ${caseStudySlug}`)
    const body = encodeURIComponent(
      `Hi Otobong,\n\nI would like to request access to your case study: ${caseStudySlug}\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Role: Recruiter\n\n` +
      `Thank you!`
    )

    window.location.href = `mailto:otobongsok@gmail.com?subject=${subject}&body=${body}`
  }

  // If unlocked, render children without wall
  if (isUnlocked) {
    return <>{children}</>
  }

  // Render password wall
  return (
    <div className="relative">
      {children}

      {/* Password Wall Overlay - Only covers this section */}
      <div
        className="absolute inset-0 z-50 flex items-center justify-center bg-white/[0.78] dark:bg-black/[0.78]"
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body * {
              visibility: hidden !important;
            }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
          }
          .shake {
            animation: shake 0.5s;
          }
        `}} />

        <div className="dark:bg-gray-900 bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-200 dark:border-gray-700">
          {!showRequestForm ? (
            <>
              {/* Password Entry Form */}
              <div className="flex flex-col items-center mb-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Protected Case Study
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  This case study is password protected. Please enter the password to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className={shake ? "shake" : ""}
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}

                <Button type="submit" className="w-full" size="lg">
                  Unlock Case Study
                </Button>
              </form>

              {attempts >= MAX_ATTEMPTS && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">
                    Don't have the password?
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowRequestForm(true)}
                  >
                    Request Password
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Password Request Form */}
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Request Access
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  Fill out the form below to request password access.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Are you a recruiter?</Label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsRecruiter(true)}
                      className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
                        isRecruiter === true
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-input hover:bg-accent"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsRecruiter(false)}
                      className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
                        isRecruiter === false
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-input hover:bg-accent"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {isRecruiter === false && (
                  <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md">
                    This portfolio is only visible to recruiters at the moment.
                  </p>
                )}

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowRequestForm(false)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={handleRequestAccess}
                    disabled={isRecruiter === false}
                  >
                    Send Request
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
