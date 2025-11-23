'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'glass',
          style: {
            background: 'rgba(26, 26, 36, 0.9)',
            color: '#fff',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#FFD700',
              secondary: '#0A0A0F',
            },
          },
        }}
      />
    </QueryClientProvider>
  )
}
