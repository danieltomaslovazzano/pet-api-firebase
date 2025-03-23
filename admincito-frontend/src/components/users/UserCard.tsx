import { User } from '@/types/user';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();
  
  const getInitials = (name: string) => {
    if (!name) return '??';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const getStatusBadge = (status: User['status']) => {
    const variants = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      disabled: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300',
      blocked: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    };
    
    return (
      <Badge variant="outline" className={`${variants[status]} border-none`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer",
        "border border-border hover:border-primary/30"
      )}
      onClick={() => navigate(`/users/${user.id}`)}
    >
      <CardContent className="p-5">
        <div className="flex items-center space-x-4">
          <Avatar className="h-14 w-14 border-2 border-background">
            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || undefined} />
            <AvatarFallback>{getInitials(user.displayName || 'User')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-base font-medium truncate">{user.displayName || 'User'}</h3>
              {getStatusBadge(user.status)}
            </div>
            <p className="text-sm text-muted-foreground truncate">{user.email}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                {user.lastLoginAt
                  ? `Last active ${formatDistanceToNow(new Date(user.lastLoginAt), { addSuffix: true })}`
                  : 'Never logged in'}
              </p>
              <Badge variant="outline" className="text-xs border-muted bg-muted/30">
                {user.role}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
