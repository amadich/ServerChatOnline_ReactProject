# ServerChatOnline_ReactProject
Create Web Page Chat Online {server build} React Project 🍃
![image](https://user-images.githubusercontent.com/74735976/214866886-1df49c41-6559-4444-8e85-4578d8b0cc44.png)
# In React App : 
```js
// Add this Function in your Send Button 
const sendnow = () => {
   const myinput = document.getElementById("myinpuy");
   
   if (myinput.value) {
      socket.emit("mymsg", message);
      myinput.value = "";
      console.log("Your Message sended!");
   }

   const messages = document.getElementsByClassName("ds")[0];
   
   socket.on('mymsg', function(msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      //window.scrollTo(0, document.body.scrollHeight);
    });

  }

```
