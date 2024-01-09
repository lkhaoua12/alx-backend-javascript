export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position can\'t be greater than length');
  }

  const arrayBuff = new ArrayBuffer(length);
  const arrayView = new Int8Array(arrayBuff);
  arrayView.fill(value, position, position + 1);
  return new DataView(arrayBuff);
}
