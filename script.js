//JS
//center .chick element around its origin
TweenLite.set(".bird", { xPercent: -50, yPercent: -50 }); 

//handles all vendor prefixes of translateX(-50%) translateY(-50%)

//now we can animate .chicks's x/y such that its center is -200px,50px from the origin
TweenLite.to(".bird", 1, { x: -50, y: 50 });

//blinking
var eyeTl = new TimelineMax({
  repeat:1, yoyo:true, onComplete:repeat
});

var blink = TweenMax.to("#iris", 0.1, {
  
  scaleY: 0,
  transformOrigin: "center bottom"
});
eyeTl.add(blink);

function repeat(){
                        //delay,               callback,     params, scope
  TweenLite.delayedCall((Math.random() + 0.8), eyeTl.restart, [], eyeTl)
}


//wing flapping and eye animation on repeat
function moving() {
  var tl = new TimelineMax();
  tl.add("start");
  tl
    .to(".wing", 0.1, {
      rotation: -40,
      transformOrigin: "center bottom",
      ease: ElasticIn.ease,
      yoyo: true,
      yoyoEase: true,
      repeat: -1
    },"start")
      .to(".wing2", 0.15, {
      rotation: -40,
      transformOrigin: "center bottom",
      ease: ElasticIn.ease,
      yoyo: true,
      yoyoEase: true,
      repeat: -1
    }, "start")
        .to(".wing3", 0.1, {
      rotation: 40,
      transformOrigin: "right bottom",
      ease: ElasticIn.ease,
      yoyo: true,
      yoyoEase: true,
      repeat: -1
    }, "start")
      .to(".wing4", 0.15, {
      rotation: 40,
      transformOrigin: "right bottom",
      ease: ElasticIn.ease,
      yoyo: true,
      yoyoEase: true,
      repeat: -1
    }, "start")
    .to(
      "#iris",
      1,
      {
        x: 2,
        y: 1,
        yoyo: true,
        repeat: -1
      },
      "start"
    );
  return tl;
}
//timeline for repeating animations
var repeat = new TimelineMax();
repeat.add(moving());


//bird flys in
function flyIn() {
  var tl = new TimelineMax();
  tl.to(".bird", .5, {
    autoAlpha: 1,
    rotation: -5,
    x: 50,
    ease: Back.easeOut.config(1.5)
  })

  return tl;
}


// loading hover animation 
function hover() {
  var tl = new TimelineMax();
  tl.timeScale(.5);
  tl
    //bird flys up
    .to(".bird", 0.2, {
      rotation: 50,
      y: -40,
     ease: Back. easeOut.config( 1)
    })
    .to(".bird", 0.2, {
      rotation: -10,
      y: -80,
     ease: Back. easeOut.config( 1)
    })
  .to(".bird", 0.2, {
      rotation: 8,
      y: -100,
      x: 60,
      ease: Back. easeOut.config( 1)
    })
    .to(".bird", 0.2, {
      rotation: 50,
      y: -50,
      x: 70,
      ease: Sine. easeOut,
      yoyo: true,
      repeat: 1,
      yoyoEase:true,
      repeatDelay: 0
    })
   

  //bird flys back
  .to(".bird", 0.2, {
    rotation: 0,
    y: -35,
    x: 50,
    ease: Sine. easeOut,
    yoyo: true,
    repeat: 1,
    yoyoEase:true
  })
  .to(".bird", 0.2, {
    rotation: -10,
    y: -35,
    x: 30,
    ease: Sine. easeOut,
    yoyo: true,
    repeat: 1,
    yoyoEase:true
  })

    .to(".bird", 0.2, { 
    rotation: 0, 
    x: 0, 
    y: -10, 
    ease: Sine. easeOut
  })

    //bird flys down
    .to(".bird", 0.2, {
      x: 0,
      ease: Sine. easeOut
    })
    .to(".bird", 0.2, {
      rotation: 60,
      y: 40,
      x: 20,
      ease: Sine. easeOut
    })
    .to(".bird", 0.2, {
      rotation: 5,
      y: 60,
      x: 40,
      ease: Sine. easeOut
    })
    //bird flys back
    .to(".bird", 0.2, { 
      rotation: 5, 
      x: -10, 
      y: -5, 
      ease: Sine. easeOut
    })
    .to(".bird", 0.2, {
      rotation: 20,
      x: -20,
      y: 5,
      ease: Sine. easeOut
    })
  //flys up
     .to(".bird", 0.2, {
      rotation: 8,
      y: -30,
      x: 20,
      ease: Sine. easeOut
    })
    .to(".bird", 0.2, {
      rotation: 8,
      y: -50,
      x: 30,
      ease: Sine. easeOut
    })
    //flys down
    .to(".bird", 0.3, { 
      rotation: -20, 
      y: -40,
      x: 10,
      ease: Sine. easeOut
    })
    .to(".bird", 0.3, {
      rotation: -10,
      y: 30,
      x: 50,
      ease: Sine. easeOut
    })

  return tl;
}
//bird flys out
function flyOut() {
  var tl = new TimelineMax();
  tl.to(".bird", .5, { rotation: -20, y:-100, x: 620, ease: Power4.easeOut });

  return tl;
}



//master timeline
var master = new TimelineMax({repeat: -1, repeatDelay: .5});
master.timeScale(1);
master.add(flyIn())
 .add(hover())
 .add(flyOut())