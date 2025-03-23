
import { User } from '@/lib/data';
import { format } from 'date-fns';

interface UserActivityTabProps {
  user: User;
}

const UserActivityTab = ({ user }: UserActivityTabProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Recent Activity</h3>
        <div className="space-y-4">
          <div className="border rounded-md p-3">
            <div className="flex justify-between">
              <p className="font-medium">Logged in</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(user.lastActive), 'PPp')}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">User logged in from Chrome on macOS.</p>
          </div>
          <div className="border rounded-md p-3">
            <div className="flex justify-between">
              <p className="font-medium">Profile updated</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(user.lastActive), 'PPp')}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">User updated their profile information.</p>
          </div>
          <div className="border rounded-md p-3">
            <div className="flex justify-between">
              <p className="font-medium">Account created</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(user.createdAt), 'PPp')}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">User account was created.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivityTab;
