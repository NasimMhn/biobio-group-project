// SETTINGS TO CAROUSEL
const config = {
  type: 'carousel',
  keyboard: true,
  gap: 20,
  perView: 5,
  breakpoints: {
    1140: {
      perView: 4,
      gap: 40,
    },
    950: {
      perView: 3,
      gap: 40,

    },
    780: {
      perView: 2,
      gap: 40,
      peek: {
        before: 10,
        after: 10
      }
    },
    580: {
      perView: 1,
      gap: 100,
      peek: {
        before: 50,
        after: 50
      }
    },
    360: {
      perView: 1,
      gap: 1,
      peek: {
        before: 10,
        after: 10
      }
    }
  },

}

// CREATING CAROUSELS WITH SETTINGS
const carousels = document.querySelectorAll(".glide");

let i = 0;
Object.values(carousels).map(carousel => {

  new Glide(carousel, config).mount()
  i = i + 1
});