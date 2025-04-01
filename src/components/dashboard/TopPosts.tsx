
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageSquare, Eye } from "lucide-react";

const TopPosts = () => {
  return (
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
  );
};

export default TopPosts;
