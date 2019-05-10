

document.addEventListener('DOMContentLoaded', event => {
    // userId is the reference that we talked about, use it to create an association between auth and database

    // getScores();
    let userName = [];
    var db = firebase.firestore();

    let userId;
    let isIn = false;
    clicked = true;
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
        };
    });
    $(".retButton").click(function(){
        $(".settings").slideUp("fast");
    });
    $(".helpButton").click(function(){
        if( $('.help').is(":hidden")){
            $(".help").slideDown("slow");
        };
    });
    $(".helpReturn").click(function(){
        $(".help").slideUp("fast");
    });
    var provider = new firebase.auth.GoogleAuthProvider();

     async function googleSignin() {
        firebase.auth().signInWithPopup(provider).then( async function(result) {
            var token = result.credential.accessToken;
            userId = result.user.uid;
            console.log(token);
            console.log(userId);

            isIn = true;
            $('#login').text('Logout');
            userName = await getAllUserData();
            await console.log(userName);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code);
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

    let audioStarted = false;
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound({src:"./engine/audio/music.mp3", id:"sound"});
    function handleLoadComplete() {
        var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.5})
        createjs.Sound.play("sound", props);
    }
    document.querySelector('body').addEventListener('click', function(){
        if(!audioStarted){
            handleLoadComplete();
            audioStarted = true;
        }

    })

    // Will add  a function to check if they have an user name
    //if the user doesn't have, create a pop up and ask for a user id.

    async function getAllUserData() {
        let bigData = [];
        db.collection("Users").get().then(async function (querySnapshot) {
            console.log(querySnapshot);
            let i = 0;
            await querySnapshot.forEach(async function (doc) {

                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                bigData[i++] = await doc.data();
            });
        });
        return bigData;
    }
    // async function checkTheUser(){
    //     userName = await getDataTest();
    // }
    //
    // async function doSomething(){
    //     console.log(userName);
    // }

});