export default function hasValuesFromArray(sett, arr) {
  return arr.every((elem) => sett.has(elem));
}
