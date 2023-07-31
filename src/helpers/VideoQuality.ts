export class VideoQuality {

  static qvga: MediaTrackConstraints = {
    width: { max: 320 },
    height: { max: 180 },
  };

  static vga: MediaTrackConstraints = {
    width: { max: 640 },
    height: { max: 360 },
  };

  static hd: MediaTrackConstraints = {
    width: { min: 1280 },
    height: { min: 720 },
  };

}
