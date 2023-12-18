function checkLogin(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('pw').value;
    if(email&&password&&email=="21520829@gm.uit.edu.vn"&&password=="123"){
        document.getElementById('login-noti').innerHTML='Login Successfully!!!!';
        setTimeout(function() {
            window.location.href = '/doan_blackpink/index.html';
        }, 3000);     
    }else{
        alert('Login Failed! Please try again');
    }
}
