// Lambda function which generate random message   



const message=["hello world","New World","Nice to see you"];

export.handler=async(event,context)=>{
  let ms=message[Math.floor(Math.random().message.length)]
  return ms;


}
