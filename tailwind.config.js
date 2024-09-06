/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily:{
        custom:["Inter", "sans-serif"]
      },
      colors:{
        "primary":"#013369",
        "textColor":"#CBE5FF",
        "textColortwo":"#00509E",
        "textColorThree": "#01438A",
        "btnColor":"#002B64",
        "bgTwo":"#E8F0F8"
      },
      backgroundImage: {
        'location-icon': "url('../images/location-icon.svg')",
        'phone-icon': "url('../images/phone-icon.svg')",
        'cart-icon': "url('../images/cart.svg')",
        'search-icon': "url('../images/search-icon.svg')",
        'listing-icon': "url('../images/detail-listing.png')",
        'after-icon':"url('../images/after-arrow.png')",
        'afterWhite-icon':"url('../images/after-white-arrow.png')",
        'afterGrey-icon':"url('../images/after-grey-arrow.png')",
        'afterBlue-icon':"url('../images/after-blue-arrow.png')",
        'map-icon':"url('../images/map-icon.png')",
        'phone-footer-icon':"url('../images/phone-footer.png')",
      },
      screens: {
        'tablet': '768px',
        'laptop': '992px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}

