export function timeFormat(time) {
  const seconds = String(time/1000)
  const miliseconds = String(time%1000)
  return seconds.split(".")[0] + "s " + miliseconds.substring(0,9) + "ms"
}
