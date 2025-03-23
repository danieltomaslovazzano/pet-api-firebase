import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { User, UserQueryParams, UpdateUserData } from '@/types/user';
import { PaginatedResponse } from '@/types/api';
import { useToast } from '@/components/ui/use-toast';
import { normalizeUser, adaptUserResponse, adaptUserToBackend } from '@/lib/adapters';

// Keys para React Query
const USERS_KEY = 'users';
const USER_KEY = 'user';

export const useUsers = (params?: UserQueryParams) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: [USERS_KEY, params],
    queryFn: async () => {
      try {
        console.log('📞 Fetching users with params:', params);
        const response = await userService.getUsers(params);
        if (!response.success) {
          console.error('❌ Error from API:', response.error);
          toast({
            variant: 'destructive',
            title: 'Error',
            description: response.error.message,
          });
          throw new Error(response.error.message);
        }
        console.log('✅ Users response success:', response.data);
        return adaptUserResponse(response.data);
      } catch (error: any) {
        console.error('❌ Catched error:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message || 'Error al obtener usuarios',
        });
        throw error;
      }
    },
  });
};

export const useUser = (id: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: [USER_KEY, id],
    queryFn: async () => {
      try {
        console.log('📞 Fetching user by ID:', id);
        const response = await userService.getUserById(id);
        if (!response.success) {
          console.error('❌ Error from API:', response.error);
          toast({
            variant: 'destructive',
            title: 'Error',
            description: response.error.message,
          });
          throw new Error(response.error.message);
        }
        console.log('✅ User response success:', response.data);
        return normalizeUser(response.data);
      } catch (error: any) {
        console.error('❌ Catched error:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message || 'Error al obtener el usuario',
        });
        throw error;
      }
    },
    enabled: !!id,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateUserData }) => {
      // Convertir datos al formato del backend
      const backendData = adaptUserToBackend(data);
      
      const response = await userService.updateUser(id, backendData);
      if (!response.success) {
        throw new Error(response.error.message);
      }
      return normalizeUser(response.data);
    },
    onSuccess: (data, { id }) => {
      queryClient.setQueryData([USER_KEY, id], data);
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
      toast({
        title: 'Usuario actualizado',
        description: 'Los cambios se han guardado correctamente.',
      });
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await userService.deleteUser(id);
      if (!response.success) {
        throw new Error(response.error.message);
      }
    },
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: [USER_KEY, id] });
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
      toast({
        title: 'Usuario eliminado',
        description: 'El usuario ha sido eliminado correctamente.',
      });
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    },
  });
};

export const useToggleUserStatus = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: User['status'] }) => {
      const response = await userService.toggleUserStatus(id, status);
      if (!response.success) {
        throw new Error(response.error.message);
      }
      return normalizeUser(response.data);
    },
    onSuccess: (data, { id }) => {
      queryClient.setQueryData([USER_KEY, id], data);
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
      toast({
        title: 'Estado actualizado',
        description: 'El estado del usuario ha sido actualizado correctamente.',
      });
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    },
  });
};

export const useChangeUserRole = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, role }: { id: string; role: User['role'] }) => {
      const response = await userService.changeRole(id, role);
      if (!response.success) {
        throw new Error(response.error.message);
      }
      return normalizeUser(response.data);
    },
    onSuccess: (data, { id }) => {
      queryClient.setQueryData([USER_KEY, id], data);
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
      toast({
        title: 'Rol actualizado',
        description: 'El rol del usuario ha sido actualizado correctamente.',
      });
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    },
  });
}; 