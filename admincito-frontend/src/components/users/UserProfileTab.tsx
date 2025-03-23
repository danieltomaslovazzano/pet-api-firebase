
import { User } from '@/lib/data';

interface UserProfileTabProps {
  user: User;
}

const UserProfileTab = ({ user }: UserProfileTabProps) => {
  return (
    <div className="space-y-6">
      {user.bio && (
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Bio</h3>
          <p>{user.bio}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Full Name</h3>
          <p className="font-medium">{user.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Email</h3>
          <p className="font-medium">{user.email}</p>
        </div>
        {user.phone && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Phone Number</h3>
            <p className="font-medium">{user.phone}</p>
          </div>
        )}
        {user.location && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
            <p className="font-medium">{user.location}</p>
          </div>
        )}
        {user.department && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Department</h3>
            <p className="font-medium">{user.department}</p>
          </div>
        )}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Role</h3>
          <p className="font-medium">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTab;
