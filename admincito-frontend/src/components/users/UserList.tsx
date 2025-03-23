
import { useState } from 'react';
import { User, UserStatus, getUsers } from '@/lib/data';
import { DataTable } from '@/components/ui/data-table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<UserStatus | 'all'>('all');
  const [roleFilter, setRoleFilter] = useState<User['role'] | 'all'>('all');
  
  // Apply filters
  const filteredUsers = users.filter(user => {
    if (statusFilter !== 'all' && user.status !== statusFilter) return false;
    if (roleFilter !== 'all' && user.role !== roleFilter) return false;
    return true;
  });
  
  const getStatusBadge = (status: UserStatus) => {
    const variants = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300',
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      suspended: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    };
    
    return (
      <Badge variant="outline" className={`${variants[status]} border-none`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };
  
  const getRoleBadge = (role: User['role']) => {
    const variants = {
      admin: 'bg-primary/10 text-primary border-primary/30',
      editor: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-500/30',
      user: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500/30',
    };
    
    return (
      <Badge variant="outline" className={variants[role]}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    );
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const columns = [
    {
      key: 'name',
      header: 'User',
      cell: (user: User) => (
        <div className="flex items-center space-x-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-muted-foreground">{user.email}</div>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      key: 'role',
      header: 'Role',
      cell: (user: User) => getRoleBadge(user.role),
      sortable: true,
    },
    {
      key: 'status',
      header: 'Status',
      cell: (user: User) => getStatusBadge(user.status),
      sortable: true,
    },
    {
      key: 'lastActive',
      header: 'Last Active',
      cell: (user: User) => (
        <span className="text-muted-foreground">
          {formatDistanceToNow(new Date(user.lastActive), { addSuffix: true })}
        </span>
      ),
      sortable: true,
    },
    {
      key: 'department',
      header: 'Department',
      cell: (user: User) => user.department || '—',
      sortable: true,
    },
  ];
  
  return (
    <Card className="shadow-sm border-border animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Users</CardTitle>
          <div className="flex items-center space-x-2">
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value as UserStatus | 'all')}
            >
              <SelectTrigger className="w-[130px] h-8">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={roleFilter}
              onValueChange={(value) => setRoleFilter(value as User['role'] | 'all')}
            >
              <SelectTrigger className="w-[130px] h-8">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable
          data={filteredUsers}
          columns={columns}
          searchField="name"
          onRowClick={(user) => navigate(`/users/${user.id}`)}
        />
      </CardContent>
    </Card>
  );
};

export default UserList;
