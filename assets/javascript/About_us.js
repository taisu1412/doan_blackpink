        
        
    // slideToggle
    // $(document).ready(function(){
    //     $(".name-group").hover(function(){
    //         $(".name-members").slideDown("slow");
    //     });
    // });

    // chuyen tab(lisa)
    function changeTab(evt, cntName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cntName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();

    // tạo modal lisa
    // lấy modal
    var modal = document.querySelector("#myModal1");

    //lấy 
    var btn = document.querySelector("#lisa-Btn");

    var span = document.getElementsByClassName("close")[0];

 
    span.onclick = function(){
        modal.style.display = "none";
    }
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // tạo modal rose
    // lấy modal
    var modal = document.querySelector("#myModal2");
        
    //
    var btn = document.querySelector("#rose-Btn");
        
    var span = document.getElementsByClassName("close")[0];
        
    span.onclick = function(){
        modal.style.display = "none";
    }
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

                
    // tạo modal jenny
    // lấy modal
    var modal = document.querySelector("#myModal");
                
    //
    var btn = document.querySelector("#jenny-Btn");
                
    var span = document.getElementsByClassName("close")[0];
                
    span.onclick = function(){
        modal.style.display = "none";
    }
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
               
    // tạo modal jenny
    // lấy modal
    var modal = document.querySelector("#myModal");
                
    //
    var btn = document.querySelector("#jisoo-Btn");
                
    var span = document.getElementsByClassName("close")[0];
                
    span.onclick = function(){
        modal.style.display = "none";
    }
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // 
    // $(document).ready(function(){
    //     $(".txt-right").click(function(){
    //         $(".txt-right").animate({
    //             left: '200px',
    //             with: '500px'
    //         });
    //     });
    // });
