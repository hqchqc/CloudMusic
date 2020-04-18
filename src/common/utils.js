// 时间转换
export function setTime(mark){
  let minute = Math.floor(mark / 60);
  let second = (mark - minute * 60)
  
  return minute.toString().padStart(2,'0') + ':' + second.toString().padStart(2,'0')
}


