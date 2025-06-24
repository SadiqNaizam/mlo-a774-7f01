import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Calendar, ChevronDown } from 'lucide-react';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 88 },
  { name: 'April', closedWon: 59, closedLost: 48 },
  { name: 'May', closedWon: 98, closedLost: 25 },
  { name: 'June', closedWon: 81, closedLost: 5 },
  { name: 'July', closedWon: 86, closedLost: 42 },
  { name: 'August', closedWon: 32, closedLost: 95 },
];

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg text-foreground">Leads tracking</h2>
          <div className="flex items-baseline gap-4">
            <p><span className="text-2xl font-bold">680</span> <span className="text-muted-foreground">total closed</span></p>
            <p><span className="text-2xl font-bold">70</span> <span className="text-muted-foreground">total lost</span></p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ToggleGroup type="single" defaultValue="converted" variant="outline" size="sm">
            <ToggleGroupItem value="came">Leads came</ToggleGroupItem>
            <ToggleGroupItem value="converted" className="bg-accent text-accent-foreground">Leads Converted</ToggleGroupItem>
            <ToggleGroupItem value="size">Total deals size</ToggleGroupItem>
          </ToggleGroup>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">last 6 months</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Last 3 months</DropdownMenuItem>
              <DropdownMenuItem>Last 6 months</DropdownMenuItem>
              <DropdownMenuItem>Last 12 months</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip 
                 contentStyle={{ 
                  background: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38B2AC" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#38B2AC" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="closedWon" name="Closed Won" stroke="#38B2AC" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#38B2AC', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6, strokeWidth: 2 }} />
              <Area type="monotone" dataKey="closedLost" name="Closed Lost" stroke="#DC2626" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#DC2626', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6, strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#38B2AC] rounded-sm"></span>
              <span className="text-sm text-muted-foreground">Closed won</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#DC2626] rounded-sm"></span>
              <span className="text-sm text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
