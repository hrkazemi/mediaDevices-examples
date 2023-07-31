export class Stream {
  static stream: MediaStream | undefined;
  static inprogress: Promise<MediaDeviceInfo[]> | undefined = undefined;

  static getStream = async (constraints: MediaStreamConstraints) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      return stream;
    } catch (error) {
      console.log("getStream:", error);
    }
  };

  static setStream = async (videoEl: HTMLVideoElement,
    constraints: MediaStreamConstraints) => {

    if (Stream.stream) {
      Stream.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    Stream.stream = await Stream.getStream(constraints);

    if (Stream.stream)
      videoEl.srcObject = Stream.stream;
  };

}
