import { useRef } from "react";
import { VideoQuality } from "../helpers/VideoQuality";
import { useStream } from "../hooks/useStream";

export function ExampleQ() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useStream(videoRef, {
    video: {
      ...VideoQuality.qvga,
      deviceId: { exact: 'deviceId' }
    }
  });

  return (
    <video ref={videoRef} autoPlay>
      Video stream not available
    </video>
  );
}
