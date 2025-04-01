
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ActivityData {
  day: string;
  posts: number;
  likes: number;
  comments: number;
}

interface ActivityChartProps {
  data: ActivityData[];
}

const ActivityChart = ({ data }: ActivityChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
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
  );
};

export default ActivityChart;
