
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { mockUsers } from '@/lib/data';
import UserForm from './UserForm';

interface AddUserDialogProps {
  onUserAdded: () => void;
}

const AddUserDialog = ({ onUserAdded }: AddUserDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const handleCreateUser = (formData: any) => {
    // In a real app, this would call an API to create the user
    // For now, we'll just simulate success
    
    // Create a new user with a random ID and other required fields
    const newUser = {
      id: `${mockUsers.length + 1}`,
      ...formData,
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${formData.name}`,
      lastActive: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    
    console.log('Creating new user:', newUser);
    
    // Show success toast
    toast({
      title: "User created",
      description: `${formData.name} has been added successfully.`,
    });
    
    // Close the dialog
    setOpen(false);
    
    // Notify parent component
    onUserAdded();
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <UserForm 
          onSubmit={handleCreateUser}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
