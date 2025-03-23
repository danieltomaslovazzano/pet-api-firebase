import { useUsers } from '@/hooks/useUsers';
import UserCard from '@/components/users/UserCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, AlertCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Dashboard() {
  const { data: usersData, isLoading, error } = useUsers({ limit: 4 });

  if (isLoading) {
    return (
      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full animate-blur-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-64 mt-2" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        
        <Card className="shadow-sm border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-4 w-48 mt-2" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-48" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full animate-blur-in">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Error al cargar los usuarios. Por favor, intenta de nuevo más tarde.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const users = usersData?.items || [];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto w-full animate-blur-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage and monitor your user accounts.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>
      
      <Card className="shadow-sm border-border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Recent Users</CardTitle>
            <Button variant="link" className="p-0 h-auto" onClick={() => window.location.href = '/users'}>
              View all users
            </Button>
          </div>
          <CardDescription>
            Recently active user accounts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {users.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No users found.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
