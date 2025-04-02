
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface PriceData {
  month: string;
  price: number;
}

interface EngagementChartProps {
  data: PriceData[];
}

const EngagementChart = ({ data }: EngagementChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Price History</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Price']} />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#eb63ff" 
              strokeWidth={2} 
              dot={{ fill: '#eb63ff', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EngagementChart;
