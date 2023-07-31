import { useEffect } from "react";
import { Stream } from "../helpers/Stream";

export const useStream = (
  videoRef: React.RefObject<HTMLVideoElement>,
  constraints: MediaStreamConstraints
) => {
  useEffect(() => {
    videoRef.current && Stream.setStream(videoRef.current, constraints);
  }, [videoRef, constraints]);
};
