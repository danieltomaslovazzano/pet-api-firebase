import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { User } from '@/services/userService';
import {
  UserCircle,
  Mail,
  Phone,
  Calendar,
  Shield,
  Activity,
  Clock,
  MapPin,
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
  Languages
} from 'lucide-react';

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
}) => {
  if (!user) return null;

  const formatDate = (date: any) => {
    if (!date) return 'No disponible';
    const dateObj = typeof date === 'string' ? new Date(date) : date.toDate ? date.toDate() : date;
    return format(dateObj, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es });
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[1600px] max-w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sticky top-0 z-50 bg-background pb-4 mb-4 border-b">
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <UserCircle className="h-5 w-5" />
            Ficha de Usuario
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="sticky top-[69px] z-40 w-full grid grid-cols-3 bg-muted/80 backdrop-blur supports-[backdrop-filter]:bg-muted/60 rounded-lg p-1 mb-6">
            <TabsTrigger value="info" className="rounded-md">
              Información General
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-md">
              Seguridad
            </TabsTrigger>
            <TabsTrigger value="activity" className="rounded-md">
              Actividad
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-0">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-16">
                  {/* Datos Personales */}
                  <section>
                    <h3 className="text-lg font-semibold mb-6">Datos Personales</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <UserCircle className="h-4 w-4" />
                          <span>Nombre</span>
                        </div>
                        <p className="text-base pl-6">{user.name || user.displayName || 'No especificado'}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>Email</span>
                        </div>
                        <div className="pl-6 space-y-2">
                          <p className="text-base break-all">{user.email}</p>
                          {user.emailVerified && (
                            <Badge variant="secondary" className="text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Verificado
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>Teléfono</span>
                        </div>
                        <div className="pl-6">
                          <p className="text-base">{user.phoneNumber || user.phone || 'No especificado'}</p>
                          {user.phoneNumber && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              <Smartphone className="h-3 w-3 mr-1" />
                              Verificado
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Registro</span>
                        </div>
                        <p className="text-base pl-6">{formatDate(user.createdAt || user.metadata?.creationTime)}</p>
                      </div>

                      {user.photoURL && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link2 className="h-4 w-4" />
                            <span>Foto de perfil</span>
                          </div>
                          <div className="pl-6">
                            <img 
                              src={user.photoURL} 
                              alt="Foto de perfil" 
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Estado y Permisos */}
                  <section>
                    <h3 className="text-lg font-semibold mb-6">Estado y Permisos</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Shield className="h-4 w-4" />
                          <span>Rol</span>
                        </div>
                        <div className="pl-6">
                          <Badge variant={getRoleBadgeVariant(user.role)}>
                            {capitalizeFirstLetter(user.role)}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Activity className="h-4 w-4" />
                          <span>Estado</span>
                        </div>
                        <div className="pl-6 flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${getStatusColor(user.status || 'disabled')}`} />
                          <span>
                            {user.status === 'active' ? 'Activo' :
                             user.status === 'disabled' ? 'Desactivado' :
                             user.status === 'blocked' ? 'Bloqueado' :
                             'Desconocido'}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          <span>Origen</span>
                        </div>
                        <div className="pl-6 space-y-2">
                          {user.providerData && user.providerData.length > 0 ? (
                            user.providerData.map((provider, index) => (
                              <Badge key={index} variant="outline" className="mr-2">
                                {getProviderIcon(provider.providerId)}{' '}
                                {provider.providerId === 'google.com' ? 'Google' :
                                 provider.providerId === 'facebook.com' ? 'Facebook' :
                                 provider.providerId === 'apple.com' ? 'Apple' :
                                 'Email y contraseña'}
                              </Badge>
                            ))
                          ) : (
                            <Badge variant="outline">
                              📧 Email y contraseña
                            </Badge>
                          )}
                        </div>
                      </div>

                      {user.tenantId && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Fingerprint className="h-4 w-4" />
                            <span>ID de Inquilino</span>
                          </div>
                          <p className="text-base pl-6 font-mono">{user.tenantId}</p>
                        </div>
                      )}

                      {user.customClaims && Object.keys(user.customClaims).length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Key className="h-4 w-4" />
                            <span>Claims Personalizados</span>
                          </div>
                          <div className="pl-6">
                            {Object.entries(user.customClaims).map(([key, value]) => (
                              <Badge key={key} variant="outline" className="mr-2">
                                {key}: {String(value)}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <section className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Seguridad de la Cuenta</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-4">
                          <Key className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Contraseña</p>
                            <p className="text-sm text-muted-foreground">Permite al usuario acceder a su cuenta</p>
                          </div>
                        </div>
                        <Button variant="outline" onClick={onResetPassword}>
                          <Lock className="h-4 w-4 mr-2" />
                          Restablecer contraseña
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-4">
                          <Shield className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Permisos de usuario</p>
                            <p className="text-sm text-muted-foreground">Nivel de acceso en la plataforma</p>
                          </div>
                        </div>
                        <Button variant="outline" onClick={onChangeRole}>
                          <Shield className="h-4 w-4 mr-2" />
                          Cambiar rol
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-4">
                          <Activity className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Estado de la cuenta</p>
                            <p className="text-sm text-muted-foreground">Controla si el usuario puede acceder</p>
                          </div>
                        </div>
                        <Button 
                          variant={user.status === 'active' ? 'destructive' : 'default'}
                          onClick={onToggleStatus}
                        >
                          {user.status === 'active' ? (
                            <>
                              <XCircle className="h-4 w-4 mr-2" />
                              Desactivar cuenta
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                              Activar cuenta
                            </>
                          )}
                        </Button>
                      </div>

                      {user.multiFactor && user.multiFactor.enrolledFactors && user.multiFactor.enrolledFactors.length > 0 && (
                        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div className="flex items-center gap-4">
                            <Key className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Autenticación de dos factores</p>
                              <p className="text-sm text-muted-foreground">
                                {user.multiFactor.enrolledFactors.length} factores configurados
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            Activado
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-lg font-semibold text-destructive mb-6">Zona de Peligro</h3>
                    <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                      <div className="flex items-center gap-4">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        <div>
                          <p className="font-medium">Eliminar cuenta</p>
                          <p className="text-sm text-muted-foreground">Esta acción no se puede deshacer</p>
                        </div>
                      </div>
                      <Button variant="destructive" onClick={onDelete}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Eliminar usuario
                      </Button>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <section className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Actividad Reciente</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Último acceso</p>
                          <p className="text-sm text-muted-foreground">
                            {user.lastLoginAt || user.metadata?.lastSignInTime ? 
                              formatDate(user.lastLoginAt || user.metadata?.lastSignInTime) : 
                              'Nunca ha iniciado sesión'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                        <RefreshCw className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Última actualización de contraseña</p>
                          <p className="text-sm text-muted-foreground">
                            {user.metadata?.passwordUpdatedAt ? 
                              formatDate(user.metadata.passwordUpdatedAt) : 
                              'No disponible'}
                          </p>
                        </div>
                      </div>

                      {user.metadata?.lastRefreshTime && (
                        <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Última actualización de token</p>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(user.metadata.lastRefreshTime)}
                            </p>
                          </div>
                        </div>
                      )}

                      {user.languages && user.languages.length > 0 && (
                        <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                          <Languages className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Idiomas</p>
                            <div className="flex gap-2 mt-1">
                              {user.languages.map((lang, index) => (
                                <Badge key={index} variant="secondary">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-lg font-semibold mb-6">Acciones</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" onClick={onEditInfo}>
                        <Edit className="h-4 w-4 mr-2" />
                        Editar información
                      </Button>

                      <Button variant="outline" onClick={onForceLogout}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Forzar cierre de sesión
                      </Button>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailModal; 