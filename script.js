
var btn = document.getElementById(‘btn');
btn.addEventListener(‘click', function(e) {
 e.preventDefaul()
 var mame = document .getElementById( ‘name’ ).value;
var mame = document .getElementById( ‘email’ ).value;
var mame = document .getElementById( ‘major’ ).value;
var mame = document .getElementById( ‘message’ ).value;
 

var body = ‘name: ' +name + ‘<br/> email:' <br/> subject’ + subject  +'<br/>message' + message;





Email.send({
    Host : "smtp.gmail.com",
    Username : "thespycia2015@gmail.com,
    Password : "agwqvfmubupqfqhk",
    To : 'thespycia2015@gmail.com',
    From : "you@isp.com",
    Subject : "This is the major",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
