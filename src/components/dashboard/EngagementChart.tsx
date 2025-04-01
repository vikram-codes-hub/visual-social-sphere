
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface EngagementData {
  month: string;
  engagement: number;
}

interface EngagementChartProps {
  data: EngagementData[];
}

const EngagementChart = ({ data }: EngagementChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EngagementChart;
