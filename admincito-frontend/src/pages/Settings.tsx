
import { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import GeneralSettings from '@/components/settings/GeneralSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
import NotificationsSettings from '@/components/settings/NotificationsSettings';
import AccountSettings from '@/components/settings/AccountSettings';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  return (
    <AdminLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full animate-blur-in">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your application settings and preferences.</p>
        </div>
        
        <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-5 w-full md:w-auto">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-4">
            <AccountSettings />
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <AppearanceSettings />
          </TabsContent>
          
          <TabsContent value="general" className="space-y-4">
            <GeneralSettings />
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <NotificationsSettings />
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <SecuritySettings />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
