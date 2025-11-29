import Header from "@/components/Header";
import ReconciliationWorkspace from "@/components/ReconciliationWorkspace";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ReconciliationWorkspace />
      </main>
    </div>
  );
};

export default Index;
