"use client";

import { useState } from 'react';
import { AudioWaveform, Bell, Settings, User, Search, ChevronDown, BarChart3, Users, FileAudio, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const [audioFile, setAudioFile] = useState<File | null>(null);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <AudioWaveform className="w-8 h-8 text-primary" />
              <span className="text-xl font-semibold tracking-tight">AudioEnhance</span>
            </div>
            <div className="hidden md:flex space-x-1">
              <Button variant="ghost" className="text-sm font-medium">Features</Button>
              <Button variant="ghost" className="text-sm font-medium">Pricing</Button>
              <Button variant="ghost" className="text-sm font-medium">Documentation</Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Separator orientation="vertical" className="h-6 mx-2 hidden md:block" />
            <Button variant="secondary" className="hidden md:flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-gradient">Professional Audio</span>
            <br />
            Enhancement Studio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Transform your audio with AI-powered enhancement. Remove noise, improve clarity, and achieve studio-quality sound.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="button-glow bg-primary hover:bg-primary/90 text-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: FileAudio,
              title: "Noise Reduction",
              description: "Advanced AI algorithms to remove background noise and unwanted sounds."
            },
            {
              icon: BarChart3,
              title: "Audio Enhancement",
              description: "Improve clarity, balance frequencies, and enhance overall quality."
            },
            {
              icon: Users,
              title: "Voice Isolation",
              description: "Separate and enhance vocal tracks from background music and noise."
            }
          ].map((feature, i) => (
            <Card key={i} className="glass-card border-0 transition-all duration-300">
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">Enhance Your Audio</h2>
                <p className="text-muted-foreground text-lg">
                  Drop your audio file here or click to upload
                </p>
              </div>
              <div 
                className="border-2 border-dashed border-border rounded-xl p-10 text-center cursor-pointer hover:border-primary transition-all duration-300 relative group"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="audio/*"
                  onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4 group-hover:text-primary transition-colors" />
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors">
                  {audioFile ? audioFile.name : 'Supported formats: MP3, WAV, M4A'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decorative Glows */}
      <div className="glow top-0 left-1/4 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="glow top-1/3 right-1/4 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="glow bottom-0 left-1/3 animate-pulse" style={{ animationDuration: '6s' }} />
    </main>
  );
}