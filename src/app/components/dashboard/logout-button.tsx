'use client';

import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleLogout } from '@/app/actions/auth';

export function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const onLogout = async () => {
    try {
      setIsLoggingOut(true);
      // Call the server action to handle logout
      await handleLogout();
      // Note: The server action will handle the redirect
    } catch (error) {
      console.error('Error logging out:', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="gap-2 text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200"
      onClick={onLogout}
      disabled={isLoggingOut}
    >
      <LogOut className="h-4 w-4" />
      <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
    </Button>
  );
}
