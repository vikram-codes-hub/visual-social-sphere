
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PostCard from "@/components/post/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Edit2, Image, Link, MapPin, User } from "lucide-react";

// Updated profileData without crypto references
const profileData = {
  id: "user1",
  name: "Emma Thompson",
  username: "emma_designs",
  avatar: "https://i.pravatar.cc/150?img=1",
  coverImage: "https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&q=80&w=1470",
  bio: "Graphic designer and typography enthusiast. Creating visual stories that connect people.",
  location: "San Francisco, CA",
  website: "emmadesigns.com",
  joinDate: "January 2019",
  following: 284,
  followers: 2942,
  posts: [
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
  ]
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto">
        {/* Cover Image */}
        <div className="relative mb-20 sm:mb-24">
          <div className="h-48 sm:h-64 rounded-lg overflow-hidden">
            <img 
              src={profileData.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Avatar */}
          <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2">
            <Avatar className="h-32 sm:h-40 w-32 sm:w-40 border-4 border-white">
              <AvatarImage src={profileData.avatar} />
              <AvatarFallback>
                <User className="h-16 w-16" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">{profileData.name}</h1>
          <p className="text-muted-foreground">@{profileData.username}</p>
          
          <p className="max-w-lg mx-auto my-4">{profileData.bio}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            {profileData.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{profileData.location}</span>
              </div>
            )}
            {profileData.website && (
              <div className="flex items-center gap-1">
                <Link className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`https://${profileData.website}`} 
                  className="text-social-blue hover:underline"
                  target="_blank" 
                  rel="noreferrer"
                >
                  {profileData.website}
                </a>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Joined {profileData.joinDate}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <div>
              <span className="font-bold">{profileData.following}</span>
              <span className="text-muted-foreground ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold">{profileData.followers}</span>
              <span className="text-muted-foreground ml-1">Followers</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              className={isFollowing ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "social-button-primary"}
              onClick={handleFollow}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Tabs - kept same as before */}
        <Tabs 
          defaultValue="posts" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mt-8"
        >
          <TabsList className="w-full justify-start mb-6 bg-transparent border-b rounded-none h-auto p-0">
            <TabsTrigger 
              value="posts" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-social-blue data-[state=active]:shadow-none px-4 py-2"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger 
              value="photos" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-social-blue data-[state=active]:shadow-none px-4 py-2"
            >
              Photos
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-social-blue data-[state=active]:shadow-none px-4 py-2"
            >
              About
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-0">
            <div className="space-y-6">
              {profileData.posts.map(post => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="photos" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {profileData.posts
                .filter(post => post.image)
                .map(post => (
                  <div key={post.id} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <img 
                      src={post.image} 
                      alt="User uploaded content" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="about" className="mt-0">
            <div className="social-card p-6">
              <h3 className="text-xl font-medium mb-4">About {profileData.name}</h3>
              <div className="space-y-4">
                <p>{profileData.bio}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-muted-foreground">{profileData.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Website</h4>
                    <a 
                      href={`https://${profileData.website}`} 
                      className="text-social-blue hover:underline"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      {profileData.website}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Member Since</h4>
                    <p className="text-muted-foreground">{profileData.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Profile;
