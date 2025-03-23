import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Cuenta</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configuración General</CardTitle>
              <CardDescription>
                Configura la información básica de la aplicación.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Nombre de la Empresa</Label>
                <Input id="company-name" defaultValue="Mi Empresa, S.A." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-url">URL del Sitio</Label>
                <Input id="site-url" defaultValue="https://miempresa.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Zona Horaria</Label>
                <Input id="timezone" defaultValue="UTC-3" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Cuenta</CardTitle>
              <CardDescription>
                Gestiona la configuración de tu cuenta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña Actual</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva Contraseña</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Actualizar Contraseña</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferencias de Notificaciones</CardTitle>
              <CardDescription>
                Configura cómo deseas recibir notificaciones.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="email-notifications" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                <Label htmlFor="email-notifications">Notificaciones por Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="push-notifications" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                <Label htmlFor="push-notifications">Notificaciones Push</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Preferencias</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
