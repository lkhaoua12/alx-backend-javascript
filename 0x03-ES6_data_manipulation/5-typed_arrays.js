export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const arrayBuff = new ArrayBuffer(length);
  const arrayView = new Int8Array(arrayBuff);
  arrayView.fill(value, position, position + 1);
  return new DataView(arrayBuff);
}
