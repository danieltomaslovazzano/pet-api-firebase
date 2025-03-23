
import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => (
  <div className="flex items-start space-x-3">
    <div className="mt-0.5">
      <Icon size={18} className="text-muted-foreground" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default InfoItem;
