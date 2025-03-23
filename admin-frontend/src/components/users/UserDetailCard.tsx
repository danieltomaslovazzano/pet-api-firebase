// src/components/users/UserDetailCard.tsx
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Shield, 
  Check, 
  AlertCircle, 
  Info, 
  LogIn, 
  Clock, 
  Edit3, 
  Key, 
  Ban, 
  Trash2, 
  RefreshCw, 
  UserCheck
} from 'lucide-react';

interface UserDetailCardProps {
  user: any;
  onEditInfo: () => void;
  onResetPassword: () => void;
  onChangeRole: () => void;
  onToggleStatus: () => void;
  onForceLogout: () => void;
  onDelete: () => void;
}

const UserDetailCard: React.FC<UserDetailCardProps> = ({ 
  user, 
  onEditInfo, 
  onResetPassword, 
  onChangeRole, 
  onToggleStatus, 
  onForceLogout, 
  onDelete 
}) => {
  if (!user) return null;

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center justify-between">
          <div className="flex items-center">
            <User className="h-5 w-5 text-primary mr-2" /> 
            Detalles de Usuario
          </div>
          <div>
            <Badge variant={
              user.status === 'active' ? 'success' : 
              user.status === 'disabled' ? 'destructive' : 
              user.status === 'blocked' ? 'destructive' : 
              'secondary'
            }>
              {user.status === 'active' ? 'Activo' : 
               user.status === 'disabled' ? 'Desactivado' : 
               user.status === 'blocked' ? 'Bloqueado' : 
               user.status || 'Desconocido'}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="info">
          <TabsList className="mb-4">
            <TabsTrigger value="info">Información</TabsTrigger>
            <TabsTrigger value="activity">Actividad</TabsTrigger>
            <TabsTrigger value="security">Seguridad</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium">{user.name || 'No disponible'}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Email</p>
                <div className="flex items-center">
                  <p className="font-medium">{user.email}</p>
                  {user.emailVerified && (
                    <Badge variant="outline" className="ml-2 bg-green-50">
                      <Check className="h-3 w-3 text-green-500 mr-1" /> Verificado
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">{user.phone || 'No disponible'}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Rol</p>
                <Badge variant={
                  user.role === 'admin' ? 'destructive' : 
                  user.role === 'moderator' ? 'secondary' : 
                  'outline'
                }>
                  {user.role || 'user'}
                </Badge>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">ID de Usuario</p>
                <p className="font-medium text-xs text-gray-800 bg-gray-100 p-1 rounded">{user.id}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Origen de registro</p>
                <p className="font-medium">
                  {user.providerData && user.providerData[0] ? 
                    (user.providerData[0].providerId === 'password' ? 'Email y contraseña' : 
                     user.providerData[0].providerId === 'google.com' ? 'Google' : 
                     user.providerData[0].providerId === 'facebook.com' ? 'Facebook' : 
                     user.providerData[0].providerId === 'apple.com' ? 'Apple' : 
                     user.providerData[0].providerId) : 
                     'Email y contraseña'}
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Fecha de registro</p>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <p className="font-medium">
                    {user.createdAt ? (
                      typeof user.createdAt === 'string' ? 
                        format(new Date(user.createdAt), 'dd/MM/yyyy HH:mm') :
                        user.createdAt.toDate ? 
                          format(user.createdAt.toDate(), 'dd/MM/yyyy HH:mm') :
                          format(new Date(user.createdAt), 'dd/MM/yyyy HH:mm')
                    ) : 'No disponible'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Última actualización</p>
                <div className="flex items-center">
                  <RefreshCw className="h-4 w-4 text-gray-500 mr-1" />
                  <p className="font-medium">
                    {user.updatedAt ? (
                      typeof user.updatedAt === 'string' ? 
                        format(new Date(user.updatedAt), 'dd/MM/yyyy HH:mm') :
                        user.updatedAt.toDate ? 
                          format(user.updatedAt.toDate(), 'dd/MM/yyyy HH:mm') :
                          format(new Date(user.updatedAt), 'dd/MM/yyyy HH:mm')
                    ) : 'No disponible'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Último inicio de sesión</p>
                <div className="flex items-center">
                  <LogIn className="h-4 w-4 text-gray-500 mr-1" />
                  <p className="font-medium">
                    {user.lastLoginAt ? 
                      format(new Date(user.lastLoginAt), 'dd/MM/yyyy HH:mm') : 
                      'Nunca'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Dispositivos</p>
                <p className="font-medium">No disponible</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Verificación de correo</p>
                <div className="flex items-center">
                  {user.emailVerified ? (
                    <>
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <p className="font-medium text-green-600">Verificado</p>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                      <p className="font-medium text-amber-600">No verificado</p>
                    </>
                  )}
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Autenticación de dos factores</p>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-gray-500 mr-1" />
                  <p className="font-medium">No disponible</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t mt-4">
              <p className="text-sm font-medium mb-2">Acciones de seguridad</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={onResetPassword}>
                  <Key className="h-4 w-4 mr-1" />
                  Resetear contraseña
                </Button>
                <Button variant="outline" size="sm" onClick={onForceLogout}>
                  <LogIn className="h-4 w-4 mr-1" />
                  Forzar cierre de sesión
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-4 border-t">
        <div>
          <Button variant="outline" size="sm" onClick={onEditInfo}>
            <Edit3 className="h-4 w-4 mr-1" />
            Editar información
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onChangeRole}>
            <UserCheck className="h-4 w-4 mr-1" />
            Cambiar rol
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onToggleStatus} 
            className={user.status === 'active' ? 'text-amber-600' : 'text-green-600'}
          >
            {user.status === 'active' ? (
              <>
                <Ban className="h-4 w-4 mr-1" />
                Desactivar
              </>
            ) : (
              <>
                <Check className="h-4 w-4 mr-1" />
                Activar
              </>
            )}
          </Button>
          
          <Button variant="destructive" size="sm" onClick={onDelete}>
            <Trash2 className="h-4 w-4 mr-1" />
            Eliminar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserDetailCard;