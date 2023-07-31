export async function startCapture(
  displayMediaOptions?: DisplayMediaStreamOptions
) {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
    return captureStream;
  } catch (error) {
    console.error('startCapture', error);
  }
}
