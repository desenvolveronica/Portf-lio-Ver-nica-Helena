$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else {
            $('.navbar').removeClass("sticky")
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    })
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0})
        })

        var typed = new Typed(".typing", {
            strings:["Freelancer", "Web Design", "Desenvolvedora"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        })

        var typed = new Typed(".typing-2", {
            strings:["Freelancer", "Web Design", "Desenvolvedora"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        })



    $('.carousel').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        autoplayHoverPauser: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
})

let btnMobile = document.getElementById('btn-mobile')
let homeList = document.getElementById('homeList')
let aboutList = document.getElementById('aboutList')
let serviceList =  document.getElementById('serviceList')
let specialtyList =  document.getElementById('specialtyList')
let projectList =  document.getElementById('projectList')
let contactList =  document.getElementById('contactList')


function toggleMenu(){
    let menu = document.getElementById('max-width')
    menu.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)


function toggleHome(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
homeList.addEventListener('click', toggleHome)


function toggleAbout(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
aboutList.addEventListener('click', toggleAbout)


function toggleService(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
serviceList.addEventListener('click', toggleService)


function toggleSpecialty(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
specialtyList.addEventListener('click', toggleSpecialty)


function toggleProject(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
projectList.addEventListener('click', toggleProject)

function toggleContact(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
contactList.addEventListener('click', toggleContact)

