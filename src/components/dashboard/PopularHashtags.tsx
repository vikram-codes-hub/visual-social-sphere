
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PopularHashtags = () => {
  const hashtags = [
    "#photography", "#travel", "#food", "#fashion", 
    "#technology", "#nature", "#fitness", "#art", "#music", "#design"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Hashtags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag, index) => (
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
  );
};

export default PopularHashtags;
