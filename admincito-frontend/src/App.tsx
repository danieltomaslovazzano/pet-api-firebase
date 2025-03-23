import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/lib/auth'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from '@/pages/auth/login'
import AdminLayout from '@/components/layout/AdminLayout'
import Dashboard from '@/pages/Dashboard'
import Users from '@/pages/Users'
import UserProfile from '@/pages/UserProfile'
import NotFound from '@/pages/NotFound'

const queryClient = new QueryClient()

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
          />
          {user ? (
            <Route element={<AdminLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
