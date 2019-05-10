
// Listens to event change
document.addEventListener('DOMContentLoaded', event => {
// userId is the reference that we talked about, use it to create an association between auth and database
    let userId;
//assign false to boolean variable
    let isIn = false;
// slides 
    $(".lead").click(function() {
        if ( $( '.mod' ).is( ":hidden" ) ) {
            //getScores();
            $( ".mod" ).slideDown( "slow" );
        } else {
            $( ".mod" ).slideUp('slow');
        };
    });
    $(".lead-exit").click(function () {
        $( ".mod" ).slideUp('slow');
    });
    $(".set").click(function(){
        if ( $('.settings').is(":hidden")){
            $(".settings").slideDown("slow");
        }
    });
    $(".retButtons").click(function(){
        $(".settings").slideUp("fast");
    }); 

    var provider = new firebase.auth.GoogleAuthProvider();
    function googleSignin() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            userId = result.user.uid;
            console.log(token)
            console.log(userId)
            verifyUserInDatabase(userId);
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

    //Verfies user in database
    function verifyUserInDatabase(currentUser){
            const firestore = firebase.firestore();
            const userName = firestore.collection('Users').doc('Document ID');
            //firestore.collection("Users").get().then(function (querySnapshot) {
                //querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                
            
            });
        
            console.log(userName);
            docRef.get().then(function(doc) {
                console.log(doc.data);
            })
            
            // const query = userName.where('Users', '==', currentUser);
            // // console.log(query);
            //     if(query == "" || query == null){
            //         validateLogin();
            //  }
        })
    // Creates login popup for new user
    function validateLogin() {
        console.log('hey')
            var popup = document.getElementById("popup");
                popup.classList.toggle("show");
                document.getElementById("errorMsg").innerHTML = "User name must be filled in";
                return false;
    }
        
    // Will add  a function to check if they have an user name
    //if the user doesn't have, create a pop up and ask for a user id.

});