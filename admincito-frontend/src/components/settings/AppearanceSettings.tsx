
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { defaultTheme, updateTheme, getTheme } from '@/lib/theme';

const AppearanceSettings = () => {
  const { toast } = useToast();
  const [theme, setTheme] = useState(defaultTheme);
  
  useEffect(() => {
    // Load saved theme settings on component mount
    const savedTheme = getTheme();
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  const handleSave = () => {
    updateTheme(theme);
    toast({
      title: "Appearance updated",
      description: "Your appearance settings have been updated.",
    });
  };
  
  const handleReset = () => {
    setTheme(defaultTheme);
    updateTheme(defaultTheme);
    toast({
      title: "Appearance reset",
      description: "Your appearance settings have been reset to default.",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the look and feel of the application.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="colors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
          </TabsList>
          
          <TabsContent value="colors" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex space-x-2 items-center">
                    <Input 
                      id="primaryColor" 
                      type="color" 
                      value={theme.colors.primary} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, primary: e.target.value}})}
                      className="w-12 h-10 p-1 cursor-pointer"
                    />
                    <Input 
                      type="text" 
                      value={theme.colors.primary} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, primary: e.target.value}})}
                      className="font-mono"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex space-x-2 items-center">
                    <Input 
                      id="secondaryColor" 
                      type="color" 
                      value={theme.colors.secondary} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, secondary: e.target.value}})}
                      className="w-12 h-10 p-1 cursor-pointer"
                    />
                    <Input 
                      type="text" 
                      value={theme.colors.secondary} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, secondary: e.target.value}})}
                      className="font-mono"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex space-x-2 items-center">
                    <Input 
                      id="accentColor" 
                      type="color" 
                      value={theme.colors.accent} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, accent: e.target.value}})}
                      className="w-12 h-10 p-1 cursor-pointer"
                    />
                    <Input 
                      type="text" 
                      value={theme.colors.accent} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, accent: e.target.value}})}
                      className="font-mono"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex space-x-2 items-center">
                    <Input 
                      id="backgroundColor" 
                      type="color" 
                      value={theme.colors.background} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, background: e.target.value}})}
                      className="w-12 h-10 p-1 cursor-pointer"
                    />
                    <Input 
                      type="text" 
                      value={theme.colors.background} 
                      onChange={(e) => setTheme({...theme, colors: {...theme.colors, background: e.target.value}})}
                      className="font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="typography" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fontFamily">Font Family</Label>
                <Select 
                  value={theme.typography.fontFamily} 
                  onValueChange={(value) => setTheme({...theme, typography: {...theme.typography, fontFamily: value}})}
                >
                  <SelectTrigger id="fontFamily" className="w-full">
                    <SelectValue placeholder="Select a font family" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sans">Sans-serif</SelectItem>
                    <SelectItem value="serif">Serif</SelectItem>
                    <SelectItem value="mono">Monospace</SelectItem>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="poppins">Poppins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fontSize">Base Font Size ({theme.typography.fontSize}px)</Label>
                <Slider 
                  id="fontSize"
                  min={12}
                  max={20}
                  step={1}
                  value={[theme.typography.fontSize]}
                  onValueChange={(value) => setTheme({...theme, typography: {...theme.typography, fontSize: value[0]}})}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="layout" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="borderRadius">Border Radius ({theme.layout.borderRadius}px)</Label>
                <Slider 
                  id="borderRadius"
                  min={0}
                  max={20}
                  step={1}
                  value={[theme.layout.borderRadius]}
                  onValueChange={(value) => setTheme({...theme, layout: {...theme.layout, borderRadius: value[0]}})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="spacing">Base Spacing ({theme.layout.spacing}px)</Label>
                <Slider 
                  id="spacing"
                  min={4}
                  max={16}
                  step={1}
                  value={[theme.layout.spacing]}
                  onValueChange={(value) => setTheme({...theme, layout: {...theme.layout, spacing: value[0]}})}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="animationsEnabled"
                  checked={theme.layout.animationsEnabled}
                  onCheckedChange={(checked) => setTheme({...theme, layout: {...theme.layout, animationsEnabled: checked}})}
                />
                <Label htmlFor="animationsEnabled">Enable animations</Label>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={handleReset}>Reset to Defaults</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;
