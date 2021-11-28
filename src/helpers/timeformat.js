// THis function is used to format the time in formar Xs Yms 
export function timeFormat(time) {
  if(typeof time !== 'string' && time >= 0) {
  const seconds = String(time/1000)
  const miliseconds = String(time%1000)
  return seconds.split(".")[0] + "s " + miliseconds.substring(0,9) + "ms"
  }else return "time should be a mumber and positive including 0"
}
