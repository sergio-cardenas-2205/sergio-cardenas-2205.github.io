'use strict'

$(document).ready(function(){


    $('body').on({ 'mousemove' : function( e ){
        console.clear()
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left' : (clientX - 16 ) + 'px',
            'top' : (clientY - 16 ) + 'px'
        })
    }})

    $('.a').on({
        'mouseover': function(){
            $('#cursor').addClass('mini')
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini')
        },
    })

})