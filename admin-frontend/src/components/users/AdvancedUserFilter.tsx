// src/components/users/AdvancedUserFilter.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { CalendarIcon, Search, Filter, X, RefreshCw } from 'lucide-react';
import { addDays, format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import debounce from 'lodash/debounce';

const calendarClassNames = {
  months: "flex space-x-4",
  month: "space-y-4 first:ml-2",
  caption: "flex justify-between pt-1 relative items-center px-2",
  caption_label: "text-sm font-medium",
  nav: "flex items-center",
  nav_button: cn(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  ),
  nav_button_previous: "",
  nav_button_next: "",
  table: "w-full border-collapse",
  head_row: "grid grid-cols-7",
  head_cell: "text-muted-foreground text-xs font-normal text-center",
  row: "grid grid-cols-7 mt-2",
  cell: cn(
    "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
    "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
  ),
  day: cn(
    "inline-flex h-8 w-8 items-center justify-center rounded-sm p-0 text-sm font-normal hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100"
  ),
  day_selected: 
    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
  day_today: "bg-accent text-accent-foreground",
  day_outside: "text-muted-foreground opacity-50",
  day_disabled: "text-muted-foreground opacity-50",
  day_range_middle:
    "aria-selected:bg-accent aria-selected:text-accent-foreground",
  day_hidden: "invisible",
};

interface Filters {
  searchTerm: string;
  role: string;
  status: string;
  dateRange: DateRange | undefined;
  lastLoginRange: DateRange | undefined;
  origin: string;
  isVerified: boolean;
  hasPhone: boolean;
}

interface AdvancedUserFilterProps {
  onFilter: (filters: Filters) => void;
  onReset: () => void;
}

const AdvancedUserFilter: React.FC<AdvancedUserFilterProps> = ({ onFilter, onReset }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    role: 'all',
    status: 'all',
    dateRange: undefined,
    lastLoginRange: undefined,
    origin: 'all',
    isVerified: false,
    hasPhone: false
  });

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchFilters: Filters) => {
      onFilter(searchFilters);
    }, 300),
    [onFilter]
  );

  const handleChange = (field: string, value: any) => {
    const newFilters = {
      ...filters,
      [field]: value
    };
    setFilters(newFilters);
    
    // If it's a search term change, use debounced search
    if (field === 'searchTerm') {
      debouncedSearch(newFilters);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      searchTerm: '',
      role: 'all',
      status: 'all',
      dateRange: undefined,
      lastLoginRange: undefined,
      origin: 'all',
      isVerified: false,
      hasPhone: false
    });
    onReset();
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle>Filtros</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? 
              <><X className="h-4 w-4 mr-2" /> Ocultar avanzados</> : 
              <><Filter className="h-4 w-4 mr-2" /> Mostrar avanzados</>
            }
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="col-span-1 md:col-span-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Buscar por nombre, email, teléfono o ID"
                  value={filters.searchTerm}
                  onChange={(e) => handleChange('searchTerm', e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="role" className="mb-2">Rol</Label>
              <Select 
                value={filters.role} 
                onValueChange={(value) => handleChange('role', value)}
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Todos los roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los roles</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="moderator">Moderador</SelectItem>
                  <SelectItem value="user">Usuario</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="status" className="mb-2">Estado</Label>
              <Select 
                value={filters.status} 
                onValueChange={(value) => handleChange('status', value)}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Todos los estados" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="disabled">Desactivado</SelectItem>
                  <SelectItem value="blocked">Bloqueado</SelectItem>
                  <SelectItem value="invited">Invitado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="origin" className="mb-2">Origen de registro</Label>
              <Select 
                value={filters.origin} 
                onValueChange={(value) => handleChange('origin', value)}
              >
                <SelectTrigger id="origin">
                  <SelectValue placeholder="Todos los orígenes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los orígenes</SelectItem>
                  <SelectItem value="email">Email y contraseña</SelectItem>
                  <SelectItem value="google.com">Google</SelectItem>
                  <SelectItem value="facebook.com">Facebook</SelectItem>
                  <SelectItem value="apple.com">Apple</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" onClick={handleReset}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reiniciar
              </Button>
              <Button type="submit">
                <Filter className="h-4 w-4 mr-2" />
                Aplicar filtros
              </Button>
            </div>
          </div>
          
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 mt-5 border-t pt-5">
              <div className="grid gap-2">
                <Label>Fecha de registro</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !filters.dateRange && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.dateRange?.from ? (
                        filters.dateRange.to ? (
                          <>
                            {format(filters.dateRange.from, "d MMM yyyy", { locale: es })} -{" "}
                            {format(filters.dateRange.to, "d MMM yyyy", { locale: es })}
                          </>
                        ) : (
                          format(filters.dateRange.from, "d MMM yyyy", { locale: es })
                        )
                      ) : (
                        <span>Seleccionar fechas</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-auto p-3" 
                    align="start"
                  >
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={filters.dateRange?.from}
                      selected={filters.dateRange}
                      onSelect={(range) => handleChange('dateRange', range)}
                      numberOfMonths={2}
                      locale={es}
                      classNames={calendarClassNames}
                      showOutsideDays={true}
                      weekStartsOn={1}
                      formatters={{
                        formatWeekdayName: (day) => {
                          const weekdays = ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'];
                          return weekdays[day.getDay()];
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="grid gap-2">
                <Label>Último inicio de sesión</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="lastLogin"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !filters.lastLoginRange && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.lastLoginRange?.from ? (
                        filters.lastLoginRange.to ? (
                          <>
                            {format(filters.lastLoginRange.from, "d MMM yyyy", { locale: es })} -{" "}
                            {format(filters.lastLoginRange.to, "d MMM yyyy", { locale: es })}
                          </>
                        ) : (
                          format(filters.lastLoginRange.from, "d MMM yyyy", { locale: es })
                        )
                      ) : (
                        <span>Seleccionar fechas</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-auto p-3" 
                    align="start"
                  >
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={filters.lastLoginRange?.from}
                      selected={filters.lastLoginRange}
                      onSelect={(range) => handleChange('lastLoginRange', range)}
                      numberOfMonths={2}
                      locale={es}
                      classNames={calendarClassNames}
                      showOutsideDays={true}
                      weekStartsOn={1}
                      formatters={{
                        formatWeekdayName: (day) => {
                          const weekdays = ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'];
                          return weekdays[day.getDay()];
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isVerified"
                    checked={filters.isVerified}
                    onCheckedChange={(checked) => handleChange('isVerified', checked)}
                  />
                  <Label htmlFor="isVerified">Solo verificados</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="hasPhone"
                    checked={filters.hasPhone}
                    onCheckedChange={(checked) => handleChange('hasPhone', checked)}
                  />
                  <Label htmlFor="hasPhone">Con teléfono</Label>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AdvancedUserFilter;