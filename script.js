function gsaploco() {
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

gsaploco();

gsap.to("#page>video", {
  scrollTrigger:{
    trigger:'#overview.video',
    start: '2% top',
    end: 'bottom top',
    markers: true,
    scroller:'#main'
  },
  onStart: () => {
    document.querySelector('#overview>video').play()
  }
})

gsap.to ("#overview",{
  scrollTrigger:{
    trigger:'#overview',
    start: 'top top',
    end: 'bottom top',
    scroller:'#main',
    pin: true
  }
})

gsap.to ("#page-bottom",{
  scrollTrigger:{
    trigger:'#page-bottom',
    start: 'top 60%',
    end: 'bottom top',
    scroller:'#main',
    scrub: 0.5
  },
  opacity: 0
})
