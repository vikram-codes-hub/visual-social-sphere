
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Bitcoin, Wallet, BadgeDollarSign } from "lucide-react";

// Import dashboard components
import StatCard from "@/components/dashboard/StatCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import EngagementChart from "@/components/dashboard/EngagementChart";
import TopPosts from "@/components/dashboard/TopPosts";
import AudienceInsights from "@/components/dashboard/AudienceInsights";
import RecentActivity from "@/components/dashboard/RecentActivity";
import PopularHashtags from "@/components/dashboard/PopularHashtags";
import { activityData, priceData, topCryptos, portfolioData } from "@/components/dashboard/DashboardData";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Crypto Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to Vartual! Track your cryptocurrency portfolio and market trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard 
            title="Portfolio Value" 
            value="$128,432"
            change="+8.2%"
            icon={<Wallet className="h-5 w-5 text-[#eb63ff]" />} 
          />
          <StatCard 
            title="Bitcoin Price" 
            value="$63,482"
            change="+2.4%"
            icon={<Bitcoin className="h-5 w-5 text-orange-500" />} 
          />
          <StatCard 
            title="24h Trading Volume" 
            value="$12,765"
            change="+5.3%"
            icon={<LineChart className="h-5 w-5 text-green-500" />} 
          />
        </div>

        <Tabs defaultValue="overview" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Market Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="trading">Trading History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="card bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Bitcoin Price History</h3>
              <EngagementChart data={priceData} />
            </div>
          </TabsContent>
          
          <TabsContent value="portfolio">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Portfolio Allocation</h3>
                <AudienceInsights />
              </div>
              <div className="card bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Top Holdings</h3>
                <div className="space-y-4">
                  {topCryptos.map((crypto, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          {crypto.symbol.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{crypto.name}</p>
                          <p className="text-sm text-gray-500">{crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${crypto.price.toLocaleString()}</p>
                        <p className={`text-sm ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {crypto.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="trading">
            <div className="card bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Weekly Trading Activity</h3>
              <ActivityChart data={activityData} />
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <RecentActivity />
          </div>
          <div className="card bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Popular Coins</h3>
            <PopularHashtags />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
