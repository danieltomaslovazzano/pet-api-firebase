// src/components/users/BulkActionsBar.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash2, Ban, CheckCircle, UserCheck, Users, LogOut, AlertTriangle } from 'lucide-react';

interface BulkActionsBarProps {
  selectedCount: number;
  onBulkDelete: () => void;
  onBulkDisable: () => void;
  onBulkEnable: () => void;
  onBulkRoleChange: (role: string) => void;
  onBulkForceLogout: () => void;
  onClearSelection: () => void;
}

const BulkActionsBar: React.FC<BulkActionsBarProps> = ({
  selectedCount,
  onBulkDelete,
  onBulkDisable,
  onBulkEnable,
  onBulkRoleChange,
  onBulkForceLogout,
  onClearSelection
}) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleConfirm = () => {
    if (selectedRole) {
      onBulkRoleChange(selectedRole);
      setIsRoleDialogOpen(false);
      setSelectedRole('');
    }
  };

  return (
    <div className="bg-gray-50 border rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center">
        <Users className="h-5 w-5 text-gray-700 mr-2" />
        <span className="font-medium text-gray-800">{selectedCount} usuarios seleccionados</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onClearSelection}
          className="text-gray-600"
        >
          Limpiar selección
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onBulkForceLogout}
          className="text-amber-600 border-amber-200 hover:bg-amber-50"
        >
          <LogOut className="h-4 w-4 mr-1" />
          Forzar cierre de sesión
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onBulkDisable}
          className="text-orange-600 border-orange-200 hover:bg-orange-50"
        >
          <Ban className="h-4 w-4 mr-1" />
          Desactivar
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onBulkEnable}
          className="text-green-600 border-green-200 hover:bg-green-50"
        >
          <CheckCircle className="h-4 w-4 mr-1" />
          Activar
        </Button>
        
        <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              <UserCheck className="h-4 w-4 mr-1" />
              Cambiar rol
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cambiar rol de {selectedCount} usuarios</DialogTitle>
              <DialogDescription>
                Esta acción cambiará el rol de todos los usuarios seleccionados al rol elegido.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar nuevo rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="moderator">Moderador</SelectItem>
                  <SelectItem value="user">Usuario</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsRoleDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleRoleConfirm} disabled={!selectedRole}>Aplicar cambio</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Eliminar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Eliminar {selectedCount} usuarios?</DialogTitle>
              <DialogDescription>
                Esta acción eliminará permanentemente a los usuarios seleccionados. 
                Esta acción no se puede deshacer.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 flex items-center gap-2 bg-amber-50 p-3 rounded border border-amber-200">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <p className="text-sm text-amber-700">
                La eliminación de usuarios también eliminará todos sus datos asociados.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancelar</Button>
              <Button 
                variant="destructive" 
                onClick={() => {
                  onBulkDelete();
                  setIsDeleteDialogOpen(false);
                }}
              >
                Confirmar eliminación
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BulkActionsBar;