import { useState, useCallback } from "react";
import { Upload, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadZoneProps {
  label: string;
  placeholder: string;
}

const FileUploadZone = ({ label, placeholder }: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }, []);

  const removeFile = useCallback(() => {
    setFile(null);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-upload-zone transition-all duration-200",
          isDragging
            ? "border-accent bg-upload-hover scale-[1.02]"
            : "border-upload-border hover:border-accent hover:bg-upload-hover",
          file && "border-solid border-accent"
        )}
      >
        {!file ? (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Upload className="h-8 w-8 text-accent" />
            </div>
            <div className="text-center">
              <p className="text-base font-medium text-foreground">
                {isDragging ? "Drop your file here" : "Drag & drop your file here"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{placeholder}</p>
            </div>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileInput}
                className="absolute inset-0 cursor-pointer opacity-0"
                accept=".csv,.xlsx,.xls,.pdf"
              />
              <button className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-md">
                Browse Files
              </button>
            </div>
          </>
        ) : (
          <div className="flex w-full items-center justify-between px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors hover:bg-destructive/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadZone;
