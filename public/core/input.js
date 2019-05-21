document.addEventListener('DOMContentLoaded', event => {
    // userId is the reference that we talked about, use it to create an association between auth and database
    // getScores();

    let hasUserName;
    let userData;

    // Declares array named userName
    let userName = [];
    //Creates database object from firebase

    var db = firebase.firestore();
    // Declares variable userId
    let userId;
    //Declares variable isIn
    let isIn = false;
    // Assigns true to clicked variable
    clicked = true;
    //Clicking lead button implements function
    $(".lead").click(function() {
        // Determines if  mod element is hidden
        if ( $( '.mod' ).is( ":hidden" ) ) {

            getScores();

            //getScores();
            // Mod element moves slowly down the screen
            $( ".mod" ).slideDown( "slow" );
        } else {
            // Mod element moves slowly up the screen
            $( ".mod" ).slideUp('slow');
        };
    });

    $(".confirm").click(function () {
        createUser();
        $(".userNameAsk").slideUp('slow');
    });

    $(".musicButton").click(function () {
        if(muted == false) {
            sound.mute(true);
            muted = true;
            document.getElementById('music').innerHTML = "Music: OFF";
        } else {
            sound.mute(false);
            muted = false;
            document.getElementById('music').innerHTML = "Music: ON";
        }

    });

    $(".sfxButton").click(function () {
       if (sfxmuted == false)  {
           buttonSound.mute(true);
           sfxmuted = true;
           document.getElementById('sound').innerHTML = "Sound: OFF";
       } else {
           buttonSound.mute(false);
           sfxmuted = false;
           document.getElementById('sound').innerHTML = "Sound: ON";
       }
    });

    // Click on lead-exit element slides element mod up the screen
    $(".lead-exit").click(function () {
        $( ".mod" ).slideUp('slow');
    });

    // Click on set element hides settings
    $(".set").click(function(){
        if ( $('.settings').is(":hidden")){
            $(".settings").slideDown("slow");
        };
    });

    $(".click").click(function () {
        buttonSound.play();

    });

    // Click on retButton slides settings element up the screen.
    $(".retButton").click(function(){
        $(".settings").slideUp("fast");
    });

    // Click on helpButton slides up the screen if help element is hidden
    $(".helpButton").click(function(){
        // Decides if help button is hidden 
        if( $('.help').is(":hidden")){
            // moves help button up the screen
            $(".help").slideDown("slow");
        };
    });

    //Clicking helpReturn element moves help element up screen fast
    $(".helpReturn").click(function(){
        $(".help").slideUp("fast");
    });

    //$(".balance").click(function() {
        //startGame();
    //});


    // Creates an instance called provider of the Google provider object
    var provider = new firebase.auth.GoogleAuthProvider();
    // Declared asynchronous function for signin
     async function googleSignin() {
         // Authenticate Firebase using Google provider object.
         // Promptd users to sign in with their Google Account 
         // either by opening a pop-up window or by redirecting to the sign-in page.
        firebase.auth().signInWithPopup(provider).then( async function(result) {
            //Assigns generated token to variable token
            var token = result.credential.accessToken;
            //Assigns generated or stored userid to userId variable
            userId = result.user.uid;
            // Prints out token to console
            console.log(token);
            //Prints out userId to console
            console.log(userId);
            // Assigns true to isIn
            isIn = true;
            // 
            $('#login').text('Logout');
            // userData = await getAllUserData(userId);
            await checkIfHasName(userId);
            //Assigns user data asynchronously 
            userName = await getAllUserData();
            window.localStorage.setItem('id', userId);
            //Prints asynchronously to console
            await console.log(userName);
            //Prints error message
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            //Prints error code
            console.log(error.code);
            if(error.code === undefined){
                $('.userNameAsk').slideDown('slow');
            }
          //Prints error message
            console.log(error.message)

        });
    }

    // Create signout function
    function googleSignOut(){
        // Signs out from game asynchronously
        firebase.auth().signOut().then(function() {
            // Prints to console, confirmation of signout
            console.log("We gooooot")
            // Creates login 
            $('#login').text('Login');
            // Prints error messages and code if not logined
        }).catch(function(error) {
            // Prints error message to console
            console.log("We got fuuuuucked")
        });
    }

    // Creates 
    $("#login").click( function () {
        // Assigns login to value 
        let value = $('#login').text();
        //Compares login info t
        if(value === 'Login') {
            googleSignin()
        // Signs out 
        } else {
            googleSignOut();
        }

    });
    var buttonSound = new Howl({
        src: ['./engine/audio/click.wav'],
        loop: false,
        volume: 0.2
    });
    var sfxmuted = false;

     var sound = new Howl({
         src: ['./engine/audio/newmusic.mp3'],
         loop: true,
         volume: 0.5,
         onplayerror: function () {
             sound.once('unlock', function() {
                 sound.play();
             });
         }
     });
     sound.play();
     var muted = false;

    //Assigns false to audioStart variable 
    //let audioStarted = false;
    //Assigns audio mp3 extension
    //createjs.Sound.alternateExtensions = ["mp3"];
    //Identifies path to audio file
    //createjs.Sound.registerSound({src:"./engine/audio/music.mp3", id:"sound"});

    // Plays audio with options
    //function handleLoadComplete() {
        //Creates optional play properties for audio
        //var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.5})
        // Plays audio
        //createjs.Sound.play("sound", props);
    //}

     
    // Listens for click on body element and determines if audio plays
    //document.querySelector('body').addEventListener('click', function(){
        //if(!audioStarted){
            //handleLoadComplete();
            //audioStarted = true;
        //}

    //})

    // Will add  a function to check if they have an user name
    //if the user doesn't have, create a pop up and ask for a user id.

    async function getAllUserData(id) {
        let bigData;
       await db.collection("Users").get().then(async function (querySnapshot) {

            console.log(querySnapshot);
            let i = 0;
            await querySnapshot.forEach(async function (doc) {

                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                if(doc.id === id){
                    bigData = await doc.data();
                }
            });
        });
        return await bigData;
    }

    async function checkIfHasName(id){
        await getAllUserData(id).then(async function(data){
            console.log(data.UserName);
        })
    }


    // async function checkTheUser(){
    //     userName = await getDataTest();
    // }
    //
    // async function doSomething(){
    //     console.log(userName);
    // }

    function createUser() {
        db.collection('Users').doc(userId).set({
            UserName : $('#name_field').val(),
            HighScore : 0
        }).then(function () {
            console.log("Doc written successfully");
        })
    }
    function getCurrentUser() {
        return userId;
    }
    
    $('.pixelThanos').click(function(){
        $('.balance').slideDown("fast");
    })
    $('.balance').click(function(){
        $(".help").slideUp("fast");
    })

    function updateScore(score) {

    }
    //Doesn't really start the game.
    //function startGame() {
        //let everything = document.getElementById("yes");
        //while(everything.hasChildNodes()){
            //everything.removeChild(everything.firstChild);
        //}
        //let container = $('#yes');
        //let item = `<div class = 'myDeath'>` +
            //`<div/>`;
        //$(item).appendTo(container);

    //}
});