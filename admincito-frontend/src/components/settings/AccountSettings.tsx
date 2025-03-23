
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { User } from '@/lib/data';

// Mock logged-in user data - in a real app, this would come from authentication
const loggedInUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=alex',
  role: 'admin',
  status: 'active',
  lastActive: '2023-09-28T14:23:30Z',
  createdAt: '2022-03-12T09:43:11Z',
  location: 'New York, US',
  department: 'Engineering',
  bio: 'Senior system administrator with 8 years experience.',
  phone: '+1 (555) 123-4567'
};

const AccountSettings = () => {
  const { toast } = useToast();
  const [user, setUser] = useState<User>(loggedInUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // In a real app, this would send data to a backend
    toast({
      title: "Profile updated",
      description: "Your account information has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data
    setUser(loggedInUser);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>
            Manage your personal information and profile settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Avatar className="w-20 h-20">
              <img src={user.avatar} alt={user.name} className="aspect-square" />
            </Avatar>
            
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)} variant="outline" size="sm" className="mt-2">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={user.name} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  value={user.email} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  value={user.phone || ''} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  name="location"
                  value={user.location || ''} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input 
                  id="department" 
                  name="department"
                  value={user.department || ''} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                name="bio"
                value={user.bio || ''} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className="min-h-[100px]"
              />
            </div>
            
            {isEditing && (
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
