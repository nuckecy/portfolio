"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Lock, X } from "lucide-react"

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
  const [viewMode, setViewMode] = useState<'initial' | 'unlock' | 'request'>('initial')
  const [isRecruiter, setIsRecruiter] = useState<boolean | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isDark, setIsDark] = useState(false)
  const [requestError, setRequestError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const MAX_ATTEMPTS = 3
  const MAX_MESSAGE_LENGTH = 160

  // Note: Password does NOT persist - resets on page refresh
  // Removed localStorage check - user must enter password on every visit

  // Prevent scroll and print when wall is active
  useEffect(() => {
    if (!isUnlocked) {
      // Prevent scroll
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"

      // Scroll to top to show Hero section
      window.scrollTo(0, 0)

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

  // Track dark mode for gradient colors
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

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
      } else {
        setError(`Incorrect password. ${MAX_ATTEMPTS - newAttempts} attempt${MAX_ATTEMPTS - newAttempts > 1 ? 's' : ''} remaining.`)
      }
      setPassword("")
    }
  }

  const handleRequestAccess = async () => {
    setRequestError("")

    if (!formData.name || !formData.email || !formData.message) {
      setRequestError("Please fill in all fields")
      return
    }

    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      setRequestError(`Message must be ${MAX_MESSAGE_LENGTH} characters or less`)
      return
    }

    if (isRecruiter === null) {
      setRequestError("Please answer if you are a recruiter")
      return
    }

    if (!isRecruiter) {
      setRequestError("This portfolio is only visible to recruiters at the moment.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          isRecruiter: isRecruiter,
          caseStudySlug: caseStudySlug,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setRequestError(data.error || "Failed to send request. Please try again.")
        return
      }

      // Success! Show success message
      setShowSuccess(true)
      // Reset form after 15 seconds and return to initial view
      setTimeout(() => {
        setShowSuccess(false)
        setViewMode("initial")
        setFormData({ name: "", email: "", message: "" })
        setIsRecruiter(null)
      }, 15000)
    } catch (error) {
      console.error("Error sending request:", error)
      setRequestError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
        className={`fixed left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
          viewMode === 'request' ? 'top-0 bottom-0' : 'top-[60%] bottom-0'
        }`}
        style={{
          backdropFilter: "blur(8px)",
          background: isDark
            ? "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))"
            : "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9))",
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

        <div className="dark:bg-gray-900 bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 border border-gray-200 dark:border-gray-700">
          {viewMode === 'initial' && (
            <>
              {/* Initial Choice Screen */}
              <div className="flex flex-row items-center gap-4 mb-5">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full flex-shrink-0">
                  <Lock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Protected Case Study
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Case study is only available on request.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => setViewMode('unlock')}
                >
                  Unlock with Password
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => setViewMode('request')}
                >
                  Request Password
                </Button>
              </div>
            </>
          )}

          {viewMode === 'unlock' && (
            <>
              {/* Password Entry Form */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setViewMode('initial')}
                  className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>

              <div className="flex flex-row items-center gap-4 mb-5">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full flex-shrink-0">
                  <Lock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Protected Case Study
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Case study is only available on request.
                  </p>
                </div>
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

                <Button type="submit" className="w-full" size="lg" disabled={!password}>
                  Unlock Case Study
                </Button>
              </form>
              </div>
            </>
          )}

          {viewMode === 'request' && (
            <>
              {/* Password Request Form */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setViewMode('initial')}
                  className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Request Access
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  Fill out the form below to request password access.
                </p>
              </div>

              {!showSuccess ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name <span className="text-red-600 dark:text-red-400">*</span></Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-red-600 dark:text-red-400">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="message">Message <span className="text-red-600 dark:text-red-400">*</span></Label>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formData.message.length}/{MAX_MESSAGE_LENGTH}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => {
                        const newMessage = e.target.value.slice(0, MAX_MESSAGE_LENGTH)
                        setFormData({ ...formData, message: newMessage })
                      }}
                      onFocus={(e) => {
                        if (e.target.value === "") {
                          // Placeholder will be handled by CSS placeholder
                        }
                      }}
                      placeholder="Tell Otobong a bit about yourself and why you're requesting access"
                      className="w-full min-h-[100px] max-h-[200px] px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Are you a recruiter? <span className="text-red-600 dark:text-red-400">*</span></Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="recruiter-yes"
                          name="recruiter"
                          checked={isRecruiter === true}
                          onChange={() => setIsRecruiter(true)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label htmlFor="recruiter-yes" className="cursor-pointer text-gray-700 dark:text-gray-300">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="recruiter-no"
                          name="recruiter"
                          checked={isRecruiter === false}
                          onChange={() => setIsRecruiter(false)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label htmlFor="recruiter-no" className="cursor-pointer text-gray-700 dark:text-gray-300">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  {isRecruiter === false && (
                    <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md">
                      This portfolio is only visible to recruiters at the moment.
                    </p>
                  )}

                  {requestError && (
                    <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                      {requestError}
                    </p>
                  )}

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleRequestAccess}
                    disabled={isRecruiter === false || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">✓</div>
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">Request Sent Successfully!</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      Thank you for reaching out. I usually reply within a few hours.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Check your email for updates and confirmation.
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        setShowSuccess(false)
                        setViewMode("initial")
                        setFormData({ name: "", email: "", message: "" })
                        setIsRecruiter(null)
                      }}
                      className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    This window will close automatically in 15 seconds
                  </p>
                </div>
              )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
