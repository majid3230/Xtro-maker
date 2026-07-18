import React, { useState } from "react";
import { useToast } from "../hooks/useToast.js";
import { apiService } from "../services/api.js";
import { Download, Loader2, Sparkles } from "lucide-react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [story, setStory] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const { addToast } = useToast();

  const handleGenerate = async () => {
    if (!story.trim()) {
      addToast("Please enter a story first", "error");
      return;
    }

    setIsGenerating(true);
    setVideoUrl(null);

    try {
      const result = await apiService.post("/generate", {
        story: story,
      });

      if (result?.videoUrl) {
        setVideoUrl(result.videoUrl);
        addToast("Video generated successfully!", "success");
      } else {
        throw new Error("Video URL not received from server");
      }

    } catch (error) {
      console.error("Generate Error:", error);
      addToast(
        error.message || "Failed to generate video",
        "error"
      );
    } finally {
      setIsGenerating(false);
    }
  };


  const handleDownload = () => {
    if (!videoUrl) return;

    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = `story-video-${Date.now()}.mp4`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast("Downloading video...", "success");
  };


  return (
    <div className={styles.container}>

      <div className={styles.generatorSection}>

        <div className={styles.header}>
          <h1 className={styles.title}>
            AI Story to Video
          </h1>

          <p className={styles.subtitle}>
            Type your story and let AI generate a cinematic video.
          </p>
        </div>


        <div className={styles.inputBox}>

          <textarea
            className={styles.textarea}
            placeholder="Type your story here..."
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
                  <Loader2
                    className={styles.spinIcon}
                    size={20}
                  />

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

            <h3 className={styles.resultTitle}>
              Your Generated Video
            </h3>


            <div className={styles.videoWrapper}>

              <video
                src={videoUrl}
                controls
                className={styles.video}
              />

            </div>


            <button
              className={styles.downloadBtn}
              onClick={handleDownload}
            >

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
