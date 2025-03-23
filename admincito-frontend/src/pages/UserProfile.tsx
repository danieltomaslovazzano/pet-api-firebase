import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useUser, useUpdateUser, useToggleUserStatus, useChangeUserRole, useDeleteUser } from '@/hooks/useUsers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { formatDate, getRoleBadgeVariant, getStatusColor, capitalizeFirstLetter } from '@/lib/utils';
import { UserRole, UserStatus } from '@/types/user';

export default function UserProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useUser(id!);
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: toggleStatus } = useToggleUserStatus();
  const { mutate: changeRole } = useChangeUserRole();
  const { mutate: deleteUser } = useDeleteUser();

  const handleGoBack = () => {
    navigate('/users');
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" disabled>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleGoBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-semibold">User Details</h1>
        </div>
        
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Error loading user details. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/users" replace />;
  }

  const handleToggleStatus = () => {
    const newStatus: UserStatus = user.status === 'active' ? 'disabled' : 'active';
    toggleStatus({ id: user.id, status: newStatus });
  };

  const handleChangeRole = (newRole: string) => {
    changeRole({ id: user.id, role: newRole as UserRole });
  };

  const handleDeleteUser = () => {
    deleteUser(user.id);
    navigate('/users');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={handleGoBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-semibold">User Details</h1>
      </div>

      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 md:items-center mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              {user.photoURL ? (
                <AvatarImage src={user.photoURL} alt={user.displayName || ''} />
              ) : (
                <AvatarFallback className="text-xl">
                  {(user.displayName || user.email).charAt(0).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{user.displayName || 'No name'}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant={getRoleBadgeVariant(user.role)} className="capitalize">
                  {user.role}
                </Badge>
                <div className="flex items-center gap-1">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`} />
                  <span className="text-sm capitalize">{user.status}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Select
              value={user.role}
              onValueChange={handleChangeRole}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Change role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="moderator">Editor</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={handleToggleStatus}
            >
              {user.status === 'active' ? 'Disable' : 'Activate'}
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the
                    user account and all associated data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteUser}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Basic user details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                <p>{user.displayName || 'Not available'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <div className="flex items-center gap-2">
                  <p>{user.email}</p>
                  <Badge variant={user.emailVerified ? 'default' : 'secondary'}>
                    {user.emailVerified ? 'Verified' : 'Not verified'}
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                <div className="flex items-center gap-2">
                  <p>{user.phoneNumber || 'Not available'}</p>
                  {user.phoneNumber && (
                    <Badge variant={user.phoneVerified ? 'default' : 'secondary'}>
                      {user.phoneVerified ? 'Verified' : 'Not verified'}
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Department</h3>
                <p>{user.metadata?.department || 'Not assigned'}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Access Details</CardTitle>
              <CardDescription>
                User permissions and status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`} />
                  <span className="capitalize">{user.status}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
                <Badge variant={getRoleBadgeVariant(user.role)} className="capitalize">
                  {user.role}
                </Badge>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Authentication Provider</h3>
                <p className="capitalize">{user.provider}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
              <CardDescription>
                User access and activity history
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Last login</h3>
                <p>{user.lastLoginAt ? formatDate(user.lastLoginAt) : 'Never'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Registration date</h3>
                <p>{formatDate(user.createdAt)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Last update</h3>
                <p>{formatDate(user.updatedAt)}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
              <CardDescription>
                Additional user information
              </CardDescription>
            </CardHeader>
            <CardContent>
              {user.metadata && Object.keys(user.metadata).length > 0 ? (
                <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-md">
                  {JSON.stringify(user.metadata, null, 2)}
                </pre>
              ) : (
                <p className="text-muted-foreground">No metadata available</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
