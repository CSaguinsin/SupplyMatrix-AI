import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Dashboard() {
  const supabase = await createClient()
  
  // Get session data on the server
  const { data: { user } } = await supabase.auth.getUser()
  
  // If no user is logged in, redirect to login page
  if (!user) {
    redirect('/auth/login')
  }
  
  // Fetch the user's profile data from the users table
  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()
  
  return (
    <div className="flex min-h-screen flex-col p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <form action={async () => {
          'use server'
          const supabase = await createClient()
          await supabase.auth.signOut()
          redirect('/')
        }}>
          <button 
            type="submit"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </form>
      </div>
      
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">User Profile</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg">{user.email}</p>
          </div>
          
          {profile && (
            <>
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-lg">{profile.first_name} {profile.last_name}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Company</p>
                <p className="text-lg">{profile.company || 'Not specified'}</p>
              </div>
            </>
          )}
          
          <div>
            <p className="text-sm font-medium text-gray-500">User ID</p>
            <p className="text-lg font-mono">{user.id}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-500">Last Sign In</p>
            <p className="text-lg">
              {new Date(user.last_sign_in_at || '').toLocaleString() || 'N/A'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  )
}
