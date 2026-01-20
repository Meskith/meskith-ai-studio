import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, Trash2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob, duration: number) => void;
}

const VoiceRecorder = ({ onRecordingComplete }: VoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setRecordedAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setDuration(0);
      
      intervalRef.current = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const playAudio = () => {
    if (recordedAudio && !isPlaying) {
      const audio = new Audio(URL.createObjectURL(recordedAudio));
      audioRef.current = audio;
      
      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
      audio.ontimeupdate = () => setCurrentTime(Math.floor(audio.currentTime));
      
      audio.play();
    } else if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const deleteRecording = () => {
    setRecordedAudio(null);
    setDuration(0);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const saveRecording = () => {
    if (recordedAudio) {
      onRecordingComplete(recordedAudio, duration);
      deleteRecording();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="glass rounded-2xl p-6 border border-border/50">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Mic className="w-5 h-5 text-primary" />
        Voice Notes
      </h3>

      {!recordedAudio ? (
        <div className="flex flex-col items-center gap-6 py-8">
          {/* Recording Visualizer */}
          <div className={cn(
            "relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300",
            isRecording 
              ? "bg-destructive/20 glow-primary" 
              : "bg-secondary/50"
          )}>
            {isRecording && (
              <>
                <div className="absolute inset-0 rounded-full bg-destructive/20 animate-ping" />
                <div className="absolute inset-4 rounded-full bg-destructive/30 animate-pulse" />
              </>
            )}
            
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={cn(
                "relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300",
                isRecording 
                  ? "bg-destructive hover:bg-destructive/90" 
                  : "bg-gradient-luxury hover:opacity-90"
              )}
            >
              {isRecording ? (
                <Square className="w-8 h-8 text-white fill-white" />
              ) : (
                <Mic className="w-8 h-8 text-primary-foreground" />
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-2xl font-mono font-bold mb-1">
              {formatTime(duration)}
            </p>
            <p className="text-sm text-muted-foreground">
              {isRecording ? 'Recording...' : 'Tap to start recording'}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Audio Player */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
            <button
              onClick={playAudio}
              className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-primary" />
              ) : (
                <Play className="w-5 h-5 text-primary ml-0.5" />
              )}
            </button>
            
            <div className="flex-1">
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-luxury transition-all duration-300"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={deleteRecording}
              className="flex-1 border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <Button
              onClick={saveRecording}
              className="flex-1 bg-gradient-luxury hover:opacity-90"
            >
              <Upload className="w-4 h-4 mr-2" />
              Save to Vault
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
