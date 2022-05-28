//imgs 
const sliderimg = Array.from( document.querySelectorAll( ".sliderContainer img" ) );
//console.table(sliderimg)
const slidecount = sliderimg.length;
//console.log(slidecount)
let currentslide = 0;
let prev = document.getElementById( "prev" );
let slidShow = document.getElementById( "slidshow" );
let stopSlide = document.getElementById( "stop" );
let next = document.getElementById( "next" );

prev.onclick = prevSlide;
slidShow.onclick = slideShowSlide;

next.onclick = nextSlide;





// prev func 
function prevSlide()
{
    if ( prev.classList.contains( 'disable' ) )
    {
        return false;
    }else{currentslide--
    check();
    }
        console.log( 'prev' );

}
                    // next func 
function nextSlide()
{
    if ( next.classList.contains( 'disable' ) )
    {
        return false;
    }else{currentslide++
    check();
    }
    console.log( 'next' );}
                // slide show func 
function slideShowSlide()
{
    currentslide ==0;
    let interval= setInterval( function ()
    {
        if ( next.classList.contains( 'disable' ) )
    {
        return false;
    }else{currentslide++
    check();
        }
                // stop slide func 
        stopSlide.onclick = stopSlider;
function stopSlider()
{
    clearInterval(interval)
    console.log( 'stop' );
}
    }, 1000 )
    
    console.log( 'slideShow' );
}

                // check finc
function check()
{
                     //check frist slide
    if ( currentslide == 0 )
    {
        prev.classList.add('disable')
    } else { prev.classList.remove( 'disable' ) }

                        //check last slide 
    if ( currentslide == slidecount-1 )
    { next.classList.add( 'disable' ) }
    else { next.classList.remove( 'disable' ) }
    
                      // remove active class
    function removeActive()
    {sliderimg.forEach( function ( img )
    { img.classList.remove( 'active' ) }
    )}
    removeActive( console.log( 'clear' ) )
    
                       //add active class
    sliderimg[ currentslide ].classList.add( 'active' );
    
}