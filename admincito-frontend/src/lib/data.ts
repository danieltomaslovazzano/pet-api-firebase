
export type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'editor';
  status: UserStatus;
  lastActive: string;
  createdAt: string;
  location?: string;
  department?: string;
  bio?: string;
  phone?: string;
}

// Generate random avatar URL
const getAvatarUrl = (seed: string) => `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;

// Mock users data
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: getAvatarUrl('alex'),
    role: 'admin',
    status: 'active',
    lastActive: '2023-09-28T14:23:30Z',
    createdAt: '2022-03-12T09:43:11Z',
    location: 'New York, US',
    department: 'Engineering',
    bio: 'Senior system administrator with 8 years experience.',
    phone: '+1 (555) 123-4567'
  },
  {
    id: '2',
    name: 'Sarah Miller',
    email: 'sarah@example.com',
    avatar: getAvatarUrl('sarah'),
    role: 'user',
    status: 'active',
    lastActive: '2023-09-27T23:11:45Z',
    createdAt: '2022-05-22T14:21:34Z',
    location: 'London, UK',
    department: 'Marketing',
    bio: 'Digital marketing specialist focused on growth.',
    phone: '+44 20 1234 5678'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    email: 'marcus@example.com',
    avatar: getAvatarUrl('marcus'),
    role: 'editor',
    status: 'inactive',
    lastActive: '2023-08-14T18:52:09Z',
    createdAt: '2022-01-18T11:09:22Z',
    location: 'Singapore',
    department: 'Content',
    bio: 'Content writer and editor with expertise in technical documentation.',
    phone: '+65 9123 4567'
  },
  {
    id: '4',
    name: 'Priya Patel',
    email: 'priya@example.com',
    avatar: getAvatarUrl('priya'),
    role: 'user',
    status: 'pending',
    lastActive: '2023-09-29T08:33:12Z',
    createdAt: '2023-09-25T16:47:32Z',
    location: 'Mumbai, India',
    department: 'Customer Support',
    bio: 'Customer support specialist with excellent communication skills.',
    phone: '+91 98765 43210'
  },
  {
    id: '5',
    name: 'James Wilson',
    email: 'james@example.com',
    avatar: getAvatarUrl('james'),
    role: 'user',
    status: 'suspended',
    lastActive: '2023-07-02T10:12:45Z',
    createdAt: '2022-08-05T13:26:59Z',
    location: 'Sydney, Australia',
    department: 'Sales',
    bio: 'Sales representative with a strong track record of exceeding targets.',
    phone: '+61 2 9876 5432'
  },
  {
    id: '6',
    name: 'Elena Rodriguez',
    email: 'elena@example.com',
    avatar: getAvatarUrl('elena'),
    role: 'editor',
    status: 'active',
    lastActive: '2023-09-28T22:01:14Z',
    createdAt: '2022-11-14T09:38:41Z',
    location: 'Madrid, Spain',
    department: 'Design',
    bio: 'UI/UX designer with a passion for creating intuitive user experiences.',
    phone: '+34 123 456 789'
  },
  {
    id: '7',
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    avatar: getAvatarUrl('ahmed'),
    role: 'user',
    status: 'active',
    lastActive: '2023-09-26T16:42:33Z',
    createdAt: '2023-01-21T08:19:54Z',
    location: 'Cairo, Egypt',
    department: 'Finance',
    bio: 'Financial analyst with expertise in budget management and forecasting.',
    phone: '+20 100 123 4567'
  },
  {
    id: '8',
    name: 'Lisa Wong',
    email: 'lisa@example.com',
    avatar: getAvatarUrl('lisa'),
    role: 'admin',
    status: 'active',
    lastActive: '2023-09-29T11:05:22Z',
    createdAt: '2022-02-28T15:32:18Z',
    location: 'Hong Kong',
    department: 'Operations',
    bio: 'Operations manager with expertise in process optimization.',
    phone: '+852 9876 5432'
  },
  {
    id: '9',
    name: 'Carlos Mendez',
    email: 'carlos@example.com',
    avatar: getAvatarUrl('carlos'),
    role: 'user',
    status: 'pending',
    lastActive: '2023-09-27T19:14:56Z',
    createdAt: '2023-09-20T12:45:37Z',
    location: 'Mexico City, Mexico',
    department: 'Customer Success',
    bio: 'Customer success manager focused on building strong relationships.',
    phone: '+52 55 1234 5678'
  },
  {
    id: '10',
    name: 'Olivia Brown',
    email: 'olivia@example.com',
    avatar: getAvatarUrl('olivia'),
    role: 'user',
    status: 'active',
    lastActive: '2023-09-28T09:47:31Z',
    createdAt: '2022-10-03T14:58:26Z',
    location: 'Toronto, Canada',
    department: 'Product',
    bio: 'Product manager with a strong background in software development.',
    phone: '+1 (416) 123-4567'
  }
];

// Get user by ID
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

// Get users with optional filtering
export const getUsers = (filters?: Partial<User>): User[] => {
  if (!filters) return mockUsers;
  
  return mockUsers.filter(user => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === undefined) return true;
      return user[key as keyof User] === value;
    });
  });
};

// User stats
export interface UserStats {
  total: number;
  active: number;
  inactive: number;
  pending: number;
  suspended: number;
  newThisWeek: number;
  newThisMonth: number;
}

export const getUserStats = (): UserStats => {
  const statusCounts = mockUsers.reduce(
    (acc, user) => {
      acc[user.status]++;
      return acc;
    },
    { active: 0, inactive: 0, pending: 0, suspended: 0 }
  );

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  
  const newThisWeek = mockUsers.filter(
    user => new Date(user.createdAt) >= oneWeekAgo
  ).length;
  
  const newThisMonth = mockUsers.filter(
    user => new Date(user.createdAt) >= oneMonthAgo
  ).length;

  return {
    total: mockUsers.length,
    ...statusCounts,
    newThisWeek,
    newThisMonth
  };
};
