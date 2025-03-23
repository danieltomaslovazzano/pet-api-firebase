
import { User } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import UserProfileTab from './UserProfileTab';
import UserSecurityTab from './UserSecurityTab';
import UserActivityTab from './UserActivityTab';

interface UserDetailTabsProps {
  user: User;
}

const UserDetailTabs = ({ user }: UserDetailTabsProps) => {
  return (
    <Card className="shadow-sm border-border lg:col-span-2">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>User Details</CardTitle>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="animate-fade-in">
            <UserProfileTab user={user} />
          </TabsContent>
          
          <TabsContent value="security" className="animate-fade-in">
            <UserSecurityTab user={user} />
          </TabsContent>
          
          <TabsContent value="activity" className="animate-fade-in">
            <UserActivityTab user={user} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserDetailTabs;
