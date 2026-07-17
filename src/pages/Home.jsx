import React, { useState } from 'react';
import { useToast } from "../hooks/useToast.js";
import { Download, Loader2, Sparkles } from 'lucide-react';
import styles from "../styles/Home.module.css";

const Home = () => {
  const [story, setStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const { addToast } = useToast();

  const handleGenerate = () => {
    if (!story.trim()) {
      addToast('Please enter a story first', 'error');
      return;
    }

    setIsGenerating(true);
    setVideoUrl(null);
    setStory('');

    // Simulate API call to generate video
    setTimeout(() => {
      setIsGenerating(false);
      // Use a placeholder video url to simulate result
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); 
      addToast('Video generated successfully!', 'success');
    }, 3000);
  };

  const handleDownload = () => {
    if (!videoUrl) return;
    
    // Simulate download
    const element = document.createElement('a');
    element.href = videoUrl;
    element.download = `story-video-${Date.now()}.mp4`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    addToast('Downloading video...', 'success');
  };

  return (
    <div className={styles.container}>
      <div className={styles.generatorSection}>
        <div className={styles.header}>
          <h1 className={styles.title}>AI Story to Video</h1>
          <p className={styles.subtitle}>Type your story below and let our AI generate a cinematic video for you.</p>
        </div>

        <div className={styles.inputBox}>
          <textarea
            className={styles.textarea}
            placeholder="Type your story here... (e.g., A cyberpunk city at night with neon lights...)"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            disabled={isGenerating}
            rows={5}
          />
          <div className={styles.actions}>
            <button 
              className={styles.generateBtn}
              onClick={handleGenerate}
              disabled={isGenerating || !story.trim()}
            >
              {isGenerating ? (
                <>
                  <Loader2 className={styles.spinIcon} size={20} />
                  Generating Video...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate Video
                </>
              )}
            </button>
          </div>
        </div>

        {videoUrl && (
          <div className={styles.resultSection}>
            <h3 className={styles.resultTitle}>Your Generated Video</h3>
            <div className={styles.videoWrapper}>
              <video 
                src={videoUrl} 
                controls 
                className={styles.video}
                poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
            <button className={styles.downloadBtn} onClick={handleDownload}>
              <Download size={20} />
              Download Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
