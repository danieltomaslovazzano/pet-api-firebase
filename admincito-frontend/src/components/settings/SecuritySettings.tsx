
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SecuritySettings = () => {
  const { toast } = useToast();
  const [security, setSecurity] = useState({
    twoFactorEnabled: false,
    passwordExpiration: 90,
    sessionTimeout: 30,
    loginAttempts: 5,
    forcedPasswordChange: false,
  });
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSaveSecuritySettings = () => {
    toast({
      title: "Security settings updated",
      description: "Your security preferences have been saved.",
    });
  };
  
  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation must match.",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword.length < 8) {
      toast({
        title: "Password too short",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send this to a backend
    toast({
      title: "Password changed",
      description: "Your password has been updated successfully.",
    });
    
    // Clear password fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Security</CardTitle>
          <CardDescription>
            Manage your account security settings and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="twoFactorEnabled">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch 
                id="twoFactorEnabled"
                checked={security.twoFactorEnabled}
                onCheckedChange={(checked) => setSecurity({...security, twoFactorEnabled: checked})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passwordExpiration">Password Expiration (days)</Label>
              <Select 
                value={security.passwordExpiration.toString()} 
                onValueChange={(value) => setSecurity({...security, passwordExpiration: parseInt(value)})}
              >
                <SelectTrigger id="passwordExpiration">
                  <SelectValue placeholder="Select expiration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="180">180 days</SelectItem>
                  <SelectItem value="365">365 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Select 
                value={security.sessionTimeout.toString()} 
                onValueChange={(value) => setSecurity({...security, sessionTimeout: parseInt(value)})}
              >
                <SelectTrigger id="sessionTimeout">
                  <SelectValue placeholder="Select timeout" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                  <SelectItem value="120">120 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="loginAttempts">Max Failed Login Attempts</Label>
              <Select 
                value={security.loginAttempts.toString()} 
                onValueChange={(value) => setSecurity({...security, loginAttempts: parseInt(value)})}
              >
                <SelectTrigger id="loginAttempts">
                  <SelectValue placeholder="Select limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 attempts</SelectItem>
                  <SelectItem value="5">5 attempts</SelectItem>
                  <SelectItem value="10">10 attempts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="forcedPasswordChange">Force Password Change on First Login</Label>
                <p className="text-sm text-muted-foreground">New users must change their password when they first log in</p>
              </div>
              <Switch 
                id="forcedPasswordChange"
                checked={security.forcedPasswordChange}
                onCheckedChange={(checked) => setSecurity({...security, forcedPasswordChange: checked})}
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button onClick={handleSaveSecuritySettings}>Save Security Settings</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your account password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input 
              id="currentPassword" 
              type="password" 
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input 
              id="newPassword" 
              type="password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input 
              id="confirmPassword" 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-end pt-4">
            <Button onClick={handleChangePassword}>Change Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
