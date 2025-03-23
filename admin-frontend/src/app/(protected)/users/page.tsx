// src/app/(protected)/users/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus, MailPlus, RefreshCw, Eye, CheckCircle2, Smartphone } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import userService, { User, UserFilters } from '@/services/userService';
import authService from '@/services/authService';
import AdvancedUserFilter from '@/components/users/AdvancedUserFilter';
import BulkActionsBar from '@/components/users/BulkActionsBar';
import UserDetailModal from '@/components/users/UserDetailModal';
import InlineEdit from '@/components/users/InlineEdit';
import { toast } from 'sonner';
import { format, isValid } from 'date-fns';

// Helper function to format dates
function formatDate(dateValue: any): string {
  let date;
  if (typeof dateValue === 'string') {
    date = new Date(dateValue);
  } else if (dateValue && typeof dateValue.toDate === 'function') {
    date = dateValue.toDate();
  } else {
    date = new Date(dateValue);
  }
  return isValid(date) ? format(date, 'dd/MM/yyyy') : 'No disponible';
}

// Helper function to get role badge variant
const getRoleBadgeVariant = (role?: string) => {
  switch (role) {
    case 'admin': return 'destructive';
    case 'moderator': return 'secondary';
    default: return 'outline';
  }
};

// Helper function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-500';
    case 'disabled': return 'bg-gray-400';
    case 'blocked': return 'bg-red-500';
    default: return 'bg-gray-400';
  }
};

