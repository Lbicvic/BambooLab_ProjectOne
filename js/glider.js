new Glide('.glide', {
    type: 'carousel',
    startAt: 2,
    focusAt: 'center',
    perView: 3,
    gap: 24,
    peek: "100px",
    breakpoints : {
      600: {
        perView: 1
      },
      1024:{
        perView: 2,
      }
    }
  }).mount()