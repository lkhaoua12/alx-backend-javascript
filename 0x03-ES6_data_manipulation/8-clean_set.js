export default function cleanSet(sett, startWith) {
  if (!sett || !startWith || !(sett instanceof Set) || typeof startWith !== 'string') {
    return '';
  }
  return Array.from(sett)
    .filter((elem) => String(elem).startsWith(startWith))
    .map((elem) => String(elem).replace(startWith, ''))
    .join('-');
}
