sid = "ACdab4ff18fc5ce06a439eabeb5f486fe3"
auth_token = "6745d0e44e4953eddf167bf9c8c2b5f6"

var twilio = require('twilio')(sid,auth_token)



twilio.messages.create({
    from :"+17275946590",
    to:"+918008158841",
    body:"this is a message"
})
.then((res)=>{console.log('message has sent')})