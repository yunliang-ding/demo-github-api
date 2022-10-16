/** 定时器 */

const useCountDownTimer = (value) => {
  const [number, setNumner] = React.useState(value);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if(number === 0){
        return clearInterval(timer);
      }
      setNumner(number - 1);
      return () => {
        clearInterval(timer);
      }
    }, 1000)
  }, [number]);
  return [
    number
  ]
}

export default () => {
  const [number] = useCountDownTimer(3);
  return <div>
    {number}
  </div>
}