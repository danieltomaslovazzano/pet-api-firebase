
import { useState } from 'react';
import { User, UserStatus } from '@/lib/data';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { UserCog } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface StatusDialogProps {
  user: User;
  status: UserStatus;
  setStatus: (status: UserStatus) => void;
}

const StatusDialog = ({ user, status, setStatus }: StatusDialogProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<UserStatus>(status);
  
  const handleStatusChange = () => {
    setStatus(selectedStatus);
    toast({
      title: "Status updated",
      description: `User status changed to ${selectedStatus}`,
    });
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <UserCog className="mr-2 h-4 w-4" />
          Change Status
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change User Status</DialogTitle>
          <DialogDescription>
            Update the account status for {user.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select 
              value={selectedStatus} 
              onValueChange={(value) => setSelectedStatus(value as UserStatus)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleStatusChange}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StatusDialog;
