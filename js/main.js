
// var eyeLid = document.getElementById("eye")
var bg = document.querySelector(".hover")
function phase1(){
   let xs = []
   for (var i = 0; i <= 400; i++) {
      xs.push(i)
   }

   let t = 0

   function animate() {

      let points = xs.map(x => {

         let y = 69.5 + 45 * Math.sin((x + t) / 40)

         return [ x, y]
      })

      let path = "M" + points.map(p => {
         return p[0] + "," + p[1]
      }).join(" L")

      document.querySelector("#squiggle1-path").setAttribute("d", path)
      document.querySelector("#squiggle2-path").setAttribute("d", path)
      document.querySelector("#squiggle3-path").setAttribute("d", path)
      document.querySelector("#squiggle4-path").setAttribute("d", path)
      document.querySelector("#squiggle5-path").setAttribute("d", path)

      document.querySelector("#squiggle6-path").setAttribute("d", path)
      document.querySelector("#squiggle7-path").setAttribute("d", path)
      document.querySelector("#squiggle8-path").setAttribute("d", path)
      document.querySelector("#squiggle9-path").setAttribute("d", path)
      document.querySelector("#squiggle10-path").setAttribute("d", path)

      t += 10.5

      // What is requestAnimationFrame???
      requestAnimationFrame(animate)
   }

   animate()
}

function hoverState(){
   TweenMax.to("#retina", .4, {opacity: 1, ease: Power3.easeInOut})
   TweenMax.to("#eye-opened", .4, {morphSVG: "#eye-opened", ease: Power3.easeInOut})
   TweenMax.to("#clip-path", .4, {morphSVG: "#clip-path2", ease: Power3.easeInOut})
   TweenMax.to("#retina-circle2", .4, {scale: .6, transformOrigin: "center center", ease: Power3.easeInOut})
   TweenMax.to(".group1, .group2", .1, {opacity: 1, delay: .2})

   var tl = new TimelineMax({repeat: -1})
   tl.to(".retina-circle", .05, {x: -2})
   .to(".retina-circle", .05, {x: 2})
}

function hoverOut(){
   TweenMax.to("#retina", .4, { opacity: 0, ease: Power3.easeInOut })
   TweenMax.to("#eye-opened", .4, { morphSVG: "#eye-closed", ease: Power3.easeInOut })
   TweenMax.to("#clip-path", .4, { morphSVG: "#clip-path", ease: Power3.easeInOut })
   TweenMax.to("#retina-circle2", .4, {scale: 1})
   TweenMax.to(".group1, .group2", .1, { opacity: 0, delay: .2 })

   var tl = new TimelineMax()
   tl.to(".retina-circle", .5, {x: 0})
}
function addEventListener() {
   bg.addEventListener("mouseover", hoverState)
   bg.addEventListener("mouseleave", hoverOut)
}

function init(){
   TweenMax.set(".center, #eyeball, .hover", {xPercent: -50, yPercent: -50})
   TweenMax.set("#squiggle1", {x: 30, y: 110, rotation: -140})
   TweenMax.set("#squiggle2", { x: 100, y: 70, rotation: -120 })
   TweenMax.set("#squiggle3", { x: -200, y: 50, rotation: -90 })
   TweenMax.set("#squiggle4", { x: -100, y: 70, rotation: 120 })
   TweenMax.set("#squiggle5", { x: -30, y: 110, rotation: 140 })
   TweenMax.set("#squiggle6", { x: 30, y: -110, rotation: 140 })
   TweenMax.set("#squiggle7", { x: 100, y: -70, rotation: 120 })
   TweenMax.set("#squiggle8", { x: -200, y: -50, rotation: 90 })
   TweenMax.set("#squiggle9", { x: -100, y: -70, rotation: -120 })
   TweenMax.set("#squiggle10", { x: -30, y: -110, rotation: -140 })
   TweenMax.set("path", {x: 0})
   TweenMax.set("#eye-opened", {morphSVG: "#eye-closed"})
   TweenMax.set("#retina", {opacity: 0})
   TweenMax.set(".group1, .group2", {opacity: 0})
   addEventListener()
   phase1()
}


init()