"use client"

import { Globe, Menu, User, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { createClient } from "@/utils/supabase/client"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  
  useEffect(() => {
    const supabase = createClient()
    
    // Check current auth state
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }
    
    checkUser()
    
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )
    
    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe()
    }
  }, [])
  
  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-lg supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-600 group-hover:bg-teal-700 transition-colors">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 ml-2">
                  Supply<span className="text-teal-600">Matrix</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="#features" 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#solutions" 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
              >
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#resources" 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
              >
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#pricing" 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <Button 
                    asChild
                    variant="ghost" 
                    className="rounded-full text-gray-700 hover:text-teal-600 px-3 py-2 transition-colors"
                  >
                    <Link href="/dashboard">
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button 
                    onClick={handleSignOut}
                    className="bg-teal-600 hover:bg-teal-700 px-4 shadow-md hover:shadow-teal-200/50 transition-all"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => router.push('/auth/login')} variant="ghost" className="rounded-full text-gray-700 hover:text-teal-600 px-3 py-2 transition-colors">
                    Sign in
                  </Button>
                  <Button 
                    asChild
                    className="bg-teal-600 hover:bg-teal-700 px-4 shadow-md hover:shadow-teal-200/50 transition-all"
                  >
                    <Link href="/auth/signup">
                      Start free trial
                    </Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 pt-5">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-600">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 ml-2">
                  Supply<span className="text-teal-600">Matrix</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 px-4 space-y-6">
              <Link 
                href="#features" 
                className="block text-base font-medium text-gray-900 hover:text-teal-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#solutions" 
                className="block text-base font-medium text-gray-900 hover:text-teal-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="#resources" 
                className="block text-base font-medium text-gray-900 hover:text-teal-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="#pricing" 
                className="block text-base font-medium text-gray-900 hover:text-teal-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {user && (
                <Link 
                  href="/dashboard" 
                  className="block text-base font-medium text-teal-600 hover:text-teal-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
            </div>
            <div className="mt-auto px-4 pb-8 pt-6 space-y-4">
              {user ? (
                <Button 
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-teal-200/50"
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button 
                    asChild
                    className="w-full bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-teal-200/50"
                  >
                    <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                      Start free trial
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link 
                      href="/auth/login" 
                      className="font-medium text-teal-600 hover:text-teal-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}