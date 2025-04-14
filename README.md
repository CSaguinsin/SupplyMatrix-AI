# 🌎 SupplyMatrix AI

![SupplyMatrix AI](https://img.shields.io/badge/SupplyMatrix-AI-teal)
![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black)
![Supabase](https://img.shields.io/badge/Supabase-Auth-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 What is SupplyMatrix AI?

SupplyMatrix AI is a friendly web application that helps businesses manage their supply chains better! It uses smart technology to make sure companies always have the right amount of products at the right time, and can predict when they need to order more.

Think of it like a really smart assistant that helps stores and businesses make sure they never run out of things they need to sell!

## ✨ Features

- **🔐 Secure Login System**: Sign up and log in safely with email verification
- **📊 Beautiful Dashboard**: See all your important information in one place
- **🤖 AI-Powered Predictions**: Smart technology that helps predict what you'll need
- **📱 Mobile Friendly**: Works great on phones, tablets, and computers
- **🌈 Modern Design**: Clean, beautiful interface that's easy to use

## 🚀 Getting Started

### What You Need Before Starting

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [Supabase](https://supabase.com/) account (free to start)

### Setup Steps

**1. Copy the Project to Your Computer**

```bash
git clone https://github.com/yourusername/supplymatrixai.git
cd supplymatrixai
```

**2. Install the Magic Pieces**

```bash
npm install
```

**3. Set Up Your Secret Keys**

Create a file named `.env.local` in the main folder and add:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

You can find these values in your Supabase project dashboard.

**4. Start the App**

```bash
npm run dev
```

Now open your web browser and go to: http://localhost:3000

## 📱 How to Use

1. **Sign Up**: Create a new account with your email
2. **Verify Email**: Click the link sent to your email
3. **Log In**: Enter your email and password
4. **Dashboard**: View your supply chain information
5. **Settings**: Customize your experience

## 🔧 Project Structure

```
supplymatrixai/
├── public/                 # Images and public files
├── src/                    # All the code lives here
│   ├── app/                # Pages and routing
│   │   ├── auth/           # Login, signup, and authentication
│   │   ├── dashboard/      # User dashboard
│   │   └── components/     # Reusable page pieces
│   ├── components/         # UI building blocks
│   ├── lib/                # Helpful utilities
│   ├── utils/              # Helper functions
│   │   └── supabase/       # Supabase connection tools
│   └── middleware.ts       # Authentication checking
├── .env.local              # Secret keys (not shared)
├── next.config.ts          # Next.js settings
├── package.json            # Project information
└── README.md               # This helpful guide
```

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org/)**: The framework for building the app
- **[React 19](https://react.dev/)**: For creating the user interface
- **[Supabase](https://supabase.com/)**: For user accounts and data storage
- **[Tailwind CSS](https://tailwindcss.com/)**: For making everything look nice
- **[TypeScript](https://www.typescriptlang.org/)**: For writing better code

## 📂 Authentication System Explained

### The `utils/supabase` Folder

This folder contains all the necessary files to handle Supabase authentication in different contexts:

#### 1. `utils/supabase/client.ts`

```typescript
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**What it does**: 
- Creates a Supabase client for browser environments (client-side)
- Used in React Client Components where code runs in the user's browser
- Allows components like the navbar, login form, and signup form to interact with Supabase
- The exclamation marks (`!`) tell TypeScript that these environment variables will definitely exist

#### 2. `utils/supabase/server.ts`

```typescript
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
```

**What it does**:
- Creates a Supabase client for server environments
- Used in Server Components and API route handlers
- Handles cookie management for authentication
- The try/catch block deals with the limitation that Server Components can't directly set cookies
- This is why we need middleware (explained below) to handle cookie refreshing

#### 3. `utils/supabase/middleware.ts`

```typescript
import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function updateSession(request: NextRequest) {
  // Create a response object to modify
  const response = NextResponse.next()
  
  // Create a Supabase client using the middleware client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          // If the cookie is updated, update the cookies for the request and response
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: any) {
          // If the cookie is removed, update the cookies for the request and response
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Refresh the session
  await supabase.auth.getUser()
  
  return response
}
```

**What it does**:
- Creates a function that middleware can use to refresh authentication
- Manages cookies for both the incoming request and outgoing response
- Ensures that authentication tokens are refreshed when needed
- Handles updating, setting, and removing cookies as necessary

### The Root `middleware.ts` File

```typescript
import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

**What it does**:
- Runs before every applicable request to the application
- Uses the `updateSession` function from utils/supabase/middleware.ts
- The matcher configuration tells Next.js when to run this middleware (and when not to)
- Excludes static files, images, and favicon from authentication checking
- This middleware is essential because Server Components can't set cookies directly

### How the Authentication Flow Works

1. **User visits the site**:
   - Middleware runs on the request
   - Authentication tokens are refreshed if necessary

2. **User logs in through the Login page**:
   - The client-side Supabase client (`client.ts`) handles the login request
   - Supabase returns session cookies that are stored in the browser

3. **User accesses protected pages (like Dashboard)**:
   - The server-side Supabase client (`server.ts`) checks if the user is authenticated
   - If not authenticated, the user is redirected to the login page
   - If authenticated, the Dashboard is displayed with the user's information

4. **Authentication tokens expire**:
   - Middleware automatically refreshes tokens
   - This happens transparently to the user without interrupting their session

This architecture ensures secure, server-side authentication while providing a seamless user experience.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
