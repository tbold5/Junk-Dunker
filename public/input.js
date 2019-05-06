

document.addEventListener('DOMContentLoaded', event => {
    $(".lead").click(function() {
        if ( $( '.mod' ).is( ":hidden" ) ) {
            $( ".mod" ).slideDown( "slow" );
        } else {
            $( ".mod" ).hide();
        }
    });
});