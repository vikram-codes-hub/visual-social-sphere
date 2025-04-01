
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal, User } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PostCardProps {
  id: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar?: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
}

const PostCard = ({
  id,
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  shares,
  liked = false
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="social-card p-4 mb-4 w-full animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <Link to={`/profile/${author.id}`} className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={author.avatar} />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author.name}</p>
            <p className="text-sm text-muted-foreground">@{author.username} · {timestamp}</p>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save Post</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
            <DropdownMenuItem>Hide</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-3">
        <p className="text-sm md:text-base">{content}</p>
      </div>

      {image && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full object-cover max-h-[500px]" 
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t text-sm">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={handleLike}
        >
          <Heart 
            className={cn("h-5 w-5", isLiked && "fill-red-500 text-red-500")} 
          />
          <span>{likeCount}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <MessageCircle className="h-5 w-5" />
          <span>{comments}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Share2 className="h-5 w-5" />
          <span>{shares}</span>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
