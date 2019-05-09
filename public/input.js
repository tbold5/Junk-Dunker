

document.addEventListener('DOMContentLoaded', event => {
    let isIn = false;
    $(".lead").click(function() {
        if ( $( '.mod' ).is( ":hidden" ) ) {
            // getScores();
            $( ".mod" ).slideDown( "slow" );
        } else {
            $( ".mod" ).slideUp('slow');
        };
        
    $(".set").click(function(){
        if ( $('.settings').is(":hidden")){
            $(".settings").slideDown("slow");
        } else {
            $(".settings").slideUp("slow");
        }
    });  
});
    var provider = new firebase.auth.GoogleAuthProvider();

    function googleSignin() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // var token = result.credential.accessToken;
            // var user = result.user;
            // console.log(token)
            // console.log(user)

            isIn = true;
            $('#login').text('Logout');
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)

        });





    }

    function googleSignOut(){
        firebase.auth().signOut().then(function() {
            console.log("We gooooot")
            $('#login').text('Login');
        }).catch(function(error) {
            console.log("We got fuuuuucked")
        });
    }

    $("#login").click( function () {
        let value = $('#login').text();
        if(value === 'Login') {
            googleSignin()
        } else {
            googleSignOut();

        }

    });

});