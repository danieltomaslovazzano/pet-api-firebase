import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestión de Productos</h2>
        <Button>Nuevo Producto</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Lista de Productos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Nombre</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Precio</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Stock</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Estado</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">1</td>
                  <td className="p-4 align-middle">Producto A</td>
                  <td className="p-4 align-middle">$99.99</td>
                  <td className="p-4 align-middle">45</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-green-700 bg-green-50">
                      Disponible
                    </span>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Editar</Button>
                      <Button variant="destructive" size="sm">Eliminar</Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">2</td>
                  <td className="p-4 align-middle">Producto B</td>
                  <td className="p-4 align-middle">$149.99</td>
                  <td className="p-4 align-middle">12</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-yellow-700 bg-yellow-50">
                      Pocas unidades
                    </span>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Editar</Button>
                      <Button variant="destructive" size="sm">Eliminar</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
