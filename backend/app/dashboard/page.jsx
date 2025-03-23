// app/dashboard/page.jsx
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PawPrint, Users, Building, Activity } from 'lucide-react';
import { getPetsStats, getUsersStats, getOrganizationsStats } from '@/lib/api/stats';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    pets: { total: 0, active: 0, pending: 0 },
    users: { total: 0, newToday: 0, active: 0 },
    organizations: { total: 0, verified: 0 }
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // En un entorno real, estas serían llamadas a la API
        const petsData = await getPetsStats();
        const usersData = await getUsersStats();
        const orgsData = await getOrganizationsStats();

        setStats({
          pets: petsData,
          users: usersData,
          organizations: orgsData
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Mascotas" 
          value={stats.pets.total}
          description={`${stats.pets.active} activas • ${stats.pets.pending} pendientes`}
          icon={<PawPrint />}
          isLoading={isLoading}
        />
        
        <StatCard 
          title="Usuarios" 
          value={stats.users.total}
          description={`${stats.users.newToday} nuevos hoy • ${stats.users.active} activos`}
          icon={<Users />}
          isLoading={isLoading}
        />
        
        <StatCard 
          title="Organizaciones" 
          value={stats.organizations.total}
          description={`${stats.organizations.verified} verificadas`}
          icon={<Building />}
          isLoading={isLoading}
        />
      </div>

      <Tabs defaultValue="activity" className="space-y-6">
        <TabsList>
          <TabsTrigger value="activity">Actividad Reciente</TabsTrigger>
          <TabsTrigger value="petsActivity">Mascotas</TabsTrigger>
          <TabsTrigger value="usersActivity">Usuarios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Actividad reciente</CardTitle>
              <CardDescription>
                Resumen de la actividad reciente en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-3 bg-slate-200 rounded animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ActivityList />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="petsActivity">
          <Card>
            <CardHeader>
              <CardTitle>Actividad de mascotas</CardTitle>
              <CardDescription>
                Últimas mascotas añadidas y actualizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PetsActivityList />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usersActivity">
          <Card>
            <CardHeader>
              <CardTitle>Actividad de usuarios</CardTitle>
              <CardDescription>
                Últimos registros y acciones de usuarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UsersActivityList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Componente de tarjeta de estadísticas
function StatCard({ title, value, description, icon, isLoading }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            {isLoading ? (
              <div className="h-8 w-20 bg-slate-200 rounded animate-pulse mt-1"></div>
            ) : (
              <p className="text-3xl font-bold">{value}</p>
            )}
            {isLoading ? (
              <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mt-2"></div>
            ) : (
              <p className="text-xs text-slate-500 mt-1">{description}</p>
            )}
          </div>
          <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Componentes para listas de actividades (estos serían implementados con datos reales)
function ActivityList() {
  // Mock data para el ejemplo
  const activities = [
    { id: 1, type: 'pet_created', user: 'Maria López', action: 'añadió una nueva mascota', time: '10 minutos atrás' },
    { id: 2, type: 'user_registered', user: 'Carlos Ruiz', action: 'se registró', time: '1 hora atrás' },
    { id: 3, type: 'organization_created', user: 'Refugio Patitas', action: 'creó una organización', time: '3 horas atrás' },
    { id: 4, type: 'pet_updated', user: 'Juan Pérez', action: 'actualizó una mascota', time: '5 horas atrás' },
  ];
  
  return (
    <div className="space-y-4">
      {activities.map(activity => (
        <div key={activity.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
          <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
            <Activity size={16} />
          </div>
          <div>
            <p className="font-medium">{activity.user}</p>
            <p className="text-sm text-slate-500">{activity.action}</p>
            <p className="text-xs text-slate-400">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PetsActivityList() {
  // Implementación similar a ActivityList pero específica para mascotas
  return <div>Lista de actividad de mascotas</div>;
}

function UsersActivityList() {
  // Implementación similar a ActivityList pero específica para usuarios
  return <div>Lista de actividad de usuarios</div>;
}