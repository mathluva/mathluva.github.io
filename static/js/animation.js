// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2500,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 2500
    });

  var animateLeft = anime({
    targets: '.square',
    left: '50%',
    autoplay: false
  });
  
  
  var animateBackground = anime({
    targets: '.square',
    backgroundColor: '#f96',
    autoplay: false
  });
  
  var animateRadius = anime({
    targets: '.square',
    borderRadius: '50%',
    autoplay: false
  });
  
  var animateAll = anime({
    targets: '.square',
    backgroundColor: '#f96',
    borderRadius: '50%',
    left: '50%',
    autoplay: false
  });
  
  document.querySelector('.play-left').onclick = animateLeft.restart;
  
  document.querySelector('.play-background').onclick = animateBackground.restart;
  
  document.querySelector('.play-radius').onclick = animateRadius.restart;
  
  document.querySelector('.play-all').onclick = animateAll.restart;
  
  