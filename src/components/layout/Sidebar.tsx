
import { Home, User, Users, Bookmark, Settings, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar as ShadcnSidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Sidebar() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <ShadcnSidebar>
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
        </ShadcnSidebar>
        <div className="flex-1 overflow-auto">
          <div className="p-4 lg:pl-6">
            <SidebarTrigger className="mb-4" />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Sidebar;
