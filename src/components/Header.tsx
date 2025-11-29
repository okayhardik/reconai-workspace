import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Database } from "lucide-react";
import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg/95 backdrop-blur supports-[backdrop-filter]:bg-header-bg/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent overflow-hidden">
              <img 
                src={data:image/jpeg;base64,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}
                alt="Kodo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">ReconAI</h1>
              <p className="text-xs text-muted-foreground">By Kodo</p>
            </div>
          </div>

          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Workspace
            </NavLink>
            {/* <NavLink
              to="/results"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Results
            </NavLink> */}
            <NavLink
              to="/history"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              History
            </NavLink>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Sarah Chen</p>
            <p className="text-xs text-muted-foreground">Finance Manager</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-border">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah Chen" />
            <AvatarFallback className="bg-accent text-accent-foreground">SC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
