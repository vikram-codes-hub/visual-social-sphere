
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ActivityItem {
  type: "like" | "comment" | "follow" | "mention";
  user: string;
  time: string;
}

const RecentActivity = () => {
  const activities: ActivityItem[] = [
    { type: "like", user: "Emma Thompson", time: "2 minutes ago" },
    { type: "comment", user: "Alex Johnson", time: "15 minutes ago" },
    { type: "follow", user: "Sarah Williams", time: "1 hour ago" },
    { type: "mention", user: "David Chen", time: "3 hours ago" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
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
  );
};

export default RecentActivity;
