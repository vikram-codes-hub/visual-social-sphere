
import { ReactNode } from "react";
import Navbar from "./Navbar";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home, User, Users, Bookmark, Settings, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-social-light">
      <Navbar />
      
      <SidebarProvider defaultCollapsed={isMobile}>
        <div className="flex flex-1 w-full">
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <div className="px-3 py-4">
                  <Link to="/profile" className="flex items-center gap-3 mb-8">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">@johndoe</p>
                    </div>
                  </Link>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link to="/" className="flex items-center gap-3">
                            <Home className="h-5 w-5" />
                            <span>Home</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link to="/profile" className="flex items-center gap-3">
                            <User className="h-5 w-5" />
                            <span>Profile</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link to="/friends" className="flex items-center gap-3">
                            <Users className="h-5 w-5" />
                            <span>Friends</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link to="/saved" className="flex items-center gap-3">
                            <Bookmark className="h-5 w-5" />
                            <span>Saved Posts</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link to="/settings" className="flex items-center gap-3">
                            <Settings className="h-5 w-5" />
                            <span>Settings</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </div>
              </SidebarGroup>
              <div className="px-3 mt-auto pb-4">
                <Button className="w-full social-button-primary">
                  <PlusCircle className="mr-2 h-4 w-4" /> Create Post
                </Button>
              </div>
            </SidebarContent>
          </Sidebar>
          
          <main className="flex-1 p-4">
            <div className="md:hidden mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default PageLayout;
