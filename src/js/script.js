console.log('working')

$(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-link');
    const movementSpeed = 3;
    
    const hoverLink = (event) => {
        let targetNode = event.target;

        const { left, top, width, height } = targetNode.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        let x = (centerX - event.pageX) / movementSpeed;
        let y = (centerY - event.pageY) / movementSpeed;
    
        targetNode.style.setProperty('--x', `${x}px`);
        targetNode.style.setProperty('--y', `${y}px`);
    }

    links.forEach(link => {
        link.addEventListener('mousemove', hoverLink);
    });
});
