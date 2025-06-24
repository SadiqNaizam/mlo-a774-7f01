import React from 'react';

// Layout component that includes Sidebar and Header
import MainAppLayout from '@/components/layout/MainAppLayout';

// Dashboard-specific organism components
import PageHeader from '@/components/Dashboard/PageHeader';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import SummaryStatsGrid from '@/components/Dashboard/SummaryStatsGrid';

/**
 * The main dashboard page, serving as the index route of the application.
 * This page composes the primary layout and all the major feature components (organisms)
 * to create the complete "Leads Dashboard Overview".
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The MainAppLayout provides the outer shell with a sidebar and a top header.
        The content below is rendered within the scrollable main content area of the layout.
        The individual components are stacked vertically.
      */}
      <PageHeader />
      <StatsCardGrid />
      <LeadsTrackingChart />
      <SummaryStatsGrid />
    </MainAppLayout>
  );
};

export default IndexPage;
