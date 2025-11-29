import { useState } from "react";
import FileUploadZone from "./FileUploadZone";
import SchemaAnalysisModal from "./SchemaAnalysisModal";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

const ReconciliationWorkspace = () => {
  const [showSchemaModal, setShowSchemaModal] = useState(false);

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Reconciliation Workspace
        </h2>
        <p className="mt-2 text-muted-foreground">
          Upload your files and let AI handle the reconciliation
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <FileUploadZone
          label="Upload Source of Truth"
          placeholder="e.g., Ledger or Financial Report"
        />
        <FileUploadZone
          label="Upload Target File"
          placeholder="e.g., Bank Statement"
        />
      </div>

      <div className="mt-8 space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Reconciliation Instructions
        </label>
        <Textarea
          placeholder="e.g., Match the UTR in the bank description with the Transaction ID in my report..."
          className="min-h-[140px] resize-none bg-card text-base"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          onClick={() => setShowSchemaModal(true)}
          className="group gap-2 bg-accent px-8 text-accent-foreground hover:bg-accent/90 hover:shadow-lg"
        >
          <Sparkles className="h-5 w-5 transition-transform group-hover:scale-110" />
          Simulate Upload
        </Button>
      </div>

      <SchemaAnalysisModal 
        open={showSchemaModal} 
        onOpenChange={setShowSchemaModal}
      />
    </div>
  );
};

export default ReconciliationWorkspace;
