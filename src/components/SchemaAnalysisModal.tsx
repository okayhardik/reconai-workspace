import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface SchemaAnalysisModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SchemaAnalysisModal = ({ open, onOpenChange }: SchemaAnalysisModalProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    if (open) {
      setIsAnalyzing(true);
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schema Analysis</DialogTitle>
          <DialogDescription>
            AI-powered field mapping detection
          </DialogDescription>
        </DialogHeader>

        {isAnalyzing ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-lg text-muted-foreground">
              Analyzing your files and detecting field mappings...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                I analyzed your files. Here is the mapping strategy:
              </h3>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source Field (File A)</TableHead>
                    <TableHead className="text-center">Mapping</TableHead>
                    <TableHead>Target Field (File B)</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Source Date</TableCell>
                    <TableCell className="text-center">
                      <span className="text-muted-foreground">↔</span>
                    </TableCell>
                    <TableCell className="font-medium">Txn Date</TableCell>
                    <TableCell className="text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 inline-block" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Transaction ID</TableCell>
                    <TableCell className="text-center">
                      <span className="text-muted-foreground">↔</span>
                    </TableCell>
                    <TableCell className="font-medium">Narration</TableCell>
                    <TableCell className="text-center">
                      <AlertCircle className="h-5 w-5 text-yellow-600 inline-block" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                AI Insight
              </h4>
              <p className="text-foreground">
                I noticed the UTR is hidden inside the Narration column in File B. 
                I will extract it using a regex pattern. Does this look correct?
              </p>
            </div>

            <div className="flex justify-end">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => onOpenChange(false)}
              >
                Confirm & Run Recon
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SchemaAnalysisModal;
