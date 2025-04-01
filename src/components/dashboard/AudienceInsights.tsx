
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AudienceInsights = () => {
  return (
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
  );
};

export default AudienceInsights;
