
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ActivityData {
  day: string;
  trades: number;
  volume: number;
  profit: number;
}

interface ActivityChartProps {
  data: ActivityData[];
}

const ActivityChart = ({ data }: ActivityChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Trading Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="trades" name="Trades" fill="#3b82f6" />
            <Bar dataKey="volume" name="Volume" fill="#eb63ff" />
            <Bar dataKey="profit" name="Profit" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