// Helper function to capitalize first letter
const capitalizeFirstLetter = (text?: string) => {
  if (!text) return 'Usuario';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Helper function to get provider icon
const getProviderIcon = (providerId: string) => {
  switch (providerId) {
    case 'google.com':
      return '🔵';
    case 'facebook.com':
      return '🟦';
    case 'apple.com':
      return '⚫';
    default:
      return '📧';
  }
};

// Interface for the invite form
interface InviteForm {
  email: string;
  role: string;
}

const UsersPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  //const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentFilters, setCurrentFilters] = useState<UserFilters>({});
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showUserDetail, setShowUserDetail] = useState(false);
  const [isInvitingUser, setIsInvitingUser] = useState(false);
  const [inviteForm, setInviteForm] = useState<InviteForm>({
    email: '',
    role: 'user'
  });
  
  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async (filters: UserFilters = {}) => {
    try {
      setLoading(true);
      const fetchedUsers = await userService.getUsers(filters);
      console.log('Usuarios obtenidos:', fetchedUsers); // Debug log
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
      setCurrentFilters(filters);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('No se pudieron cargar los usuarios. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleFilter = async (filters: UserFilters) => {
    try {
      setLoading(true);
      // Obtener usuarios con los filtros del API
      const fetchedUsers = await userService.getUsers(filters);
      console.log('Usuarios filtrados:', fetchedUsers); // Debug log
      
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
      setCurrentFilters(filters);
    } catch (error) {
      console.error('Error applying filters:', error);
      toast.error('No se pudieron aplicar los filtros. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleResetFilters = async () => {
    try {
      setLoading(true);
      const fetchedUsers = await userService.getUsers({}) as User[];
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
      setCurrentFilters({});
    } catch (error) {
      console.error('Error resetting filters:', error);
      toast.error('No se pudieron restablecer los filtros. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => {
      if (prev.includes(userId)) {
        return prev.filter(id => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };
  
  const handleSelectAllUsers = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };
  
  const handleViewUserDetail = async (userId: string) => {
    try {
      if (!userId) {
        toast.error('ID de usuario no válido.');
        return;
      }

      const userData = await userService.getUserById(userId);
      
      if (!userData || !userData.id) {
        toast.error('No se encontró la información del usuario.');
        return;
      }

      setCurrentUser(userData);
      setShowUserDetail(true);
    } catch (error: any) {
      console.error('Error fetching user details:', error);
      
      // Manejar diferentes tipos de errores
      if (error.response?.status === 404) {
        toast.error('Usuario no encontrado.');
      } else if (error.response?.status === 403) {
        toast.error('No tienes permisos para ver los detalles de este usuario.');
      } else if (error.code === 'ECONNABORTED') {
        toast.error('La solicitud ha tardado demasiado. Por favor, inténtalo de nuevo.');
      } else {
        toast.error('No se pudieron cargar los detalles del usuario. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };
  
  const handleDeleteUser = async (userId: string) => {
    try {
      const response = await userService.deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
      setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
      toast.success(response.message);
      setShowUserDetail(false);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('No se pudo eliminar el usuario. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleBulkDelete = async () => {
    try {
      const response = await userService.bulkAction({
        userIds: selectedUsers,
        action: 'delete'
      });
      
      // Actualizar lista de usuarios
      setUsers(users.filter(user => !response.affectedUsers.includes(user.id)));
      setFilteredUsers(filteredUsers.filter(user => !response.affectedUsers.includes(user.id)));
      setSelectedUsers([]);
      
      toast.success(`${response.affectedUsers.length} usuarios han sido eliminados correctamente.`);
    } catch (error) {
      console.error('Error in bulk delete:', error);
      toast.error('No se pudieron eliminar algunos usuarios. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleBulkDisable = async () => {
    try {
      const response = await userService.bulkAction({
        userIds: selectedUsers,
        action: 'disable'
      });
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(user => {
        if (response.affectedUsers.includes(user.id)) {
          return { ...user, status: 'disabled' };
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(user => isUserMatchingCurrentFilters(user, currentFilters)));
      
      toast.success(`${response.affectedUsers.length} usuarios han sido desactivados correctamente.`);
    } catch (error) {
      console.error('Error in bulk disable:', error);
      toast.error('No se pudieron desactivar algunos usuarios. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleBulkEnable = async () => {
    try {
      const response = await userService.bulkAction({
        userIds: selectedUsers,
        action: 'enable'
      });
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(user => {
        if (response.affectedUsers.includes(user.id)) {
          return { ...user, status: 'active' };
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(user => isUserMatchingCurrentFilters(user, currentFilters)));
      
      toast.success(`${response.affectedUsers.length} usuarios han sido activados correctamente.`);
    } catch (error) {
      console.error('Error in bulk enable:', error);
      toast.error('No se pudieron activar algunos usuarios. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleBulkRoleChange = async (role: string) => {
    try {
      const response = await userService.bulkAction({
        userIds: selectedUsers,
        action: 'changeRole',
        role
      });
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(user => {
        if (response.affectedUsers.includes(user.id)) {
          return { ...user, role };
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(user => isUserMatchingCurrentFilters(user, currentFilters)));
      
      toast.success(`${response.affectedUsers.length} usuarios han sido actualizados al rol "${role}".`);
    } catch (error) {
      console.error('Error in bulk role change:', error);
      toast.error('No se pudieron actualizar los roles de algunos usuarios. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleBulkForceLogout = async () => {
    try {
      const response = await userService.bulkAction({
        userIds: selectedUsers,
        action: 'forceLogout'
      });
      
      toast.success(`Se ha forzado el cierre de sesión para ${response.affectedUsers.length} usuarios.`);
    } catch (error) {
      console.error('Error in bulk force logout:', error);
      toast.error('No se pudo forzar el cierre de sesión para algunos usuarios. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleEditUser = () => {
    // We can safely use non-null assertion here because this function is only called
    // from the UserDetailCard component which is only rendered when currentUser exists
    router.push(`/users/edit/${currentUser!.id}`);
  };
  
  const handleResetPassword = async () => {
    if (!currentUser) return;
    
    try {
      const response = await userService.resetPassword(currentUser.id);
      toast.success(response.message);
    } catch (error) {
      console.error('Error sending password reset:', error);
      toast.error('No se pudo enviar el correo de restablecimiento de contraseña. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleChangeRole = async () => {
    if (!currentUser) return;
    
    try {
      const response = await userService.updateUserRole(currentUser.id, 'moderator');
      
      // Actualizar usuario actual
      setCurrentUser(response.user);
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(user => {
        if (user.id === response.user.id) {
          return response.user;
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(user => isUserMatchingCurrentFilters(user, currentFilters)));
      
      toast.success('El usuario ahora tiene el rol de moderador.');
    } catch (error) {
      console.error('Error changing role:', error);
      toast.error('No se pudo cambiar el rol del usuario. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleToggleStatus = async () => {
    if (!currentUser) return;
    
    try {
      const newStatus = currentUser.status === 'active' ? 'disabled' : 'active';
      const response = await userService.updateUserStatus(currentUser.id, newStatus);
      
      // Actualizar usuario actual
      setCurrentUser(response.user);
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(user => {
        if (user.id === response.user.id) {
          return response.user;
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(user => isUserMatchingCurrentFilters(user, currentFilters)));
      
      toast.success(response.message);
    } catch (error) {
      console.error('Error toggling status:', error);
      toast.error('No se pudo cambiar el estado del usuario. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleForceLogout = async () => {
    if (!currentUser) return;
    
    try {
      const response = await userService.forceLogout(currentUser.id);
      toast.success(response.message);
    } catch (error) {
      console.error('Error forcing logout:', error);
      toast.error('No se pudo forzar el cierre de sesión. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleInviteUser = async () => {
    try {
      // Validar email
      if (!inviteForm.email || !inviteForm.email.includes('@')) {
        toast.error('Por favor, introduce un email válido.');
        return;
      }
      
      const response = await userService.inviteUser(inviteForm);
      
      toast.success(`Se ha enviado una invitación a ${inviteForm.email}.`);
      
      // Limpiar formulario y cerrar diálogo
      setInviteForm({
        email: '',
        role: 'user'
      });
      
      setIsInvitingUser(false);
      
      // Actualizar lista de usuarios
      fetchUsers(currentFilters);
    } catch (error) {
      console.error('Error inviting user:', error);
      toast.error('No se pudo enviar la invitación. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleUserUpdated = (updatedUser: User) => {
    // Actualizar el usuario actual
    setCurrentUser(updatedUser);
    
    // Actualizar la lista de usuarios
    const updatedUsers = users.map(user => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers.filter(user => isUserMatchingCurrentFilters(user, currentFilters)));
    
    toast.success('Usuario actualizado correctamente.');
  };
  
  // Helper function to check if a user matches the current filters
  const isUserMatchingCurrentFilters = (user: User, filters: UserFilters): boolean => {
    if (!filters) return true;
    
    // Check search term (partial matches)
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesSearch = 
        (user.name?.toLowerCase() || '').includes(searchLower) ||
        (user.email?.toLowerCase() || '').includes(searchLower) ||
        (user.phone?.toLowerCase() || '').includes(searchLower) ||
        (user.id?.toLowerCase() || '').includes(searchLower);
      
      if (!matchesSearch) return false;
    }
    
    // Check role filter
    if (filters.role && filters.role !== 'all' && user.role !== filters.role) return false;
    
    // Check status filter
    if (filters.status && filters.status !== 'all' && user.status !== filters.status) return false;
    
    // Check origin
    if (filters.origin && filters.origin !== 'all') {
      const userOrigin = user.providerData?.[0]?.providerId || 'password';
      if (userOrigin !== filters.origin) return false;
    }
    
    // Check date range for registration
    if (filters.dateRangeStart || filters.dateRangeEnd) {
      const userDate = new Date(user.createdAt);
      if (filters.dateRangeStart && userDate < new Date(filters.dateRangeStart)) return false;
      if (filters.dateRangeEnd && userDate > new Date(filters.dateRangeEnd)) return false;
    }
    
    // Check last login date range
    if (filters.lastLoginStart || filters.lastLoginEnd) {
      const lastLoginDate = user.lastLoginAt ? new Date(user.lastLoginAt) : null;
      if (!lastLoginDate) return false;
      if (filters.lastLoginStart && lastLoginDate < new Date(filters.lastLoginStart)) return false;
      if (filters.lastLoginEnd && lastLoginDate > new Date(filters.lastLoginEnd)) return false;
    }
    
    // Check verified status
    if (filters.isVerified && !user.emailVerified) return false;
    
    // Check phone presence
    if (filters.hasPhone && !user.phone) return false;
    
    return true;
  };
  
  const handleBlockUser = async (userId: string) => {
    if (!currentUser?.id) return;
    
    try {
      const response = await userService.blockUser(currentUser.id, userId);
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(u => {
        if (u.id === userId) {
          return { ...u, status: 'blocked' };
        }
        return u;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(u => isUserMatchingCurrentFilters(u, currentFilters)));
      
      toast.success(response.message);
    } catch (error) {
      console.error('Error blocking user:', error);
      toast.error('No se pudo bloquear al usuario. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleUnblockUser = async (userId: string) => {
    if (!currentUser?.id) return;
    
    try {
      const response = await userService.unblockUser(currentUser.id, userId);
      
      // Actualizar lista de usuarios
      const updatedUsers = users.map(u => {
        if (u.id === userId) {
          return { ...u, status: 'active' };
        }
        return u;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(u => isUserMatchingCurrentFilters(u, currentFilters)));
      
      toast.success(response.message);
    } catch (error) {
      console.error('Error unblocking user:', error);
      toast.error('No se pudo desbloquear al usuario. Inténtalo de nuevo más tarde.');
    }
  };
  
  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white rounded-lg p-6 shadow-sm border">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Usuarios</h1>
          <p className="text-sm text-muted-foreground">
            Gestiona los usuarios y sus permisos en la plataforma
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <Button 
            onClick={() => setIsInvitingUser(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <MailPlus className="h-4 w-4 mr-2" />
            Invitar Usuario
          </Button>
          
          <Button 
            onClick={() => router.push('/users/create')}
            variant="secondary"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Crear Usuario
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => fetchUsers(currentFilters)}
            className="border-gray-200 hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
        </div>
      </div>
      
      {/* Filters Section */}
      <div className="rounded-lg border bg-card">
        <AdvancedUserFilter 
          onFilter={handleFilter} 
          onReset={handleResetFilters} 
        />
      </div>
      
      {/* Bulk Actions Bar */}
      {selectedUsers.length > 0 && (
        <div className="rounded-lg border bg-amber-50/50 animate-in fade-in slide-in-from-top-4 duration-200">
          <BulkActionsBar
            selectedCount={selectedUsers.length}
            onBulkDelete={handleBulkDelete}
            onBulkDisable={handleBulkDisable}
            onBulkEnable={handleBulkEnable}
            onBulkRoleChange={handleBulkRoleChange}
            onBulkForceLogout={handleBulkForceLogout}
            onClearSelection={() => setSelectedUsers([])}
          />
        </div>
      )}
      
      {/* Users Table */}
      <Card className="border rounded-lg shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[30px]">
                  <Checkbox
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onCheckedChange={handleSelectAllUsers}
                  />
                </TableHead>
                <TableHead>Información de Usuario</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Registro y Origen</TableHead>
                <TableHead>Actividad</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4">
                    Cargando usuarios...
                  </TableCell>
                </TableRow>
              ) : filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4">
                    No se encontraron usuarios con los filtros seleccionados
                    <div className="mt-2">
                      <Button
                        variant="link"
                        onClick={handleResetFilters}
                        className="text-primary hover:underline"
                      >
                        Limpiar filtros
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell className="w-[30px]">
                      <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={() => handleSelectUser(user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{user.name || user.displayName || 'No especificado'}</span>
                          {user.emailVerified && (
                            <Badge variant="secondary" className="text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Verificado
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{user.phoneNumber || user.phone || 'No especificado'}</span>
                          {user.phoneNumber && (
                            <Badge variant="secondary" className="text-xs">
                              <Smartphone className="h-3 w-3 mr-1" />
                              Verificado
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getRoleBadgeVariant(user.role)}>
                        {capitalizeFirstLetter(user.role)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${getStatusColor(user.status || 'disabled')}`} />
                        <span className="text-sm">
                          {user.status === 'active' ? 'Activo' :
                          user.status === 'disabled' ? 'Desactivado' :
                          user.status === 'blocked' ? 'Bloqueado' :
                          'Desconocido'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{formatDate(user.createdAt || user.metadata?.creationTime)}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {user.providerData && user.providerData.length > 0 ? (
                            user.providerData.map((provider, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {getProviderIcon(provider.providerId)}{' '}
                                {provider.providerId === 'google.com' ? 'Google' :
                                provider.providerId === 'facebook.com' ? 'Facebook' :
                                provider.providerId === 'apple.com' ? 'Apple' :
                                'Email'}
                              </Badge>
                            ))
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              📧 Email
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {user.lastLoginAt || user.metadata?.lastSignInTime ? (
                          <>
                            <span className="text-sm">
                              {formatDate(user.lastLoginAt || user.metadata?.lastSignInTime)}
                            </span>
                            {user.metadata?.lastRefreshTime && (
                              <span className="text-xs text-muted-foreground">
                                Último token: {formatDate(user.metadata.lastRefreshTime)}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="text-muted-foreground text-sm">Nunca</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewUserDetail(user.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* User Details Modal */}
      <UserDetailModal
        user={currentUser}
        open={showUserDetail}
        onOpenChange={setShowUserDetail}
        onEditInfo={handleEditUser}
        onResetPassword={handleResetPassword}
        onChangeRole={handleChangeRole}
        onToggleStatus={handleToggleStatus}
        onForceLogout={handleForceLogout}
        onDelete={() => handleDeleteUser(currentUser?.id || '')}
        onUserUpdated={handleUserUpdated}
      />
      
      {/* Invite User Modal */}
      <Dialog open={isInvitingUser} onOpenChange={setIsInvitingUser}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Invitar Nuevo Usuario</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  value={inviteForm.email}
                  onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">Rol</Label>
                <Select
                  value={inviteForm.role}
                  onValueChange={(value) => setInviteForm({ ...inviteForm, role: value })}
                >
                  <SelectTrigger id="role" className="w-full">
                    <SelectValue placeholder="Seleccionar rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="moderator">Moderador</SelectItem>
                    <SelectItem value="user">Usuario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsInvitingUser(false)}
              className="border-gray-200"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleInviteUser}
              className="bg-primary hover:bg-primary/90"
            >
              Enviar Invitación
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersPage;