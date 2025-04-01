
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Eye, Heart, MessageSquare, TrendingUp, User, UserPlus } from "lucide-react";

// Mock data for dashboard
const activityData = [
  { day: "Mon", posts: 4, likes: 12, comments: 8 },
  { day: "Tue", posts: 2, likes: 18, comments: 10 },
  { day: "Wed", posts: 5, likes: 24, comments: 12 },
  { day: "Thu", posts: 3, likes: 16, comments: 7 },
  { day: "Fri", posts: 7, likes: 32, comments: 15 },
  { day: "Sat", posts: 6, likes: 29, comments: 13 },
  { day: "Sun", posts: 4, likes: 22, comments: 9 },
];

const engagementData = [
  { month: "Jan", engagement: 45 },
  { month: "Feb", engagement: 52 },
  { month: "Mar", engagement: 49 },
  { month: "Apr", engagement: 62 },
  { month: "May", engagement: 58 },
  { month: "Jun", engagement: 75 },
  { month: "Jul", engagement: 80 }
];

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
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={activityData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="posts" name="Posts" fill="#3b82f6" />
                    <Bar dataKey="likes" name="Likes" fill="#ec4899" />
                    <Bar dataKey="comments" name="Comments" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={engagementData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="engagement">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((post) => (
                      <div key={post} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="font-medium">Post title {post}</p>
                          <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> 124</span>
                            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> 32</span>
                            <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> 1.2k</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Age Distribution</p>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>18-24 (70%)</span>
                        <span>25-34 (20%)</span>
                        <span>35+ (10%)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Gender</p>
                      <div className="flex gap-2">
                        <div className="h-8 bg-blue-500 rounded" style={{ width: '60%' }}></div>
                        <div className="h-8 bg-pink-500 rounded" style={{ width: '40%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Male (60%)</span>
                        <span>Female (40%)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Active Hours</p>
                      <div className="flex gap-1 h-12">
                        {[2, 3, 4, 5, 7, 8, 9, 8, 6, 5, 4, 3].map((value, i) => (
                          <div 
                            key={i} 
                            className="bg-purple-500 rounded-t w-full" 
                            style={{ height: `${value * 10}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>9 AM</span>
                        <span>3 PM</span>
                        <span>9 PM</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "like", user: "Emma Thompson", time: "2 minutes ago" },
                  { type: "comment", user: "Alex Johnson", time: "15 minutes ago" },
                  { type: "follow", user: "Sarah Williams", time: "1 hour ago" },
                  { type: "mention", user: "David Chen", time: "3 hours ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 py-2 border-b last:border-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                      <AvatarFallback>
                        {activity.user.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        {activity.type === "like" && " liked your post"}
                        {activity.type === "comment" && " commented on your post"}
                        {activity.type === "follow" && " started following you"}
                        {activity.type === "mention" && " mentioned you in a comment"}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Hashtags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["#photography", "#travel", "#food", "#fashion", "#technology", "#nature", "#fitness", "#art", "#music", "#design"].map((tag, index) => (
                  <div key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    {tag}
                    <span className="ml-1 text-xs text-muted-foreground">
                      {Math.floor(Math.random() * 1000)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

// Stat card component
const StatCard = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className={`text-xs mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change} from last month
            </p>
          </div>
          <div className="p-2 bg-gray-100 rounded-full">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
