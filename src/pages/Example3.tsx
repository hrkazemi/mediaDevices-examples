import { useRef } from "react";
import { useStream } from "../hooks/useStream";

export function Example3() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useStream(videoRef, { video: true });

  return (
    <video ref={videoRef} autoPlay>
      Video stream not available
    </video>
  );
}
