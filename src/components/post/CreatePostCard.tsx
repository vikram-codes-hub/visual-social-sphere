
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image, PlusCircle, Video, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const CreatePostCard = () => {
  const [postContent, setPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!postContent.trim()) {
      toast({
        title: "Empty post",
        description: "Please write something to post.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Post created",
        description: "Your post has been published successfully!",
      });
      setPostContent("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="social-card mb-6 w-full">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <textarea
                className="w-full p-3 rounded-lg bg-gray-100 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              
              <div className="flex flex-wrap items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <Button type="button" variant="ghost" size="sm" className="flex items-center gap-1">
                    <Image className="h-5 w-5 text-green-500" />
                    <span className="hidden sm:inline">Photo</span>
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="flex items-center gap-1">
                    <Video className="h-5 w-5 text-blue-500" />
                    <span className="hidden sm:inline">Video</span>
                  </Button>
                </div>
                
                <Button 
                  type="submit" 
                  className="social-button-primary px-4 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="animate-pulse">Posting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <PlusCircle className="h-4 w-4" />
                      <span>Post</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePostCard;
