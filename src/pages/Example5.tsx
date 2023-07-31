import { useEffect, useRef } from "react";

export function Example5() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const captureDisplay = async () => {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
        });

        videoRef.current!.srcObject = stream;
      } catch (error) {
        console.log(error);
      }
    };
    if (videoRef.current) captureDisplay();
  }, []);

  return (
    <video ref={videoRef} autoPlay width={500} >
      Video stream not available
    </video>
  );
}
