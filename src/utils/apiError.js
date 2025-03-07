class apiErrors extends Error{
constructor(
    message,
    statusCode,
    stack="",
    errors=[]
){
   super(message)
   this.statusCode=statusCode
    this.data=null
   this.message=message
this.errors=errors
this.sucess=false
if(stack){
    this.stack=stack
}else {
    Error.captureStackTrace(this,this.constructor)
}


}
}

export default apiErrors