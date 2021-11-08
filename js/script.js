
    AOS.init();

    // ========navbar toggle start============
    const toggleOn = document.querySelector(".fa-bars");
    const toggleClose = document.querySelector(".fa-times");
    const navbar = document.querySelector(".navbar");
    const scrollTopBtn = document.querySelector(".fa-arrow-circle-up");


    toggleOn.addEventListener('click', function(){
        toggleClose.classList.remove("hide");
        toggleClose.classList.add("show");
        toggleOn.classList.remove("show");
        toggleOn.classList.add("hide");
        navbar.classList.add("active");
        navbar.style.background = "#4c4e55";
    });

    toggleClose.addEventListener('click', function(){
        toggleClose.classList.remove("show");
        toggleClose.classList.add("hide");
        toggleOn.classList.remove("hide");
        toggleOn.classList.add("show");
        navbar.classList.remove("active")
    });

    // ========navbar toggle start============


    //============navbar link active========
    const activeNav = document.querySelector(".navbar-nav").children;

    for(let i=0; i<activeNav.length; i++){
        activeNav[i].addEventListener('click', function(){
            for(let j=0; j<activeNav.length; j++){
                activeNav[j].classList.remove("active");  //remove current active class
            }
            this.classList.add("active");
        });
    }



    //=============== navbar fixed on top=============
    window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navbar.style.background = "#27272b";
            scrollTopBtn.style.display = "block";
        }
        else{
            navbar.style.background = "transparent";
            scrollTopBtn.style.display = "none";
        }
    }


    //================progress bar animation start===========
    const progressContainer = document.querySelector(".skills-education");
    const progressbar = document.querySelector(".progress-bar");


    progressContainer.addEventListener('mouseover', function(){
        progressbar.classList.add("width");
    });


    //================progress bar animation end===========



    //================scroll back to top button===========
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Oper
        }



    //============ portfolio section start==========

    const isoBtn = document.querySelector('.isotope-btn').children;
    const items = document.querySelector('.dev-portfolio').children;


    for(let i=0; i<isoBtn.length; i++){
        isoBtn[i].addEventListener('click', function(){
            for(let j=0; j<isoBtn.length; j++){
                isoBtn[j].classList.remove("active");  //remove current active class
            }
            this.classList.add("active");   //add class by clicked
            const target = this.getAttribute("data-target") //button selection

            for(let k=0; k<items.length; k++){
                items[k].style.display = "none";

                if(target == items[k].getAttribute("data-id")){
                    items[k].style.display = "flex";
                }

                if(target == "all"){
                    items[k].style.display = "flex";
                }
            }
        })
    }

    // lightbox click and image become large
    const closeLightbox = document.querySelector(".close-lightbox");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = lightbox.querySelector("img");


    closeLightbox.addEventListener('click', function(){     //close lightbox by clicking close button
        lightbox.classList.add("hide");
        lightbox.classList.add("show");
    });
    

    lightbox.addEventListener("click", function(e){ //if you want to close lightbox by clicking anywhere outside image
		if(e.target!=lightboxImage){
			lightbox.classList.add("hide");
			lightbox.classList.remove("show");
		}
	});


    // now open lightbox when click to plus icon
    const itemImg = document.querySelectorAll(".portfolio");

    
    itemImg.forEach(function(element){
        element.querySelector(".fa-plus").addEventListener('click', function(){
            lightbox.classList.remove("hide");
            lightbox.classList.add("show");
            lightboxImage.src=element.querySelector("img").getAttribute("src")

        })
    
    });

    // ===========portfolio section end============


