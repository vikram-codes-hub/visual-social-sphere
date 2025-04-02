
import { Bell, MessageCircle, Search, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import styled from "styled-components"



const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <img 
                src="./logo.jpg" //img /lovable-uploads/b00f82a1-6a90-4ecf-b450-e416a7f6b394.png
                alt="Vartual Token" 
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#eb63ff]">Vartual</h1>
          </Link>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="w-[300px] pl-9 rounded-full bg-gray-100"
              placeholder="Search tokens, wallets..."
              type="search"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="custom" size="sm" className="hidden sm:inline-flex">
            Connect Wallet
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-[#eb63ff] text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-[#eb63ff] text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
              5
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Imgdiv src="/lovable-uploads/b00f82a1-6a90-4ecf-b450-e416a7f6b394.png"/>
            <span className="absolute -top-1 -right-1 bg-[#eb63ff] text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
              5
            </span>
          </Button>
          <Link to="/profile">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Imgdiv=styled.img`
height:25px;
width:25px;
margin-top:-3px
`