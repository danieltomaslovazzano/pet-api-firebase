
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NotificationsSettings = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState({
    email: {
      newUser: true,
      securityAlerts: true,
      weeklyReports: false,
      systemUpdates: true,
    },
    app: {
      newUser: true,
      securityAlerts: true,
      weeklyReports: true,
      systemUpdates: false,
    },
    push: {
      newUser: false,
      securityAlerts: true,
      weeklyReports: false,
      systemUpdates: false,
    }
  });
  
  const handleSave = () => {
    // In a real app, this would save to a backend or localStorage
    toast({
      title: "Notification preferences saved",
      description: "Your notification settings have been updated.",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose how you want to be notified about different events.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Email Notifications</h3>
            <p className="text-sm text-muted-foreground">Configure what emails you receive</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="email-new-user">New User Registration</Label>
                <p className="text-sm text-muted-foreground">Get notified when a new user registers</p>
              </div>
              <Switch 
                id="email-new-user"
                checked={notifications.email.newUser}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    email: {...notifications.email, newUser: checked}
                  })
                }
              />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="email-security">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified about security events</p>
              </div>
              <Switch 
                id="email-security"
                checked={notifications.email.securityAlerts}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    email: {...notifications.email, securityAlerts: checked}
                  })
                }
              />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="email-reports">Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Receive weekly summary reports</p>
              </div>
              <Switch 
                id="email-reports"
                checked={notifications.email.weeklyReports}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    email: {...notifications.email, weeklyReports: checked}
                  })
                }
              />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="email-updates">System Updates</Label>
                <p className="text-sm text-muted-foreground">Get notified about system changes</p>
              </div>
              <Switch 
                id="email-updates"
                checked={notifications.email.systemUpdates}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    email: {...notifications.email, systemUpdates: checked}
                  })
                }
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">In-App Notifications</h3>
            <p className="text-sm text-muted-foreground">Configure what notifications you see in the app</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="app-new-user">New User Registration</Label>
              <Switch 
                id="app-new-user"
                checked={notifications.app.newUser}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    app: {...notifications.app, newUser: checked}
                  })
                }
              />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="app-security">Security Alerts</Label>
              <Switch 
                id="app-security"
                checked={notifications.app.securityAlerts}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    app: {...notifications.app, securityAlerts: checked}
                  })
                }
              />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="app-reports">Weekly Reports</Label>
              <Switch 
                id="app-reports"
                checked={notifications.app.weeklyReports}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    app: {...notifications.app, weeklyReports: checked}
                  })
                }
              />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="app-updates">System Updates</Label>
              <Switch 
                id="app-updates"
                checked={notifications.app.systemUpdates}
                onCheckedChange={(checked) => 
                  setNotifications({
                    ...notifications, 
                    app: {...notifications.app, systemUpdates: checked}
                  })
                }
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button onClick={handleSave}>Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsSettings;
