
import PageLayout from "@/components/layout/PageLayout";
import PostCard from "@/components/post/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Bookmark } from "lucide-react";

// Mock data
const savedPosts = [
  {
    id: "post2",
    author: {
      id: "user2",
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    content: "Had an amazing time hiking in the mountains this weekend. Nature is truly the best therapy.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1470",
    timestamp: "5 hours ago",
    likes: 42,
    comments: 8,
    shares: 3,
    liked: true
  },
  {
    id: "post4",
    author: {
      id: "user1",
      name: "Emma Thompson",
      username: "emma_designs",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "Working on some new typography concepts today. Always exploring new ways to make text more impactful.",
    image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?auto=format&fit=crop&q=80&w=1470",
    timestamp: "2 days ago",
    likes: 36,
    comments: 7,
    shares: 4,
    liked: true
  }
];

const Saved = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Bookmark className="h-6 w-6 text-social-blue" />
          <h1 className="text-2xl font-bold">Saved Posts</h1>
        </div>
        
        <Tabs 
          defaultValue="all" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <TabsList className="w-full justify-start mb-6 bg-transparent border-b rounded-none h-auto p-0">
            <TabsTrigger 
              value="all" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-social-blue data-[state=active]:shadow-none px-4 py-2"
            >
              All Saved
            </TabsTrigger>
            <TabsTrigger 
              value="photos" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-social-blue data-[state=active]:shadow-none px-4 py-2"
            >
              Photos
            </TabsTrigger>
            <TabsTrigger 
              value="videos" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-social-blue data-[state=active]:shadow-none px-4 py-2"
            >
              Videos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {savedPosts.length > 0 ? (
              <div className="space-y-6">
                {savedPosts.map(post => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No saved posts yet</h3>
                <p className="text-muted-foreground">Posts you save will appear here</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="photos" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {savedPosts
                .filter(post => post.image)
                .map(post => (
                  <div key={post.id} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <img 
                      src={post.image} 
                      alt="Saved content" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-muted-foreground">No saved videos found</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Saved;
