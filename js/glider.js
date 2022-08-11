new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 3,
    peek: "100px",
    breakpoints : {
      600: {
        startAt: 2,
        perView: 1,
      }
    }
  }).mount()