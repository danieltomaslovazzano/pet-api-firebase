
import { useState } from 'react';
import { User, UserStatus } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserInfoCard from './UserInfoCard';
import UserDetailTabs from './UserDetailTabs';

interface UserDetailProps {
  user: User;
}

const UserDetail = ({ user }: UserDetailProps) => {
  const [status, setStatus] = useState<UserStatus>(user.status);
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link to="/users">
            <ArrowLeft size={18} />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">User Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UserInfoCard user={user} status={status} setStatus={setStatus} />
        <UserDetailTabs user={user} />
      </div>
    </div>
  );
};

export default UserDetail;
