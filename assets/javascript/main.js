const app = {
    listAlbum : [
        {
            id: 0,
            url: "./assets/img/album-img/album-1.jpg",
            title: "THE ALBUM",
            date: "10/2020"
        },
        {
            id: 1,
            url: "./assets/img/album-img/album-2.jpg",
            title: "BORN PINK",
            date: "09/2022"
        },
        {
            id: 2,
            url: "./assets/img/album-img/album-3.jpg",
            title: "KILL THIS LOVE",
            date: "04/2019"
        },
        {
            id: 3,
            url: "./assets/img/album-img/album-4.jpg",
            title: "DDU-DU DDU-DU",
            date: "08/2018"
        },
    ],
    currentItem: 0,
    handleEvent: {
        clickThumbnail: () => {
            let listItemThumb = document.querySelectorAll(".thumbnail .item")

            if(listItemThumb) {
                listItemThumb.forEach(item => {
                    item.addEventListener("click", (e) => {
                        const newIndex = e.currentTarget.getAttribute("data-index")
                        app.currentItem = newIndex
                        app.render()
                    })
                })

            }
        }
    },
    render: () => {
        let slider = document.querySelector(".slider");
        if(slider) {
            slider.innerHTML = `
            <div class="item" id="item 1">
                <img src="${app.listAlbum[app.currentItem].url}">
                <div class="content">
                    <div class="title">${app.listAlbum[app.currentItem].title}</div>
                    <div class="year">${app.listAlbum[app.currentItem].date}</div>
                    <a href="./buy_album.html" class="button">
                        <button>BUY</button>
                    </a>
                </div>
            </div>

            `
        }

          
        
    },
    start: () => {
        app.render()
        app.handleEvent.clickThumbnail()
    }
}
app.start();
// yeu cau 2
let currentIndex=0;
let totalSlides=4;
function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    app.currentItem=currentIndex;
    app.render();
}
function nextSlide() {
    showSlide(currentIndex +1);
}
setInterval(nextSlide,3000);

//modal show/hide
const modal=document.querySelector('.js-album-modal');
const modalContainer=document.querySelector('.js-modal-container');
function showAlbum(){
    modal.classList.add('open');
}
function hideAlbum(){
    modal.classList.remove('open');
}
modal.addEventListener("click",hideAlbum);
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
});


     