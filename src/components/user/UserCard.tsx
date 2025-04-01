
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface UserCardProps {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  isFollowing?: boolean;
}

const UserCard = ({
  id,
  name,
  username,
  avatar,
  bio,
  isFollowing = false
}: UserCardProps) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollow = () => {
    setFollowing(!following);
  };

  return (
    <div className="social-card p-4 flex flex-col md:flex-row items-center md:items-start gap-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src={avatar} />
        <AvatarFallback>
          <User className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 text-center md:text-left">
        <Link to={`/profile/${id}`}>
          <h3 className="font-medium text-lg hover:text-social-blue transition-colors">{name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">@{username}</p>
        {bio && <p className="text-sm mt-2">{bio}</p>}
      </div>
      
      <Button
        className={following ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "social-button-primary"}
        onClick={handleFollow}
      >
        {following ? "Following" : (
          <>
            <UserPlus className="mr-2 h-4 w-4" />
            Follow
          </>
        )}
      </Button>
    </div>
  );
};

export default UserCard;
