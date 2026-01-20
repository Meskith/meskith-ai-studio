import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import FileUploadZone from '@/components/brand-vault/FileUploadZone';
import VoiceRecorder from '@/components/brand-vault/VoiceRecorder';
import AssetGrid, { Asset } from '@/components/brand-vault/AssetGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FolderOpen, Image, Mic, Grid3X3 } from 'lucide-react';

const BrandVault = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleFilesUploaded = (files: File[]) => {
    const newAssets: Asset[] = files.map(file => ({
      id: crypto.randomUUID(),
      type: 'image',
      name: file.name,
      url: URL.createObjectURL(file),
      createdAt: new Date(),
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    }));
    
    setAssets(prev => [...newAssets, ...prev]);
  };

  const handleRecordingComplete = (audioBlob: Blob, duration: number) => {
    const newAsset: Asset = {
      id: crypto.randomUUID(),
      type: 'audio',
      name: `Voice Note ${new Date().toLocaleTimeString()}`,
      url: URL.createObjectURL(audioBlob),
      createdAt: new Date(),
      duration,
    };
    
    setAssets(prev => [newAsset, ...prev]);
  };

  const handleDeleteAsset = (id: string) => {
    setAssets(prev => prev.filter(asset => asset.id !== id));
  };

  const handleViewAsset = (asset: Asset) => {
    // For now, just open in a new tab
    window.open(asset.url, '_blank');
  };

  const imageCount = assets.filter(a => a.type === 'image').length;
  const audioCount = assets.filter(a => a.type === 'audio').length;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-luxury glow-primary">
              <FolderOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            Brand Vault
          </h1>
          <p className="text-muted-foreground">
            Upload and manage your brand assets in one place
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Grid3X3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{assets.length}</p>
                <p className="text-sm text-muted-foreground">Total Assets</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Image className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{imageCount}</p>
                <p className="text-sm text-muted-foreground">Images</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{audioCount}</p>
                <p className="text-sm text-muted-foreground">Voice Notes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <Tabs defaultValue="photos" className="space-y-6">
          <TabsList className="glass border border-border/50 p-1">
            <TabsTrigger value="photos" className="data-[state=active]:bg-primary/20">
              <Image className="w-4 h-4 mr-2" />
              Product Photos
            </TabsTrigger>
            <TabsTrigger value="voice" className="data-[state=active]:bg-primary/20">
              <Mic className="w-4 h-4 mr-2" />
              Voice Notes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="space-y-6">
            <FileUploadZone onFilesUploaded={handleFilesUploaded} />
          </TabsContent>

          <TabsContent value="voice" className="space-y-6">
            <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
          </TabsContent>
        </Tabs>

        {/* Asset Grid */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Assets</h2>
          <AssetGrid 
            assets={assets} 
            onDelete={handleDeleteAsset}
            onView={handleViewAsset}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BrandVault;
