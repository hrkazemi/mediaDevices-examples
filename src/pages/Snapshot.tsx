import { useRef } from "react";
import { useStream } from "../hooks/useStream";

export function Snapshot() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useStream(videoRef, { video: { deviceId: { exact: 'deviceId' } } });

  const takeSnap = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const context = canvasRef.current.getContext('2d');
    const videoEl = videoRef.current;
    const canvasEl = canvasRef.current;
    canvasEl.width = videoEl.clientWidth;
    canvasEl.height = videoEl.clientHeight;
    context?.drawImage(videoEl, 0, 0, videoEl.clientWidth, videoEl.clientHeight);
  };

  return (<>
    <video ref={videoRef} autoPlay>
      Video stream not available
    </video>
    <button onClick={takeSnap}>Take snapshot</button>
    <canvas ref={canvasRef}></canvas>
  </>);
}
