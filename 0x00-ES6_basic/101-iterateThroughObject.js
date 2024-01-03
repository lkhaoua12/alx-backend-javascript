export default function iterateThroughObject(reportWithIterator) {
  const reportStr = [];
  for (const report of reportWithIterator) {
    reportStr.push(report);
  }
  return reportStr.join(' | ');
}
