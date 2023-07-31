import { useRef, useState } from "react";
import { useStream } from "../hooks/useStream";
import { useDevices } from "../hooks/useDevices";

export function Example4() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const MicrophoneSelectRef = useRef<HTMLSelectElement>(null);
  const CameraSelectRef = useRef<HTMLSelectElement>(null);

  const [audioSourceId, setAudioSourceId] = useState<string>();
  const [videoSourceId, setVideoSourceId] = useState<string>();

  const constraints = {
    audio: { deviceId: audioSourceId ? { exact: audioSourceId } : undefined },
    video: { deviceId: videoSourceId ? { exact: videoSourceId } : undefined },
  };

  useStream(videoRef, constraints);
  useDevices(MicrophoneSelectRef, "audioinput");
  useDevices(CameraSelectRef, "videoinput");

  return (
    <>
      <div className="select">
        <label htmlFor="audioSource">Audio source: </label>
        <select
          id="audioSource"
          ref={MicrophoneSelectRef}
          onChange={(e) => setAudioSourceId(e.target.value)}
        ></select>
      </div>

      <div className="select">
        <label htmlFor="videoSource">Video source: </label>
        <select
          id="videoSource"
          ref={CameraSelectRef}
          onChange={(e) => setVideoSourceId(e.target.value)}
        ></select>
      </div>

      <video ref={videoRef} autoPlay>
        Video stream not available
      </video>
    </>
  );
}
