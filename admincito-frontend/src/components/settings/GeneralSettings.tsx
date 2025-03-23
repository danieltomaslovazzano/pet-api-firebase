
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const GeneralSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    appName: 'Admin Dashboard',
    language: 'en',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    autoRefresh: true,
    refreshInterval: 5,
  });
  
  const handleSave = () => {
    // In a real app, this would save to a backend or localStorage
    toast({
      title: "Settings saved",
      description: "Your general settings have been updated.",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>
          Configure general application settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="appName">Application Name</Label>
            <Input 
              id="appName" 
              value={settings.appName}
              onChange={(e) => setSettings({...settings, appName: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select 
                value={settings.language} 
                onValueChange={(value) => setSettings({...settings, language: value})}
              >
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select 
                value={settings.timezone} 
                onValueChange={(value) => setSettings({...settings, timezone: value})}
              >
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="EST">Eastern Standard Time</SelectItem>
                  <SelectItem value="CST">Central Standard Time</SelectItem>
                  <SelectItem value="MST">Mountain Standard Time</SelectItem>
                  <SelectItem value="PST">Pacific Standard Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dateFormat">Date Format</Label>
              <Select 
                value={settings.dateFormat} 
                onValueChange={(value) => setSettings({...settings, dateFormat: value})}
              >
                <SelectTrigger id="dateFormat">
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="YYYY/MM/DD">YYYY/MM/DD</SelectItem>
                  <SelectItem value="MMM DD, YYYY">MMM DD, YYYY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="autoRefresh">Auto Refresh</Label>
                <p className="text-sm text-muted-foreground">Automatically refresh data at regular intervals</p>
              </div>
              <Switch 
                id="autoRefresh"
                checked={settings.autoRefresh}
                onCheckedChange={(checked) => setSettings({...settings, autoRefresh: checked})}
              />
            </div>
          </div>
          
          {settings.autoRefresh && (
            <div className="space-y-2">
              <Label htmlFor="refreshInterval">Refresh Interval (minutes)</Label>
              <Select 
                value={settings.refreshInterval.toString()} 
                onValueChange={(value) => setSettings({...settings, refreshInterval: parseInt(value)})}
              >
                <SelectTrigger id="refreshInterval">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 minute</SelectItem>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        
        <div className="flex justify-end pt-4">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralSettings;
