import { useEffect } from "react";
import { Devices } from "../helpers/Devices";

export const useDevices = (
  selectRef: React.RefObject<HTMLSelectElement>,
  deviceKind: MediaDeviceKind
) => {
  useEffect(() => {
    selectRef.current && Devices.setDevices(selectRef.current, deviceKind);
  }, [selectRef, deviceKind]);
};
