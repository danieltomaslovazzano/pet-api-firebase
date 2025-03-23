
import { User } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';

interface UserSecurityTabProps {
  user: User;
}

const UserSecurityTab = ({ user }: UserSecurityTabProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Password</h3>
        <div className="flex items-center justify-between">
          <div className="text-md">••••••••••••</div>
          <Button variant="outline" size="sm">
            Reset Password
          </Button>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <div className="text-md">Not Enabled</div>
          <Button variant="outline" size="sm">
            Enable
          </Button>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">Account Permissions</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">{user.role === 'admin' ? 'Administrator' : 'Standard User'} permissions</span>
        </div>
      </div>
    </div>
  );
};

export default UserSecurityTab;
