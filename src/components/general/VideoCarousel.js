import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const currentVideo = videos[currentIndex];

  // Auto-advance to next video every 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setIsVideoLoaded(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentIndex, videos.length]);

  // Reset video on index change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[100px] overflow-hidden">
      {/* Video Container with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop={videos.length === 1}
            playsInline
            preload="metadata"
            onLoadedData={() => setIsVideoLoaded(true)}
            style={{ mixBlendMode: "overlay" }}
          >
            <source src={currentVideo.videoSrc} type="video/mp4" />
            {/* GIF fallback */}
            <img
              src={currentVideo.gifSrc}
              alt={currentVideo.alt}
              className="w-full h-full object-cover"
            />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* Left Gradient Overlay */}
      <div
        className="absolute inset-y-0 left-0 w-[13.25rem] pointer-events-none z-10"
        style={{
          backgroundImage: "linear-gradient(90deg, #0B0C10, transparent)",
        }}
      />

      {/* Right Gradient Overlay */}
      <div
        className="absolute inset-y-0 right-0 w-[13.25rem] pointer-events-none z-10"
        style={{
          backgroundImage: "linear-gradient(90deg, transparent, #0B0C10)",
        }}
      />

      {/* Screenshot + Tag Animation */}
      <AnimatePresence mode="wait">
        {isVideoLoaded && (
          <motion.div
            key={`screenshot-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="relative">
              {/* Pill Tag */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1">
                  <span className="text-white text-xs font-medium">
                    {currentVideo.tag}
                  </span>
                </div>
              </div>

              {/* Screenshot */}
              <img
                src={currentVideo.screenshot}
                alt={currentVideo.alt}
                className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Progress Indicators (optional) */}
      {videos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/40 w-4"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
