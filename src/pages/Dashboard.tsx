
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, User, UserPlus } from "lucide-react";

// Import dashboard components
import StatCard from "@/components/dashboard/StatCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import EngagementChart from "@/components/dashboard/EngagementChart";
import TopPosts from "@/components/dashboard/TopPosts";
import AudienceInsights from "@/components/dashboard/AudienceInsights";
import RecentActivity from "@/components/dashboard/RecentActivity";
import PopularHashtags from "@/components/dashboard/PopularHashtags";
import { activityData, engagementData } from "@/components/dashboard/DashboardData";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your social media activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard 
            title="Total Followers" 
            value="1,248"
            change="+8.2%"
            icon={<User className="h-5 w-5 text-blue-500" />} 
          />
          <StatCard 
            title="New Followers" 
            value="32"
            change="+12.4%"
            icon={<UserPlus className="h-5 w-5 text-green-500" />} 
          />
          <StatCard 
            title="Post Engagement" 
            value="65.7%"
            change="+5.3%"
            icon={<TrendingUp className="h-5 w-5 text-purple-500" />} 
          />
        </div>

        <Tabs defaultValue="overview" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <ActivityChart data={activityData} />
          </TabsContent>
          
          <TabsContent value="analytics">
            <EngagementChart data={engagementData} />
          </TabsContent>
          
          <TabsContent value="engagement">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TopPosts />
              <AudienceInsights />
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecentActivity />
          <PopularHashtags />
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
