"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "../../components/auth-layout"
import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export default function Signup() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        password: ""
    })
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!termsAccepted) {
            setError("You must accept the terms of service and privacy policy")
            return
        }

        // Simple password validation
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long")
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            const supabase = createClient()
            
            // Store user metadata
            const metadata = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                company: formData.company,
                full_name: `${formData.firstName} ${formData.lastName}`
            }

            // Step 1: Sign up the user
            const { data: authData, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: metadata,
                    emailRedirectTo: `${window.location.origin}/auth/confirm`
                }
            })

            if (signUpError) {
                setError(signUpError.message)
                return
            }

            // Step 2: If signup successful and we have a user ID, update the profile in public.users table
            if (authData.user) {
                // Wait a moment to ensure the trigger has time to create the profile
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Update the user's profile in the public.users table
                const { error: profileError } = await supabase
                    .from('users')
                    .update({  
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        company: formData.company
                    })
                    .eq('id', authData.user.id)  

                if (profileError) {
                    console.error("Error updating user profile:", profileError);
                    
                    // Try an insert as fallback if update fails
                    const { error: insertError } = await supabase
                        .from('users')
                        .insert({
                            id: authData.user.id,
                            first_name: formData.firstName,
                            last_name: formData.lastName,
                            company: formData.company,
                            email: formData.email
                        });
                        
                    if (insertError) {
                        console.error("Fallback insert also failed:", insertError);
                    }
                }
            }

            // Show success message
            setSuccessMessage("Please check your email for a confirmation link to complete your registration")
            
            // Optionally redirect after a delay
            // setTimeout(() => router.push('/auth/login'), 5000)
        } catch (err: any) {
            setError(err.message || "An error occurred during sign up")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthLayout
          heading="Create an account"
          subheading="Enter your information to get started"
          footerText={
            <>
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-teal-600 hover:text-teal-700">
                Sign in
              </Link>
            </>
          }
        >
          {successMessage ? (
            <div className="rounded-md bg-green-50 p-4 text-sm text-green-700">
              <p className="font-medium">{successMessage}</p>
              <p className="mt-2">
                You can close this page or{" "}
                <Link href="/auth/login" className="font-semibold text-teal-600 hover:underline">
                  return to login
                </Link>
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSignUp}>
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@company.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company" 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-500">
                    Password must be at least 8 characters long and include a number and a special character.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    className="mt-1" 
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-teal-600 hover:text-teal-700 underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-teal-600 hover:text-teal-700 underline">
                      privacy policy
                    </Link>
                  </Label>
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          )}
        </AuthLayout>
      )
    }