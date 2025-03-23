"use client"

import { useState, useEffect } from "react"
import { Check, Palette, RefreshCw, Save, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarNav } from "@/components/sidebar-nav"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

// Define theme types
interface ThemeColors {
  primary: string
  secondary: string
  background: string
  foreground: string
  muted: string
  accent: string
  border: string
}

interface ThemeTypography {
  fontFamily: string
  fontSize: string
  fontWeight: string
  lineHeight: string
}

interface ThemeSpacing {
  padding: string
  margin: string
  borderRadius: string
}

interface ThemeShadows {
  boxShadow: string
  elevation: string
}

interface Theme {
  id: string
  name: string
  description: string
  colors: ThemeColors
  typography: ThemeTypography
  spacing: ThemeSpacing
  shadows: ThemeShadows
}

// Predefined themes
const predefinedThemes: Theme[] = [
  {
    id: "default",
    name: "Default",
    description: "The default PetConnect theme with balanced colors and spacing",
    colors: {
      primary: "#0070f3",
      secondary: "#7928ca",
      background: "#ffffff",
      foreground: "#1a1a1a",
      muted: "#f5f5f5",
      accent: "#f0f0f0",
      border: "#e2e2e2",
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    spacing: {
      padding: "16px",
      margin: "16px",
      borderRadius: "8px",
    },
    shadows: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      elevation: "2",
    },
  },
  {
    id: "dark",
    name: "Dark Mode",
    description: "A dark theme with high contrast and reduced eye strain",
    colors: {
      primary: "#3b82f6",
      secondary: "#8b5cf6",
      background: "#121212",
      foreground: "#e2e2e2",
      muted: "#2a2a2a",
      accent: "#333333",
      border: "#444444",
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    spacing: {
      padding: "16px",
      margin: "16px",
      borderRadius: "8px",
    },
    shadows: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      elevation: "2",
    },
  },
  {
    id: "playful",
    name: "Playful",
    description: "A vibrant theme with rounded corners and playful colors",
    colors: {
      primary: "#ff6b6b",
      secondary: "#4ecdc4",
      background: "#ffffff",
      foreground: "#333333",
      muted: "#f9f9f9",
      accent: "#ffe66d",
      border: "#e0e0e0",
    },
    typography: {
      fontFamily: "Quicksand, sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.6",
    },
    spacing: {
      padding: "20px",
      margin: "20px",
      borderRadius: "16px",
    },
    shadows: {
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
      elevation: "3",
    },
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A clean, minimalist theme with subtle details",
    colors: {
      primary: "#000000",
      secondary: "#666666",
      background: "#ffffff",
      foreground: "#111111",
      muted: "#f8f8f8",
      accent: "#f0f0f0",
      border: "#eeeeee",
    },
    typography: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    spacing: {
      padding: "12px",
      margin: "12px",
      borderRadius: "4px",
    },
    shadows: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      elevation: "1",
    },
  },
  {
    id: "professional",
    name: "Professional",
    description: "A business-oriented theme with a polished appearance",
    colors: {
      primary: "#2c3e50",
      secondary: "#34495e",
      background: "#f9f9f9",
      foreground: "#333333",
      muted: "#f0f0f0",
      accent: "#e6e6e6",
      border: "#d9d9d9",
    },
    typography: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    spacing: {
      padding: "16px",
      margin: "16px",
      borderRadius: "6px",
    },
    shadows: {
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.08)",
      elevation: "2",
    },
  },
]

