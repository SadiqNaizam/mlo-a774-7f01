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

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-secondary/50 text-foreground p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-8 p-2">
          <div className="bg-black text-white p-2 rounded-lg">
            <Layers3 size={24} />
          </div>
          <button className="ml-auto lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
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

export default SidebarNav;
