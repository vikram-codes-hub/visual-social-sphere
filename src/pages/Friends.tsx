
import PageLayout from "@/components/layout/PageLayout";
import UserCard from "@/components/user/UserCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock data
const allUsers = [
  {
    id: "user2",
    name: "Ritik raj",
    username: "@Raju",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "Software developer and tech enthusiast",
    isFollowing: true
  },
  {
    id: "user3",
    name: "Piyush",
    username: "Piyu",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Photographer and travel blogger",
    isFollowing: true
  },
  {
    id: "user4",
    name: "Aryan",
    username: "@guptaji",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Software Engineer | Coffee Enthusiast | Dog Lover",
    isFollowing: false
  },
  {
    id: "user5",
    name: "Manya singh",
    username: "@man",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Travel photographer | Published in National Geographic",
    isFollowing: false
  },
  {
    id: "user6",
    name: "Michael Brown",
    username: "michaelb",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "Fitness coach and nutrition specialist",
    isFollowing: true
  },
  {
    id: "user7",
    name: "Lisa Garcia",
    username: "lisag",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "UI/UX Designer | Creator of beautiful interfaces",
    isFollowing: false
  },
  {
    id: "user8",
    name: "Robert Wilson",
    username: "robertw",
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "Chef and food blogger | Sharing delicious recipes",
    isFollowing: false
  }
];

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (user.bio && user.bio.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === "following") {
      return matchesSearch && user.isFollowing;
    } else if (activeTab === "suggestions") {
      return matchesSearch && !user.isFollowing;
    }
    
    return matchesSearch;
  });

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Friends</h1>
        
        <div className="social-card p-6 mb-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search friends..."
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center mb-6">
            <button
              className={`px-4 py-2 rounded-lg mr-2 ${activeTab === 'all' ? 'bg-social-blue text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg mr-2 ${activeTab === 'following' ? 'bg-social-blue text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setActiveTab("following")}
            >
              Following
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'suggestions' ? 'bg-social-blue text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setActiveTab("suggestions")}
            >
              Suggestions
            </button>
          </div>
          
          <div className="grid gap-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <UserCard key={user.id} {...user} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground">No users found</p>
                <p className="text-sm">Try another search or filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Friends;
