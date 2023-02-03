
function ChatBox(){
  const myLandbot = new Landbot.Fullpage({
    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1476236-5K76BLAHRFAXGG04/index.json',
  });
    return(
        <div className="chat-box">
            <myLandbot />     
              
      </div>    )
}
    <script SameSite="None; Secure" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"></script>
    // <script>
    //   var myLandbot = new Landbot.Fullpage({
    //     configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1476236-5K76BLAHRFAXGG04/index.json',
    //   });
    // </script>
export default ChatBox