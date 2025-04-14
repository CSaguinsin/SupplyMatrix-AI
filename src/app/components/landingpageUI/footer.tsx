"use client"
import { Globe } from "lucide-react"
export default function Footer() {
    return(
        <>
              <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Globe className="h-6 w-6 text-teal-600" />
                <span>Supply Matrix AI</span>
              </div>
              <p className="text-gray-500 mb-4 max-w-xs">
                AI-driven supply chain intelligence for proactive risk management.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-teal-600">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.5c-1.4 1.4-2.8 2-4.2 2h-.2c-.8 0-1.7-.2-2.6-.6v1.1c0 3-2.5 5.5-5.5 5.5-.3 0-.5 0-.8-.1h.3c1.7 0 3.3-.8 4.4-2.2-1.6 0-3-1.1-3.5-2.6h.7c.3 0 .6 0 .9-.1-1.7-.4-3-1.9-3-3.7v-.1c.5.3 1.1.5 1.7.5-1-.7-1.7-1.8-1.7-3 0-.7.2-1.3.5-1.9 1.9 2.3 4.7 3.8 7.9 4-.1-.3-.1-.6-.1-.9 0-2.2 1.8-4 4-4 1.1 0 2.1.5 2.8 1.2.9-.2 1.7-.5 2.4-1-.3.9-.9 1.6-1.6 2.1.8-.1 1.5-.3 2.2-.6-.5.7-1.1 1.4-1.9 1.9z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#features" className="hover:text-teal-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-teal-600">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-teal-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#faq" className="hover:text-teal-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Powered by 
            <a href="https://www.craftora.tech/" target="_blank"> Craftora</a>.
          </p>
          </div>
        </div>
      </footer>
        </>
    )
}