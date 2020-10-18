console.log("start")
function info(email,password,callBack){
    setTimeout(()=>{
        callBack ({useremail:email})
    },5000)
    
}



let newUser = info("ahmed.usama25@gmail.com",12345,(newUser)=>{
    console.log(newUser)
})

console.log("finish")