// $(document).ready(function(){
//     $(window).scroll(function () {
//         if(this.scrollY >= 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     })
//    
// })


// $('.menu-btn').click(function () {
//     console.log('clicicicicici');
//     $('.navbar .menu').toggleClass('active');
//     $('.menu-btn i').toggleClass('active');
// })
const addScrollEvent = () => 
{
    const handleScroll = (e) => {
        const navbar = document.querySelector(".navbar")
        const { scrollY } = window

        if (scrollY >= 40 ) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky")

        }
    }

    document.addEventListener('scroll', handleScroll)
}

const addMenuBtnClickListener = () => 
{
    const menuBtn = document.querySelector("div.menu-btn")

    console.log({menuBtn});

    menuBtn.addEventListener('click', () => {
        console.log("clicked ");
        document.querySelector(".navbar .menu").classList.toggle('active')
        document.querySelector(".menu-btn i").classList.toggle('active')

    })
}




addScrollEvent()
addMenuBtnClickListener()





// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2500);    
// }
