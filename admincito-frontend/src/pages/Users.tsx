import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers, useDeleteUser, useToggleUserStatus } from '@/hooks/useUsers';
import { UserQueryParams, UserStatus, UserRole } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Plus, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate, getRoleBadgeVariant, getStatusColor, capitalizeFirstLetter } from '@/lib/utils';

export default function Users() {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState<UserQueryParams>({
    page: 1,
    limit: 10,
  });
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: usersData, isLoading, error } = useUsers(queryParams);
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: toggleStatus } = useToggleUserStatus();

  const handleSearch = (search: string) => {
    setQueryParams((prev) => ({ ...prev, search, page: 1 }));
  };

  const handleFilterRole = (role: string) => {
    setQueryParams((prev) => ({
      ...prev,
      role: role === 'all' ? undefined : (role as UserRole),
      page: 1,
    }));
  };

  const handleFilterStatus = (status: string) => {
    setQueryParams((prev) => ({
      ...prev,
      status: status === 'all' ? undefined : (status as UserStatus),
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQueryParams((prev) => ({ ...prev, page }));
  };

  const handleDeleteUser = (id: string) => {
    deleteUser(id);
  };

  const handleToggleStatus = (id: string, currentStatus: UserStatus) => {
    const newStatus: UserStatus = currentStatus === 'active' ? 'disabled' : 'active';
    toggleStatus({ id, status: newStatus });
  };

  const handleViewDetails = (id: string) => {
    navigate(`/users/${id}`);
  };

  const handleAddUser = () => {
    navigate('/users/new');
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Users</h1>
            <p className="text-muted-foreground">Manage your user accounts and permissions.</p>
          </div>
          <Skeleton className="h-10 w-[120px]" />
        </div>
        
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-[250px]" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-[120px]" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </div>
        
        <div className="rounded-md border bg-white">
          <div className="p-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Department</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-8 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-32" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-32" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Users</h1>
            <p className="text-muted-foreground">Manage your user accounts and permissions.</p>
          </div>
          <Button size="default" onClick={handleAddUser}>
            <Plus className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>
        
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
  const totalPages = usersData?.totalPages || 1;
  const currentPage = usersData?.page || 1;
  const totalItems = usersData?.total || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Users</h1>
          <p className="text-muted-foreground">Manage your user accounts and permissions.</p>
        </div>
        <Button size="default" onClick={handleAddUser}>
          <Plus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>
      
      <div className="grid grid-cols-1">
        <div className="bg-white rounded-md shadow-sm border">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-medium">Users</h2>
            <div className="flex gap-2">
              <Select
                value={queryParams.status || 'all'}
                onValueChange={handleFilterStatus}
              >
                <SelectTrigger className="w-[150px] bg-white">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectContent>
              </Select>
              
              <Select
                value={queryParams.role || 'all'}
                onValueChange={handleFilterRole}
              >
                <SelectTrigger className="w-[120px] bg-white">
                  <SelectValue placeholder="All roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="moderator">Editor</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={queryParams.search || ''}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Department</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow 
                      key={user.id} 
                      className="hover:bg-muted/50 cursor-pointer"
                      onClick={() => handleViewDetails(user.id)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            {user.photoURL ? (
                              <AvatarImage src={user.photoURL} alt={user.displayName || ''} />
                            ) : (
                              <AvatarFallback>
                                {(user.displayName || user.email).charAt(0).toUpperCase()}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.displayName || 'Usuario'}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getRoleBadgeVariant(user.role)} className="capitalize">
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`} />
                          <span className="capitalize">{user.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {user.lastLoginAt ? formatDate(user.lastLoginAt) : 'Never'}
                      </TableCell>
                      <TableCell>
                        {user.metadata?.department || '-'}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? 'default' : 'outline'}
              size="sm"
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
      
      {totalItems > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          Showing {users.length} of {totalItems} users
        </div>
      )}
    </div>
  );
}
