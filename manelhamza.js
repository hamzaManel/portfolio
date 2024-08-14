$(document).ready(function(){


    ////////////////////////////////: toggles button //////////////////////////
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    })



////////////////////////////////:::: scrolling to top ///////////////////////////////////////////


    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500 , 'linear');
        });

///////////////////////////:::::: download button /////////////////////////////////////////////////

        const downloadButton = document.querySelector('.btn.download');

        downloadButton.addEventListener('click', function() {
            this.classList.add('active');
              // Show checkmark after progress animation completes
        setTimeout(() => {
            const checkmark = this.querySelector('.checkmark');
            checkmark.style.width = '50px';
            checkmark.style.height = '50px';
        }, 4000); // Adjust the delay to match the progress animation duration

        // // Optionally, remove the active class after a delay
        // setTimeout(() => {
        //     this.classList.remove('active');
        //     const checkmark = this.querySelector('.checkmark');
        //     checkmark.style.width = '0';
        //     checkmark.style.height = '0';
        // }, 7000); 
           
        });


////////////////////////////////////:::: services //////////////////////////////////////////////

        const services = document.querySelectorAll('.service');

        services.forEach(service => {
            service.addEventListener('click', () => {
                const description = service.querySelector('.description');
                description.style.display = description.style.display === 'none' ? 'block' : 'none';
            });
        
        });


        window.onload = function() {
            document.querySelector(".container").classList.add("show"); // Add class after load
          };


//////////////////////////// voir plus btn ///////////////////////////////////////////////////////
          const voirPlusBtn = document.getElementById('voirPlusBtn');
          const paragraphContainer = document.getElementById('paragraphContainer');
      
          voirPlusBtn.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default action of the link
              if (paragraphContainer.classList.contains('hidden')) {
                  paragraphContainer.classList.remove('hidden');
              } else {
                  paragraphContainer.classList.add('hidden');
              }
          });



          const voirPlusBtn2 = document.getElementById('voirPlusBtn2');
          const paragraphContainer2 = document.getElementById('paragraphContainer2');
          function adjustFontSize() {
            const screenWidth = window.innerWidth;
            const paragraphElements = document.querySelectorAll('.paragraphContainer2 p');
          
            if (screenWidth <= 400) {
              paragraphElements.forEach(p => p.style.fontSize = "12px");
            } else if (screenWidth <= 768) {
              paragraphElements.forEach(p => p.style.fontSize = "14px");
            } else {
              // Default font size (no change needed)
            }
          }
          
          // Call adjustFontSize on initial load and window resize
          adjustFontSize();
          window.addEventListener('resize', adjustFontSize);
          voirPlusBtn2.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default action of the link
              if (paragraphContainer2.classList.contains('hidden2')) {
                  paragraphContainer2.classList.remove('hidden2');
              } else {
                  paragraphContainer2.classList.add('hidden2');
              }
          });
      



// ///////////////////////// about (about view )   //////////////////////////////////////////)
          const aboutSection = document.querySelector('.about');

          const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      aboutSection.classList.add('in-view');
                  } else {
                      aboutSection.classList.remove('in-view');
                  }
              });
          });
          observer.observe(aboutSection);





          const categoryDivs = document.querySelectorAll('.popular-categories');

categoryDivs.forEach((div, index) => {
  setTimeout(() => {
    div.classList.add('show');
  }, index * 200); // Adjust delay based on preference (0.2 seconds per div)
});



// num counter /////////////////////////////////////////////////////////////////////////////////


let valuesDisplays=document.querySelectorAll('.num');
let interval = 2000;
valuesDisplays.forEach((valuesDisplay)=> {
    let startValue = 0;
    let endValue = parseInt(valuesDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
    startValue +=1;
    valuesDisplay.textContent = startValue;
    if(startValue == endValue) {
        clearInterval(counter)
    }
},duration)
})






//////////////////////////////////////// contact fform /////////////////////////////////////
const form = document.querySelector('form');
statusTxt= document.querySelector(".btn-area span");
form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color="#000"
    statusTxt.style.display = "block";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
     if ( xhr.status == 200 && xhr.readyState == 4){
        let response = xhr.response;
        statusTxt.innerText = response;  
        console.log("susccess")
        if(response.indexOf("Echec de l'envoi !") != -1 || response.indexOf("entrez une adress email valid") != -1  || response.indexOf("Tous les champs sont obligatoire!") != -1 ) {
            statusTxt.style.color = "red";
            console.log("Error"); 
          } else {
            statusTxt.style.color = "green";
            form.reset();
            setTimeout(() => {
              statusTxt.style.display = "none";
            }, 3000);  
        }
     }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}









});

