new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 3,
    peek: "100px",
    breakpoints : {
      600: {
        perView: 1
      }
    }
  }).mount()