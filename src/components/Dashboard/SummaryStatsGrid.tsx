import React from 'react';
import { StatCard } from './StatCard';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStatProps {
  percentage: string;
  reason: string;
}

const ReasonStat: React.FC<ReasonStatProps> = ({ percentage, reason }) => (
  <div>
    <p className="text-4xl font-semibold text-foreground">{percentage}</p>
    <p className="text-sm text-muted-foreground mt-1">{reason}</p>
  </div>
);

interface OtherDataStatProps {
  value: string;
  label: string;
  tooltip?: string;
}

const OtherDataStat: React.FC<OtherDataStatProps> = ({ value, label, tooltip }) => (
  <div className="text-center">
    <p className="text-4xl font-semibold text-foreground">{value}</p>
    <div className="flex items-center justify-center gap-1 mt-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-3 w-3 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  </div>
);

const SummaryStatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <StatCard title="Reasons of leads lost">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <ReasonStat percentage="40%" reason="The proposal is unclear" />
          <ReasonStat percentage="20%" reason="However venture pursuit" />
          <ReasonStat percentage="10%" reason="Other" />
          <ReasonStat percentage="30%" reason="The proposal is unclear" />
        </div>
      </StatCard>

      <StatCard title="Other data">
        <div className="flex items-center justify-around h-full min-h-[140px]">
          <OtherDataStat value="900" label="total leads count" />
          <OtherDataStat value="12" label="days in average to convert lead" />
          <OtherDataStat value="30" label="inactive leads" tooltip="Leads that have not been contacted in over 30 days." />
        </div>
      </StatCard>
    </div>
  );
};

export default SummaryStatsGrid;
