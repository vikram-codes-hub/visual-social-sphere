
import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import CreatePostCard from "@/components/post/CreatePostCard";
import PostCard from "@/components/post/PostCard";
import UserCard from "@/components/user/UserCard";
import PopularHashtags from "@/components/dashboard/PopularHashtags";
import StatCard from "@/components/dashboard/StatCard";
import { LineChart, Wallet } from "lucide-react";

// Mock data
const mockPosts = [
  {
    id: "post1",
    author: {
      id: "user1",
      name: "Emma Thompson",
      username: "emma_designs",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "Just finished a new logo design for a client! What do you think? #design #logo #creative",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1470",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    shares: 2,
    liked: false
  },
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
    id: "post3",
    author: {
      id: "user3",
      name: "Sarah Williams",
      username: "sarahw",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Just announced! Our team won the regional championship. So proud of everyone's hard work and dedication.",
    timestamp: "8 hours ago",
    likes: 78,
    comments: 12,
    shares: 6,
    liked: false
  }
];

const suggestedUsers = [
  {
    id: "user4",
    name: "David Chen",
    username: "davidc",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Software Engineer | Coffee Enthusiast | Dog Lover"
  },
  {
    id: "user5",
    name: "Jessica Taylor",
    username: "jessicaT",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Travel photographer | Published in National Geographic"
  }
];

const Index = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <StatCard 
                title="Portfolio Value" 
                value="$12,456" 
                change="+2.1%" 
                icon={<Wallet className="h-5 w-5 text-[#9709a7]" />} 
              />
              <StatCard 
                title="24h Trading Vol" 
                value="$1.2B" 
                change="-0.8%" 
                icon={<LineChart className="h-5 w-5 text-[#9709a7]" />} 
              />
            </div>
            
            <CreatePostCard />
            
            {loading ? (
              // Skeleton loading
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="social-card p-4 mb-4 animate-pulse-light">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-gray-300 rounded"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    <div className="h-6 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            ) : (
              posts.map(post => (
                <PostCard key={post.id} {...post} />
              ))
            )}
          </div>
          
          <div className="hidden lg:block">
            <div className="social-card p-4 mb-6">
              <h3 className="font-medium text-lg mb-4">People You Might Know</h3>
              <div className="space-y-4">
                {suggestedUsers.map(user => (
                  <UserCard key={user.id} {...user} />
                ))}
              </div>
            </div>
            
            <PopularHashtags />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
