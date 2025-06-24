import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  FileStack, 
  ShoppingBasket, 
  Mail, 
  Archive, 
  CalendarDays, 
  HelpCircle, 
  Settings, 
  Layers3
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: User, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: FileStack, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingBasket, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-sidebar text-sidebar-foreground p-4 flex flex-col justify-between border-r border-sidebar-border">
      <div>
        <div className="flex items-center gap-2 mb-8 p-2">
          <div className="bg-foreground text-background p-2 rounded-lg">
            <Layers3 size={24} />
          </div>
          <span className="font-bold text-lg">Dashboard</span>
        </div>

        <nav className="flex flex-col gap-1">
          {mainNavItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                item.active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <nav className="flex flex-col gap-1">
          {secondaryNavItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
