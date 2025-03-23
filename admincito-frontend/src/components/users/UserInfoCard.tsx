
import { User, UserStatus } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Phone, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import InfoItem from './InfoItem';
import StatusDialog from './StatusDialog';

interface UserInfoCardProps {
  user: User;
  status: UserStatus;
  setStatus: (status: UserStatus) => void;
}

const UserInfoCard = ({ user, status, setStatus }: UserInfoCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const getStatusBadge = (status: UserStatus) => {
    const variants = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300',
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      suspended: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    };
    
    return (
      <Badge variant="outline" className={`${variants[status]} border-none`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };
  
  const getRoleBadge = (role: User['role']) => {
    const variants = {
      admin: 'bg-primary/10 text-primary border-primary/30',
      editor: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-500/30',
      user: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500/30',
    };
    
    return (
      <Badge variant="outline" className={variants[role]}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    );
  };

  return (
    <Card className="shadow-sm border-border lg:col-span-1">
      <CardHeader className="pb-0">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-3">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl">{user.name}</CardTitle>
          <CardDescription className="text-muted-foreground mt-1">{user.email}</CardDescription>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {getRoleBadge(user.role)}
            {getStatusBadge(status)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-4">
          {user.department && (
            <InfoItem 
              icon={Building} 
              label="Department" 
              value={user.department} 
            />
          )}
          {user.location && (
            <InfoItem 
              icon={MapPin} 
              label="Location" 
              value={user.location} 
            />
          )}
          {user.phone && (
            <InfoItem 
              icon={Phone} 
              label="Phone" 
              value={user.phone} 
            />
          )}
          <InfoItem 
            icon={Clock} 
            label="Last Active" 
            value={format(new Date(user.lastActive), 'PPp')} 
          />
          <InfoItem 
            icon={Calendar} 
            label="Joined" 
            value={format(new Date(user.createdAt), 'PPp')} 
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <StatusDialog user={user} status={status} setStatus={setStatus} />
      </CardFooter>
    </Card>
  );
};

export default UserInfoCard;
