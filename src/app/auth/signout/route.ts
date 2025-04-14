import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function POST(request: Request) {
  const cookieStore = cookies()
  const supabase = await createClient()
  
  // Sign the user out
  await supabase.auth.signOut()
  
  return NextResponse.redirect(new URL('/', request.url), {
    status: 302,
  })
}
