import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import FileUploadZone from '@/components/brand-vault/FileUploadZone';
import VoiceRecorder from '@/components/brand-vault/VoiceRecorder';
import AssetGrid, { Asset } from '@/components/brand-vault/AssetGrid';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FolderOpen, Image, Mic, Grid3X3, Upload, Plus } from 'lucide-react';

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
            <div className="p-2.5 rounded-2xl bg-gradient-luxury glow-primary">
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
          <Card className="glass-card group">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Grid3X3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight">{assets.length}</p>
                  <p className="text-sm text-muted-foreground">Total Assets</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card group">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Image className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight">{imageCount}</p>
                  <p className="text-sm text-muted-foreground">Images</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card group">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight">{audioCount}</p>
                  <p className="text-sm text-muted-foreground">Voice Notes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upload Section */}
        <Tabs defaultValue="photos" className="space-y-6">
          <TabsList className="glass-card border border-border/50 p-1.5 h-auto">
            <TabsTrigger value="photos" className="data-[state=active]:bg-primary/20 rounded-lg px-4 py-2.5">
              <Image className="w-4 h-4 mr-2" />
              Product Photos
            </TabsTrigger>
            <TabsTrigger value="voice" className="data-[state=active]:bg-primary/20 rounded-lg px-4 py-2.5">
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

        {/* Asset Grid / Empty State */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Assets</h2>
          
          {assets.length === 0 ? (
            <Card className="glass-card">
              <CardContent className="py-16">
                <div className="flex flex-col items-center text-center max-w-md mx-auto">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-luxury opacity-20 blur-2xl rounded-full" />
                    <div className="relative p-5 rounded-2xl bg-gradient-luxury/10 border border-primary/20">
                      <Upload className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Assets Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload your first product photo or record a voice note to get started building your brand vault.
                  </p>
                  <Button className="bg-gradient-luxury hover:opacity-90 glow-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Your First Asset
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <AssetGrid 
              assets={assets} 
              onDelete={handleDeleteAsset}
              onView={handleViewAsset}
            />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BrandVault;
