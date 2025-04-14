import Link from 'next/link'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-red-600">Authentication Error</h1>
        <p className="mb-4 text-gray-600">
          We encountered an issue while processing your authentication request. This could be due to:
        </p>
        <ul className="mb-6 list-inside list-disc text-gray-600">
          <li>An expired verification link</li>
          <li>An invalid token</li>
          <li>The account has already been verified</li>
        </ul>
        <div className="flex flex-col gap-4">
          <Link 
            href="/auth/login"
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Go to Login
          </Link>
          <Link 
            href="/"
            className="inline-flex w-full justify-center rounded-md bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
