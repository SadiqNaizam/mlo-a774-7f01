import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <Tabs defaultValue="leads" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
      </Tabs>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">last 6 months</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Last 30 days</DropdownMenuItem>
          <DropdownMenuItem>Last 3 months</DropdownMenuItem>
          <DropdownMenuItem>Last 6 months</DropdownMenuItem>
          <DropdownMenuItem>Last 12 months</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PageHeader;
