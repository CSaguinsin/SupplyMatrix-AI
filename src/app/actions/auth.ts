'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

/**
 * Server action to handle user logout
 * Clears the session and redirects to the login page
 */
export async function handleLogout() {
  const supabase = await createClient();
  
  // Sign out the user
  await supabase.auth.signOut();
  
  // Instead of trying to manually clear cookies, we'll rely on the
  // Supabase auth signOut which should handle cookie clearing automatically
  // The redirect will force a page refresh clearing the user session
  
  // Redirect to the login page
  redirect('/auth/login');
}
