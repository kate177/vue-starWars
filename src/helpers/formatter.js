export class Formatter {
  static dataUrl(image) {
    if (image && !image.byteLength) {
      return image;
    }
    return (
      "data:image/jpeg;base64," +
      btoa(
        new Uint8Array(image).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      )
    );
  }
}