export default function AppearanceSettingsPage() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<Theme>(predefinedThemes[0])
  const [customTheme, setCustomTheme] = useState<Theme>(predefinedThemes[0])
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [activeTab, setActiveTab] = useState("predefined")
  const [showSavedMessage, setShowSavedMessage] = useState(false)

  // Update custom theme when selected theme changes
  useEffect(() => {
    setCustomTheme(JSON.parse(JSON.stringify(selectedTheme)))
  }, [selectedTheme])

  // Handle theme selection
  const handleThemeSelect = (themeId: string) => {
    const theme = predefinedThemes.find((t) => t.id === themeId)
    if (theme) {
      setSelectedTheme({ ...theme })
      setCustomTheme({ ...theme })
      setHasUnsavedChanges(true)
    }
  }

  // Handle custom theme changes
  const updateCustomTheme = (
    category: "colors" | "typography" | "spacing" | "shadows",
    property: string,
    value: string,
  ) => {
    setCustomTheme((prev) => {
      const updated = { ...prev }
      updated[category] = {
        ...updated[category],
        [property]: value,
      }
      return updated
    })
    setHasUnsavedChanges(true)
  }

  // Save changes
  const saveChanges = () => {
    // In a real application, this would save to a database or API
    setSelectedTheme(customTheme)
    setHasUnsavedChanges(false)
    setShowSavedMessage(true)
    setTimeout(() => setShowSavedMessage(false), 3000)
  }

  // Reset to default
  const resetToDefault = () => {
    const defaultTheme = predefinedThemes[0]
    setSelectedTheme(defaultTheme)
    setCustomTheme(defaultTheme)
    setHasUnsavedChanges(true)
  }

  // Discard changes
  const discardChanges = () => {
    setCustomTheme(JSON.parse(JSON.stringify(selectedTheme)))
    setHasUnsavedChanges(false)
  }

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <SidebarNav />

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <Palette className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PetConnect</span>
            </div>
          </div>
          <div className="py-4">
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-muted-foreground">Settings</h3>
              <div className="mt-2 space-y-1">
                <Button variant="secondary" asChild className="w-full justify-start">
                  <div>
                    <Palette className="mr-2 h-5 w-5" />
                    Appearance
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex-1 md:grow-0">
            <h1 className="text-lg font-semibold md:text-xl">Appearance Settings</h1>
          </div>
          <div className="flex items-center gap-2">
            {hasUnsavedChanges && (
              <>
                <Button variant="outline" size="sm" onClick={discardChanges}>
                  <X className="mr-2 h-4 w-4" />
                  Discard Changes
                </Button>
                <Button variant="outline" size="sm" onClick={resetToDefault}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Default
                </Button>
              </>
            )}
            <Button size="sm" onClick={saveChanges} disabled={!hasUnsavedChanges}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          {showSavedMessage && (
            <Alert className="bg-green-50 text-green-700 border-green-200">
              <Check className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your appearance settings have been saved successfully.</AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="predefined">Predefined Themes</TabsTrigger>
              <TabsTrigger value="custom">Custom Theme Editor</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            {/* Predefined Themes Tab */}
            <TabsContent value="predefined" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {predefinedThemes.map((theme) => (
                  <Card
                    key={theme.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTheme.id === theme.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleThemeSelect(theme.id)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{theme.name}</CardTitle>
                      <CardDescription>{theme.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(theme.colors)
                          .slice(0, 5)
                          .map(([key, color]) => (
                            <div
                              key={key}
                              className="w-8 h-8 rounded-full border"
                              style={{ backgroundColor: color }}
                              title={`${key}: ${color}`}
                            />
                          ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Font: {theme.typography.fontFamily.split(",")[0]}
                        </div>
                        <div
                          className="w-16 h-6 rounded"
                          style={{
                            backgroundColor: theme.colors.accent,
                            borderRadius: theme.spacing.borderRadius,
                          }}
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant={selectedTheme.id === theme.id ? "default" : "outline"}
                        className="w-full"
                        onClick={() => handleThemeSelect(theme.id)}
                      >
                        {selectedTheme.id === theme.id ? (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Selected
                          </>
                        ) : (
                          "Select Theme"
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Custom Theme Editor Tab */}
            <TabsContent value="custom" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Colors Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Colors</CardTitle>
                    <CardDescription>Customize the color palette of your application</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(customTheme.colors).map(([key, value]) => (
                      <div key={key} className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor={`color-${key}`} className="capitalize">
                            {key}
                          </Label>
                          <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: value }} />
                        </div>
                        <div className="flex gap-2">
                          <Input
                            id={`color-${key}`}
                            type="color"
                            value={value}
                            onChange={(e) => updateCustomTheme("colors", key, e.target.value)}
                            className="w-12 h-10 p-1"
                          />
                          <Input
                            type="text"
                            value={value}
                            onChange={(e) => updateCustomTheme("colors", key, e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Typography Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Typography</CardTitle>
                    <CardDescription>Adjust fonts, sizes, and text properties</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="font-family">Font Family</Label>
                      <Select
                        value={customTheme.typography.fontFamily}
                        onValueChange={(value) => updateCustomTheme("typography", "fontFamily", value)}
                      >
                        <SelectTrigger id="font-family">
                          <SelectValue placeholder="Select font family" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inter, sans-serif">Inter</SelectItem>
                          <SelectItem value="Roboto, sans-serif">Roboto</SelectItem>
                          <SelectItem value="Quicksand, sans-serif">Quicksand</SelectItem>
                          <SelectItem value="IBM Plex Sans, sans-serif">IBM Plex Sans</SelectItem>
                          <SelectItem value="Source Sans Pro, sans-serif">Source Sans Pro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="font-size">Font Size</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="font-size"
                          min={12}
                          max={20}
                          step={1}
                          value={[Number.parseInt(customTheme.typography.fontSize)]}
                          onValueChange={(value) => updateCustomTheme("typography", "fontSize", `${value[0]}px`)}
                          className="flex-1"
                        />
                        <span className="w-12 text-right">{customTheme.typography.fontSize}</span>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="font-weight">Font Weight</Label>
                      <Select
                        value={customTheme.typography.fontWeight}
                        onValueChange={(value) => updateCustomTheme("typography", "fontWeight", value)}
                      >
                        <SelectTrigger id="font-weight">
                          <SelectValue placeholder="Select font weight" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="300">Light (300)</SelectItem>
                          <SelectItem value="400">Regular (400)</SelectItem>
                          <SelectItem value="500">Medium (500)</SelectItem>
                          <SelectItem value="600">Semi-Bold (600)</SelectItem>
                          <SelectItem value="700">Bold (700)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="line-height">Line Height</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="line-height"
                          min={1.0}
                          max={2.0}
                          step={0.1}
                          value={[Number.parseFloat(customTheme.typography.lineHeight)]}
                          onValueChange={(value) => updateCustomTheme("typography", "lineHeight", value[0].toString())}
                          className="flex-1"
                        />
                        <span className="w-12 text-right">{customTheme.typography.lineHeight}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Spacing Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Spacing</CardTitle>
                    <CardDescription>Adjust padding, margins, and border radius</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="padding">Padding</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="padding"
                          min={8}
                          max={32}
                          step={2}
                          value={[Number.parseInt(customTheme.spacing.padding)]}
                          onValueChange={(value) => updateCustomTheme("spacing", "padding", `${value[0]}px`)}
                          className="flex-1"
                        />
                        <span className="w-12 text-right">{customTheme.spacing.padding}</span>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="margin">Margin</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="margin"
                          min={8}
                          max={32}
                          step={2}
                          value={[Number.parseInt(customTheme.spacing.margin)]}
                          onValueChange={(value) => updateCustomTheme("spacing", "margin", `${value[0]}px`)}
                          className="flex-1"
                        />
                        <span className="w-12 text-right">{customTheme.spacing.margin}</span>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="border-radius">Border Radius</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="border-radius"
                          min={0}
                          max={24}
                          step={2}
                          value={[Number.parseInt(customTheme.spacing.borderRadius)]}
                          onValueChange={(value) => updateCustomTheme("spacing", "borderRadius", `${value[0]}px`)}
                          className="flex-1"
                        />
                        <span className="w-12 text-right">{customTheme.spacing.borderRadius}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shadows Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shadows & Elevation</CardTitle>
                    <CardDescription>Customize shadows and elevation effects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="box-shadow">Box Shadow</Label>
                      <Select
                        value={customTheme.shadows.boxShadow}
                        onValueChange={(value) => updateCustomTheme("shadows", "boxShadow", value)}
                      >
                        <SelectTrigger id="box-shadow">
                          <SelectValue placeholder="Select shadow style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="0 1px 3px rgba(0, 0, 0, 0.1)">Subtle</SelectItem>
                          <SelectItem value="0 4px 6px rgba(0, 0, 0, 0.1)">Medium</SelectItem>
                          <SelectItem value="0 8px 20px rgba(0, 0, 0, 0.15)">Pronounced</SelectItem>
                          <SelectItem value="0 12px 28px rgba(0, 0, 0, 0.2)">Strong</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="elevation">Elevation Level</Label>
                      <RadioGroup
                        id="elevation"
                        value={customTheme.shadows.elevation}
                        onValueChange={(value) => updateCustomTheme("shadows", "elevation", value)}
                        className="flex space-x-2"
                      >
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="0" id="elevation-0" />
                          <Label htmlFor="elevation-0">0</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="1" id="elevation-1" />
                          <Label htmlFor="elevation-1">1</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="2" id="elevation-2" />
                          <Label htmlFor="elevation-2">2</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="3" id="elevation-3" />
                          <Label htmlFor="elevation-3">3</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="4" id="elevation-4" />
                          <Label htmlFor="elevation-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="mt-4">
                      <div className="text-sm font-medium mb-2">Shadow Preview</div>
                      <div
                        className="h-20 rounded-md border flex items-center justify-center"
                        style={{
                          boxShadow: customTheme.shadows.boxShadow,
                          borderRadius: customTheme.spacing.borderRadius,
                        }}
                      >
                        <span className="text-sm">Shadow Example</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Preview Tab */}
            <TabsContent value="preview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Preview</CardTitle>
                  <CardDescription>See how your theme looks with different UI components</CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="p-6 rounded-lg border"
                    style={{
                      fontFamily: customTheme.typography.fontFamily,
                      fontSize: customTheme.typography.fontSize,
                      fontWeight: customTheme.typography.fontWeight,
                      lineHeight: customTheme.typography.lineHeight,
                      backgroundColor: customTheme.colors.background,
                      color: customTheme.colors.foreground,
                      borderRadius: customTheme.spacing.borderRadius,
                      boxShadow: customTheme.shadows.boxShadow,
                    }}
                  >
                    <h2 className="text-2xl font-bold mb-4" style={{ color: customTheme.colors.foreground }}>
                      Component Preview
                    </h2>

                    <div className="space-y-6">
                      {/* Buttons */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: customTheme.colors.foreground }}>
                          Buttons
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <button
                            className="px-4 py-2 rounded-md font-medium"
                            style={{
                              backgroundColor: customTheme.colors.primary,
                              color: "#ffffff",
                              borderRadius: customTheme.spacing.borderRadius,
                            }}
                          >
                            Primary Button
                          </button>
                          <button
                            className="px-4 py-2 rounded-md font-medium"
                            style={{
                              backgroundColor: customTheme.colors.secondary,
                              color: "#ffffff",
                              borderRadius: customTheme.spacing.borderRadius,
                            }}
                          >
                            Secondary Button
                          </button>
                          <button
                            className="px-4 py-2 rounded-md font-medium border"
                            style={{
                              backgroundColor: "transparent",
                              color: customTheme.colors.primary,
                              borderColor: customTheme.colors.border,
                              borderRadius: customTheme.spacing.borderRadius,
                            }}
                          >
                            Outline Button
                          </button>
                        </div>
                      </div>

                      {/* Cards */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: customTheme.colors.foreground }}>
                          Cards
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div
                            className="p-4 rounded-md border"
                            style={{
                              backgroundColor: customTheme.colors.background,
                              borderColor: customTheme.colors.border,
                              borderRadius: customTheme.spacing.borderRadius,
                              boxShadow: customTheme.shadows.boxShadow,
                            }}
                          >
                            <h4 className="text-base font-medium mb-2" style={{ color: customTheme.colors.foreground }}>
                              Card Title
                            </h4>
                            <p className="text-sm" style={{ color: customTheme.colors.foreground }}>
                              This is a sample card with customized styling based on your theme settings.
                            </p>
                          </div>
                          <div
                            className="p-4 rounded-md"
                            style={{
                              backgroundColor: customTheme.colors.muted,
                              borderRadius: customTheme.spacing.borderRadius,
                            }}
                          >
                            <h4 className="text-base font-medium mb-2" style={{ color: customTheme.colors.foreground }}>
                              Muted Card
                            </h4>
                            <p className="text-sm" style={{ color: customTheme.colors.foreground }}>
                              A card with muted background color to show contrast.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Typography */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: customTheme.colors.foreground }}>
                          Typography
                        </h3>
                        <div className="space-y-2">
                          <h1 className="text-3xl font-bold" style={{ color: customTheme.colors.foreground }}>
                            Heading 1
                          </h1>
                          <h2 className="text-2xl font-bold" style={{ color: customTheme.colors.foreground }}>
                            Heading 2
                          </h2>
                          <h3 className="text-xl font-semibold" style={{ color: customTheme.colors.foreground }}>
                            Heading 3
                          </h3>
                          <p className="text-base" style={{ color: customTheme.colors.foreground }}>
                            This is a paragraph of text that demonstrates how body text will appear with your selected
                            typography settings.
                          </p>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: customTheme.colors.foreground }}>
                          Badges
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="inline-block px-2 py-1 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: customTheme.colors.primary,
                              color: "#ffffff",
                              borderRadius: "9999px",
                            }}
                          >
                            Primary Badge
                          </span>
                          <span
                            className="inline-block px-2 py-1 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: customTheme.colors.secondary,
                              color: "#ffffff",
                              borderRadius: "9999px",
                            }}
                          >
                            Secondary Badge
                          </span>
                          <span
                            className="inline-block px-2 py-1 text-xs font-medium border rounded-full"
                            style={{
                              borderColor: customTheme.colors.border,
                              color: customTheme.colors.foreground,
                              borderRadius: "9999px",
                            }}
                          >
                            Outline Badge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

