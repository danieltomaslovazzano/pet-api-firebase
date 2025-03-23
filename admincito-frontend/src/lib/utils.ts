import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { UserRole, UserStatus } from '@/types/user';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  };
  
  // Verificar si la fecha es válida
  if (isNaN(d.getTime())) {
    return 'Invalid date';
  }
  
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneYear = 365 * oneDay;
  
  if (diff < oneDay) {
    return 'Today';
  } else if (diff < 2 * oneDay) {
    return 'Yesterday';
  } else if (diff < 7 * oneDay) {
    return `${Math.floor(diff / oneDay)} days ago`;
  } else if (diff < oneYear) {
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  } else {
    return `over ${Math.floor(diff / oneYear)} year ago`;
  }
}

export function getRoleBadgeVariant(role: UserRole): "default" | "secondary" | "destructive" | "outline" {
  switch (role) {
    case 'admin':
      return 'destructive';
    case 'moderator':
      return 'secondary';
    case 'editor':
      return 'default';
    default:
      return 'outline';
  }
}

export function getStatusColor(status: UserStatus): string {
  switch (status) {
    case 'active':
      return 'bg-green-500';
    case 'disabled':
      return 'bg-yellow-500';
    case 'blocked':
      return 'bg-red-500';
    case 'pending':
      return 'bg-yellow-400';
    case 'suspended':
      return 'bg-red-400';
    case 'inactive':
      return 'bg-gray-400';
    default:
      return 'bg-gray-300';
  }
}

export function capitalizeFirstLetter(text: string | null | undefined): string {
  if (!text) return 'Usuario';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
