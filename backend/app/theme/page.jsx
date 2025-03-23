// app/theme/page.jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useTheme } from "@/lib/context/theme-context";
import { useToast } from "@/components/ui/use-toast";

export default function ThemePage() {
  const { theme, updateTheme, resetTheme } = useTheme();
  const { toast } = useToast();
  const [selectedFont, setSelectedFont] = useState(theme.fonts.main);
  
  const fontOptions = [
    "Inter, sans-serif",
    "Roboto, sans-serif",
    "Poppins, sans-serif",
    "Montserrat, sans-serif",
    "Open Sans, sans-serif",
    "Lato, sans-serif"
  ];

  const handleFontChange = (fontFamily, type) => {
    const path = `fonts.${type}`;
    setSelectedFont(fontFamily);
    updateTheme(path, fontFamily);
  };

  const handleResetTheme = () => {
    resetTheme();
    toast({
      title: "Tema restaurado",
      description: "Se han restablecido los valores predeterminados",
    });
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Personalización del Tema</h1>
        <Button variant="outline" onClick={handleResetTheme}>
          Restaurar predeterminados
        </Button>
      </div>

      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList>
          <TabsTrigger value="colors">Colores</TabsTrigger>
          <TabsTrigger value="typography">Tipografía</TabsTrigger>
          <TabsTrigger value="spacing">Espaciado</TabsTrigger>
          <TabsTrigger value="radii">Bordes</TabsTrigger>
          <TabsTrigger value="preview">Vista previa</TabsTrigger>
        </TabsList>
        
        {/* Pestaña de Colores */}
        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Colores principales</CardTitle>
              <CardDescription>
                Personaliza los colores principales de la interfaz
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Color primario</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    id="primary-color"
                    value={theme.colors.primary}
                    onChange={(e) => updateTheme('colors.primary', e.target.value)}
                    className="w-10 h-10 border-0"
                  />
                  <Input
                    value={theme.colors.primary}
                    onChange={(e) => updateTheme('colors.primary', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="secondary-color">Color secundario</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    id="secondary-color"
                    value={theme.colors.secondary}
                    onChange={(e) => updateTheme('colors.secondary', e.target.value)}
                    className="w-10 h-10 border-0"
                  />
                  <Input
                    value={theme.colors.secondary}
                    onChange={(e) => updateTheme('colors.secondary', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accent-color">Color de acento</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    id="accent-color"
                    value={theme.colors.accent}
                    onChange={(e) => updateTheme('colors.accent', e.target.value)}
                    className="w-10 h-10 border-0"
                  />
                  <Input
                    value={theme.colors.accent}
                    onChange={(e) => updateTheme('colors.accent', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="background-color">Color de fondo</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    id="background-color"
                    value={theme.colors.background}
                    onChange={(e) => updateTheme('colors.background', e.target.value)}
                    className="w-10 h-10 border-0"
                  />
                  <Input
                    value={theme.colors.background}
                    onChange={(e) => updateTheme('colors.background', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Pestaña de Tipografía */}
        <TabsContent value="typography" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tipografía</CardTitle>
              <CardDescription>
                Selecciona las fuentes para diferentes elementos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="main-font">Fuente principal</Label>
                <select
                  id="main-font"
                  className="w-full p-2 border rounded"
                  value={theme.fonts.main}
                  onChange={(e) => handleFontChange(e.target.value, 'main')}
                >
                  {fontOptions.map(font => (
                    <option key={font} value={font}>{font.split(',')[0]}</option>
                  ))}
                </select>
                <p style={{ fontFamily: theme.fonts.main }} className="mt-2">
                  Esta es una muestra de texto con la fuente seleccionada.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="headings-font">Fuente para títulos</Label>
                <select
                  id="headings-font"
                  className="w-full p-2 border rounded"
                  value={theme.fonts.headings}
                  onChange={(e) => handleFontChange(e.target.value, 'headings')}
                >
                  {fontOptions.map(font => (
                    <option key={font} value={font}>{font.split(',')[0]}</option>
                  ))}
                </select>
                <h3 style={{ fontFamily: theme.fonts.headings }} className="text-xl font-bold mt-2">
                  Este es un ejemplo de título
                </h3>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Pestaña de Espaciado */}
        <TabsContent value="spacing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Espaciado</CardTitle>
              <CardDescription>
                Ajusta el espaciado de diferentes elementos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="button-x-spacing">
                  Espaciado horizontal de botones: {theme.spacing.buttonX}px
                </Label>
                <Slider
                  id="button-x-spacing"
                  min={4}
                  max={32}
                  step={1}
                  value={[theme.spacing.buttonX]}
                  onValueChange={(value) => updateTheme('spacing.buttonX', value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="button-y-spacing">
                  Espaciado vertical de botones: {theme.spacing.buttonY}px
                </Label>
                <Slider
                  id="button-y-spacing"
                  min={2}
                  max={20}
                  step={1}
                  value={[theme.spacing.buttonY]}
                  onValueChange={(value) => updateTheme('spacing.buttonY', value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="section-spacing">
                  Espaciado de secciones: {theme.spacing.section}px
                </Label>
                <Slider
                  id="section-spacing"
                  min={8}
                  max={64}
                  step={4}
                  value={[theme.spacing.section]}
                  onValueChange={(value) => updateTheme('spacing.section', value[0])}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Pestaña de Radios */}
        <TabsContent value="radii" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bordes redondeados</CardTitle>
              <CardDescription>
                Ajusta el radio de las esquinas para diferentes elementos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="button-radius">
                  Radio de botones: {theme.radii.button}px
                </Label>
                <Slider
                  id="button-radius"
                  min={0}
                  max={24}
                  step={1}
                  value={[theme.radii.button]}
                  onValueChange={(value) => updateTheme('radii.button', value[0])}
                />
                <Button className="mt-2">Botón de ejemplo</Button>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="card-radius">
                  Radio de tarjetas: {theme.radii.card}px
                </Label>
                <Slider
                  id="card-radius"
                  min={0}
                  max={24}
                  step={1}
                  value={[theme.radii.card]}
                  onValueChange={(value) => updateTheme('radii.card', value[0])}
                />
                <div 
                  className="mt-2 p-4 border bg-white dark:bg-slate-800"
                  style={{ borderRadius: `${theme.radii.card}px` }}
                >
                  Ejemplo de tarjeta
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="input-radius">
                  Radio de inputs: {theme.radii.input}px
                </Label>
                <Slider
                  id="input-radius"
                  min={0}
                  max={24}
                  step={1}
                  value={[theme.radii.input]}
                  onValueChange={(value) => updateTheme('radii.input', value[0])}
                />
                <Input 
                  className="mt-2"
                  placeholder="Input de ejemplo"
                  style={{ borderRadius: `${theme.radii.input}px` }}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Pestaña de Vista Previa */}
        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vista previa</CardTitle>
              <CardDescription>
                Visualiza cómo se aplican los cambios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: theme.fonts.headings }}>
                    Elementos de interfaz
                  </h3>
                  <div className="space-y-4">
                    <Button>Botón primario</Button>
                    <Button variant="outline">Botón outline</Button>
                    <Button variant="secondary">Botón secundario</Button>
                    <div>
                      <Input placeholder="Campo de texto" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: theme.fonts.headings }}>
                    Ejemplo de tarjeta
                  </h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Título de tarjeta</CardTitle>
                      <CardDescription>Descripción de la tarjeta</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p style={{ fontFamily: theme.fonts.main }}>
                        Este es un ejemplo de contenido dentro de una tarjeta con los estilos personalizados aplicados.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}