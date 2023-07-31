import { useEffect, useRef } from "react";

export function Example1() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const streamVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          // audio: true,
        });

        videoRef.current!.srcObject = stream;
      } catch (error) {
        console.log(error);
      }
    };
    if (videoRef.current) streamVideo();
  }, []);

  return (
    <video ref={videoRef} autoPlay>
      Video stream not available
    </video>
  );
}
