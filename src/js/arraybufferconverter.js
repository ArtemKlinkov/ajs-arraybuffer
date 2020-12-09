export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let newString = '';

    for (let i = 0; i < bufferView.length; i += 1) {
      newString += String.fromCharCode(bufferView[i]);
    }
    return newString;
  }
}
