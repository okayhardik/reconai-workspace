import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Database } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg/95 backdrop-blur supports-[backdrop-filter]:bg-header-bg/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Database className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">ReconAI</h1>
            <p className="text-xs text-muted-foreground">Financial Reconciliation</p>
          </div>
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
