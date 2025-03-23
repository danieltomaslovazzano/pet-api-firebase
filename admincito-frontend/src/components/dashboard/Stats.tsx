
import { UserStats } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, UserX, Clock, UserMinus, Calendar } from 'lucide-react';

interface StatsProps {
  stats: UserStats;
}

const Stats = ({ stats }: StatsProps) => {
  const statsItems = [
    {
      title: 'Total Users',
      value: stats.total,
      description: 'Total registered users',
      icon: Users,
      color: 'text-primary bg-primary/10',
    },
    {
      title: 'Active Users',
      value: stats.active,
      description: 'Currently active users',
      icon: UserCheck,
      color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
    },
    {
      title: 'Inactive Users',
      value: stats.inactive,
      description: 'Temporarily inactive users',
      icon: UserMinus,
      color: 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800/50',
    },
    {
      title: 'Pending Users',
      value: stats.pending,
      description: 'Awaiting activation',
      icon: Clock,
      color: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30',
    },
    {
      title: 'Suspended Users',
      value: stats.suspended,
      description: 'Accounts under review',
      icon: UserX,
      color: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30',
    },
    {
      title: 'New This Month',
      value: stats.newThisMonth,
      description: 'Registered in last 30 days',
      icon: Calendar,
      color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
    },
  ];
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {statsItems.map((item) => (
        <Card key={item.title} className="shadow-sm border-border overflow-hidden animate-scale-in">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className={`rounded-md p-2 mr-4 ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold">{item.value}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
