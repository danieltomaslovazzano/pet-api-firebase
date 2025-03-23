// app/pets/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { 
  Pagination, PaginationContent, PaginationItem, 
  PaginationLink, PaginationNext, PaginationPrevious 
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { getPets } from "@/lib/api/pets";
import { PlusCircle, Search, Filter } from "lucide-react";

export default function PetsPage() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    species: "",
    status: ""
  });

  useEffect(() => {
    const fetchPets = async () => {
      setIsLoading(true);
      try {
        const result = await getPets({
          page,
          limit: 10,
          search: filters.search,
          species: filters.species || undefined,
          status: filters.status || undefined
        });
        
        setPets(result.data);
        setTotalPages(result.pagination.totalPages);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
  }, [page, filters]);

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
    setPage(1); // Reset to first page on search
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setPage(1); // Reset to first page on filter change
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      species: "",
      status: ""
    });
    setPage(1);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Mascotas</h1>
        <Button asChild>
          <Link href="/pets/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nueva Mascota
          </Link>
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>Filtra y busca mascotas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Buscar mascota..."
                className="pl-8"
                value={filters.search}
                onChange={handleSearchChange}
              />
            </div>
            
            <Select
              value={filters.species}
              onValueChange={(value) => handleFilterChange("species", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Especie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas</SelectItem>
                <SelectItem value="perro">Perro</SelectItem>
                <SelectItem value="gato">Gato</SelectItem>
                <SelectItem value="ave">Ave</SelectItem>
                <SelectItem value="roedor">Roedor</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filters.status}
              onValueChange={(value) => handleFilterChange("status", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos</SelectItem>
                <SelectItem value="disponible">Disponible</SelectItem>
                <SelectItem value="adoptado">Adoptado</SelectItem>
                <SelectItem value="en_adopcion">En adopción</SelectItem>
                <SelectItem value="perdido">Perdido</SelectItem>
                <SelectItem value="encontrado">Encontrado</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={clearFilters}>
              Limpiar filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Especie</TableHead>
                <TableHead>Raza</TableHead>
                <TableHead>Edad</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Propietario</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                // Filas de carga
                Array(5).fill(0).map((_, index) => (
                  <TableRow key={index}>
                    {Array(7).fill(0).map((_, cellIndex) => (
                      <TableCell key={cellIndex}>
                        <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : pets.length > 0 ? (
                pets.map((pet) => (
                  <TableRow key={pet.id}>
                    <TableCell className="font-medium">{pet.name}</TableCell>
                    <TableCell>{pet.species}</TableCell>
                    <TableCell>{pet.breed}</TableCell>
                    <TableCell>{pet.age} {pet.age === 1 ? 'año' : 'años'}</TableCell>
                    <TableCell>
                      <StatusBadge status={pet.status} />
                    </TableCell>
                    <TableCell>
                      {pet.ownerName || 'Sin propietario'}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/pets/${pet.id}`}>
                            Ver
                          </Link>
                        </Button>
                        <Button asChild size="sm">
                          <Link href={`/pets/${pet.id}/edit`}>
                            Editar
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center p-4">
                    No se encontraron mascotas con los filtros aplicados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-center py-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    isActive={pageNum === page}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}

function StatusBadge({ status }) {
  const statusConfig = {
    disponible: { label: "Disponible", variant: "outline" },
    adoptado: { label: "Adoptado", variant: "default" },
    en_adopcion: { label: "En adopción", variant: "secondary" },
    perdido: { label: "Perdido", variant: "destructive" },
    encontrado: { label: "Encontrado", variant: "success" }
  };

  const config = statusConfig[status] || { label: status, variant: "outline" };

  return (
    <Badge variant={config.variant}>
      {config.label}
    </Badge>
  );
}