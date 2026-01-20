import { useCallback, useState } from 'react';
import { Upload, Image, X, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadZoneProps {
  onFilesUploaded: (files: File[]) => void;
}

const FileUploadZone = ({ onFilesUploaded }: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      onFilesUploaded(files);
    }
  }, [onFilesUploaded]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      onFilesUploaded(files);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer",
          isDragging 
            ? "border-primary bg-primary/5 glow-primary" 
            : "border-border/50 hover:border-primary/50 hover:bg-secondary/20"
        )}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-4">
          <div className={cn(
            "p-4 rounded-2xl transition-all duration-300",
            isDragging ? "bg-primary/20" : "bg-secondary/50"
          )}>
            <Upload className={cn(
              "w-8 h-8 transition-colors",
              isDragging ? "text-primary" : "text-muted-foreground"
            )} />
          </div>
          
          <div>
            <p className="text-lg font-medium mb-1">
              {isDragging ? 'Drop your files here' : 'Drag & drop product photos'}
            </p>
            <p className="text-sm text-muted-foreground">
              or click to browse • PNG, JPG up to 10MB
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {uploadedFiles.map((file, index) => (
            <div 
              key={index}
              className="relative group rounded-xl overflow-hidden glass border border-border/50"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => removeFile(index)}
                  className="p-2 rounded-full bg-destructive/20 hover:bg-destructive/30 transition-colors"
                >
                  <X className="w-5 h-5 text-destructive" />
                </button>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span className="text-xs truncate">{file.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;
