export class Devices {
  static devices: MediaDeviceInfo[] = [];
  static inprogress: Promise<MediaDeviceInfo[]> | undefined = undefined;

  static getDevices = async () => {
    if (Devices.devices.length !== 0) return Devices.devices;

    if (Devices.inprogress) {
      await Devices.inprogress;
    } else {
      try {
        Devices.inprogress = navigator.mediaDevices.enumerateDevices();
        Devices.devices = await Devices.inprogress;
        Devices.inprogress = undefined;
      } catch (error) {
        console.log("getDevices", error);
      }
    }

    return Devices.devices;
  };

  static setDevices = async (
    selectEl: HTMLSelectElement,
    deviceKind: MediaDeviceKind
  ) => {
    const deviceInfos = await Devices.getDevices();

    selectEl.options.length = 0;

    for (const deviceInfo of deviceInfos) {
      if (deviceInfo.kind !== deviceKind) continue;

      let optionLabel = "";
      if (deviceInfo.kind === "audioinput") {
        optionLabel = `Microphone ${selectEl.length + 1}`;
      } else if (deviceInfo.kind === "videoinput") {
        optionLabel = `Camera ${selectEl.length + 1}`;
      }

      const option = document.createElement("option");
      option.value = deviceInfo.deviceId;
      option.text = deviceInfo.label || optionLabel;
      selectEl.appendChild(option);
    }
  };
}
