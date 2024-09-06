document.querySelector('.hamburger').addEventListener('click', function() {
    const nav = document.querySelector('.navigation');
    const icon = this.querySelector('i');
    nav.classList.toggle('hidden');
    if (nav.classList.contains('hidden')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
});

const toggleButton = document.getElementById("toggleButton");
const inputContainer = document.getElementById("inputContainer");
const closeButton = document.getElementById("closeButton");
const searchIcon = document.getElementById("searchIcon");

toggleButton.addEventListener("click", function() {
  searchIcon.classList.add("hidden");
  inputContainer.classList.remove("hidden");
});

closeButton.addEventListener("click", function() {
  inputContainer.classList.add("hidden");  
  searchIcon.classList.remove("hidden");  
});

  

// for brand logo slider

$('.brand-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  // for rating-slider slider

$('.rating-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});



// for customise to user's section slider

$('.customise-slides').slick({
  dots: false,
  arrows:true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
});

