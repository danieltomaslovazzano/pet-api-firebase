import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import { User } from '@/services/userService';
import UserEditForm from './UserEditForm';
import {
  UserCircle,
  Mail,
  Phone,
  Calendar,
  Shield,
  Activity,
  Clock,
  Globe,
  Key,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Edit,
  LogOut,
  Trash2,
  Lock,
  Fingerprint,
  RefreshCw,
  Smartphone,
  Link2,
  Languages,
  X
} from 'lucide-react';
import InlineEdit from '@/components/users/InlineEdit';
import { toast } from 'sonner';
import userService from '@/services/userService';

interface UserDetailModalProps {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEditInfo: () => void;
  onResetPassword: () => void;
  onChangeRole: () => void;
  onToggleStatus: () => void;
  onForceLogout: () => void;
  onDelete: () => void;
  onUserUpdated: (user: User) => void;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({
  user,
  open,
  onOpenChange,
  onEditInfo,
  onResetPassword,
  onChangeRole,
  onToggleStatus,
  onForceLogout,
  onDelete,
  onUserUpdated,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!user) return null;

  const formatDate = (date: any) => {
    if (!date) return 'No disponible';
    
    try {
      let dateObj;
      if (typeof date === 'string') {
        dateObj = new Date(date);
      } else if (date && typeof date.toDate === 'function') {
        dateObj = date.toDate();
      } else if (date instanceof Date) {
        dateObj = date;
      } else {
        return 'Formato inválido';
      }

      if (!isValid(dateObj)) {
        return 'Fecha inválida';
      }

      return format(dateObj, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es });
    } catch (error) {
      console.error('Error formateando fecha:', error);
      return 'Error en formato';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'disabled': return 'bg-gray-400';
      case 'blocked': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getRoleBadgeVariant = (role?: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'moderator': return 'secondary';
      default: return 'outline';
    }
  };

  const capitalizeFirstLetter = (text?: string) => {
    if (!text) return 'Usuario';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

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

  // Componente reutilizable para elementos de información
  const InfoItem: React.FC<InfoItemProps> = ({ icon, label, children }) => (
    <div className="space-y-1.5 mb-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>
      <div className="pl-6">
        {children}
      </div>
    </div>
  );

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="w-full h-full max-h-full max-w-full fixed inset-0 sm:absolute sm:inset-auto sm:h-auto sm:max-h-[90vh] sm:w-[85vw] sm:max-w-[720px] sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 p-0 overflow-hidden rounded-none sm:rounded-lg"
        >
          <div className="flex flex-col h-full">
            <DialogHeader className="sticky top-0 z-50 bg-background p-4 sm:p-6 pb-3 sm:pb-4 border-b">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                  <UserCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  Ficha de Usuario
                </DialogTitle>
                <DialogClose className="rounded-full hover:bg-muted p-1.5">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Cerrar</span>
                </DialogClose>
              </div>
            </DialogHeader>

            <Tabs defaultValue="info" className="flex-1 flex flex-col">
              <div className="bg-background border-b">
                <div className="container flex justify-center items-center px-4 py-2">
                  <TabsList className="bg-muted/50 rounded-md p-1">
                    <TabsTrigger value="info" className="rounded-sm text-sm h-8 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      Información
                    </TabsTrigger>
                    <TabsTrigger value="security" className="rounded-sm text-sm h-8 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      Seguridad
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="rounded-sm text-sm h-8 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      Actividad
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                {/* TAB: Información General */}
                <TabsContent value="info" className="p-4 sm:p-6 mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Datos Personales */}
                    <Card className="border-0 sm:border shadow-none sm:shadow-sm">
                      <CardHeader className="pb-2 px-0 sm:px-6">
                        <CardTitle className="text-base font-medium">Datos Personales</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-0 sm:px-6">
                        <InfoItem 
                          icon={<UserCircle className="h-4 w-4" />} 
                          label="Nombre"
                        >
                          <InlineEdit
                            value={user.name || user.displayName || ''}
                            onSave={async (value) => {
                              try {
                                const updatedUser = await userService.updateUser(user.id, { name: value });
                                onUserUpdated(updatedUser);
                              } catch (error) {
                                console.error('Error updating user name:', error);
                                toast.error('No se pudo actualizar el nombre del usuario.');
                              }
                            }}
                            placeholder="No especificado"
                          />
                        </InfoItem>

                        <InfoItem 
                          icon={<Mail className="h-4 w-4" />} 
                          label="Email"
                        >
                          <div className="space-y-2">
                            <InlineEdit
                              value={user.email}
                              type="email"
                              onSave={async (value) => {
                                try {
                                  const updatedUser = await userService.updateUser(user.id, { email: value });
                                  onUserUpdated(updatedUser);
                                } catch (error) {
                                  console.error('Error updating user email:', error);
                                  toast.error('No se pudo actualizar el email del usuario.');
                                }
                              }}
                            />
                            {user.emailVerified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Verificado
                              </Badge>
                            )}
                          </div>
                        </InfoItem>

                        <InfoItem 
                          icon={<Phone className="h-4 w-4" />} 
                          label="Teléfono"
                        >
                          <div className="space-y-2">
                            <InlineEdit
                              value={user.phoneNumber || user.phone || ''}
                              type="tel"
                              onSave={async (value) => {
                                try {
                                  const updatedUser = await userService.updateUser(user.id, { phone: value });
                                  onUserUpdated(updatedUser);
                                } catch (error) {
                                  console.error('Error updating user phone:', error);
                                  toast.error('No se pudo actualizar el teléfono del usuario.');
                                }
                              }}
                              placeholder="No especificado"
                            />
                            {user.phoneNumber && (
                              <Badge variant="secondary" className="text-xs">
                                <Smartphone className="h-3 w-3 mr-1" />
                                Verificado
                              </Badge>
                            )}
                          </div>
                        </InfoItem>

                        <InfoItem 
                          icon={<Calendar className="h-4 w-4" />} 
                          label="Registro"
                        >
                          <p className="text-sm font-medium">{formatDate(user.createdAt || user.metadata?.creationTime)}</p>
                        </InfoItem>

                        {user.photoURL && (
                          <InfoItem 
                            icon={<Link2 className="h-4 w-4" />} 
                            label="Foto de perfil"
                          >
                            <div className="mt-1">
                              <img 
                                src={user.photoURL} 
                                alt="Foto de perfil" 
                                className="w-16 h-16 rounded-full object-cover"
                              />
                            </div>
                          </InfoItem>
                        )}
                      </CardContent>
                    </Card>

                    {/* Estado y Permisos */}
                    <Card className="border-0 sm:border shadow-none sm:shadow-sm">
                      <CardHeader className="pb-2 px-0 sm:px-6">
                        <CardTitle className="text-base font-medium">Estado y Permisos</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-0 sm:px-6">
                        <InfoItem 
                          icon={<Shield className="h-4 w-4" />} 
                          label="Rol"
                        >
                          <Badge variant={getRoleBadgeVariant(user.role)}>
                            {capitalizeFirstLetter(user.role)}
                          </Badge>
                        </InfoItem>

                        <InfoItem 
                          icon={<Activity className="h-4 w-4" />} 
                          label="Estado"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${getStatusColor(user.status || 'disabled')}`} />
                            <span className="text-sm font-medium">
                              {user.status === 'active' ? 'Activo' :
                              user.status === 'disabled' ? 'Desactivado' :
                              user.status === 'blocked' ? 'Bloqueado' :
                              'Desconocido'}
                            </span>
                          </div>
                        </InfoItem>

                        <InfoItem 
                          icon={<Globe className="h-4 w-4" />} 
                          label="Origen"
                        >
                          <div className="flex flex-wrap gap-2">
                            {user.providerData && user.providerData.length > 0 ? (
                              user.providerData.map((provider, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {getProviderIcon(provider.providerId)}{' '}
                                  {provider.providerId === 'google.com' ? 'Google' :
                                  provider.providerId === 'facebook.com' ? 'Facebook' :
                                  provider.providerId === 'apple.com' ? 'Apple' :
                                  'Email y contraseña'}
                                </Badge>
                              ))
                            ) : (
                              <Badge variant="outline" className="text-xs">
                                📧 Email y contraseña
                              </Badge>
                            )}
                          </div>
                        </InfoItem>

                        {user.tenantId && (
                          <InfoItem 
                            icon={<Fingerprint className="h-4 w-4" />} 
                            label="ID de Inquilino"
                          >
                            <p className="text-sm font-mono">{user.tenantId}</p>
                          </InfoItem>
                        )}

                        {user.customClaims && Object.keys(user.customClaims).length > 0 && (
                          <InfoItem 
                            icon={<Key className="h-4 w-4" />} 
                            label="Claims Personalizados"
                          >
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(user.customClaims).map(([key, value]) => (
                                <Badge key={key} variant="outline" className="text-xs">
                                  {key}: {String(value)}
                                </Badge>
                              ))}
                            </div>
                          </InfoItem>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* TAB: Seguridad */}
                <TabsContent value="security" className="p-4 sm:p-6 mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <Card className="border-0 sm:border shadow-none sm:shadow-sm">
                    <CardHeader className="px-0 sm:px-6">
                      <CardTitle className="text-base font-medium">Seguridad de la Cuenta</CardTitle>
                      <CardDescription>Gestiona la seguridad y los permisos del usuario</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 px-0 sm:px-6">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Key className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Contraseña</p>
                            <p className="text-xs text-muted-foreground">Permite al usuario acceder a su cuenta</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={onResetPassword}>
                          <Lock className="h-4 w-4 mr-1.5" />
                          Restablecer
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Permisos de usuario</p>
                            <p className="text-xs text-muted-foreground">Nivel de acceso en la plataforma</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={onChangeRole}>
                          <Shield className="h-4 w-4 mr-1.5" />
                          Cambiar rol
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Activity className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Estado de la cuenta</p>
                            <p className="text-xs text-muted-foreground">Controla si el usuario puede acceder</p>
                          </div>
                        </div>
                        <Button 
                          variant={user.status === 'active' ? 'destructive' : 'default'}
                          size="sm"
                          onClick={onToggleStatus}
                        >
                          {user.status === 'active' ? (
                            <>
                              <XCircle className="h-4 w-4 mr-1.5" />
                              Desactivar
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 mr-1.5" />
                              Activar
                            </>
                          )}
                        </Button>
                      </div>

                      {user.multiFactor?.enrolledFactors && user.multiFactor.enrolledFactors.length > 0 && (
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-3">
                            <Key className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Autenticación de dos factores</p>
                              <p className="text-xs text-muted-foreground">
                                {user.multiFactor.enrolledFactors.length} factores configurados
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            Activado
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-6 px-0 sm:px-6">
                      <div className="w-full">
                        <h3 className="text-sm font-medium text-destructive mb-3">Zona de Peligro</h3>
                        <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="h-5 w-5 text-destructive" />
                            <div>
                              <p className="text-sm font-medium">Eliminar cuenta</p>
                              <p className="text-xs text-muted-foreground">Esta acción no se puede deshacer</p>
                            </div>
                          </div>
                          <Button variant="destructive" size="sm" onClick={onDelete}>
                            <Trash2 className="h-4 w-4 mr-1.5" />
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* TAB: Actividad */}
                <TabsContent value="activity" className="p-4 sm:p-6 mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <Card className="border-0 sm:border shadow-none sm:shadow-sm">
                    <CardHeader className="px-0 sm:px-6">
                      <CardTitle className="text-base font-medium">Actividad Reciente</CardTitle>
                      <CardDescription>Historial de uso y actividad del usuario</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 px-0 sm:px-6">
                      <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Último acceso</p>
                          <p className="text-xs text-muted-foreground">
                            {user.lastLoginAt || user.metadata?.lastSignInTime ? 
                              formatDate(user.lastLoginAt || user.metadata?.lastSignInTime) : 
                              'Nunca ha iniciado sesión'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <RefreshCw className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Última actualización de contraseña</p>
                          <p className="text-xs text-muted-foreground">
                            {user.metadata?.passwordUpdatedAt ? 
                              formatDate(user.metadata.passwordUpdatedAt) : 
                              'No disponible'}
                          </p>
                        </div>
                      </div>

                      {user.metadata?.lastRefreshTime && (
                        <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Última actualización de token</p>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(user.metadata.lastRefreshTime)}
                            </p>
                          </div>
                        </div>
                      )}

                      {user.languages && user.languages.length > 0 && (
                        <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <Languages className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Idiomas</p>
                            <div className="flex gap-2 mt-1">
                              {user.languages.map((lang, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-6 px-0 sm:px-6">
                      <div className="w-full space-y-4">
                        <h3 className="text-sm font-medium mb-2">Acciones</h3>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)}>
                            <Edit className="h-4 w-4 mr-1.5" />
                            Editar información
                          </Button>

                          <Button variant="outline" size="sm" onClick={onForceLogout}>
                            <LogOut className="h-4 w-4 mr-1.5" />
                            Forzar cierre de sesión
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      {user && (
        <UserEditForm
          user={user}
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          onUserUpdated={onUserUpdated}
        />
      )}
    </>
  );
};

export default UserDetailModal;