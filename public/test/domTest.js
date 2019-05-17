    // import { Level1 } from "../engine/Level1";
    // let bob = new Level1();

    function leaderBoardTestBeforeClick() {
            let testValue;
             document.addEventListener('DOMContentLoaded',  event => {
                let leaderBoard = document.getElementById('board').innerText.trim();
                testValue =  leaderBoard.length;
        });
            return testValue;
    }

    function leaderBoardTestAfterClick() {
    let testValue;
        document.addEventListener('DOMContentLoaded', event => {
            let button = document.getElementsByClassName('lead');
            button[0].click();
            let leaderBoard = document.getElementById('board').innerText.trim();
            testValue = leaderBoard.length;
        })
        return testValue;
    }

    function helpButtonBeforeClick(){
    let testValue;
        document.addEventListener('DOMContentLoaded', event => {
            let button = document.getElementsByClassName('help');
            testValue = button[0].style.display.length;
        })
        return testValue;
    }
     function helpButtonAfterClick(){
         let testValue;
         document.addEventListener('DOMContentLoaded', event => {
             let button = document.getElementsByClassName('help');
             let helpbutton = document.getElementsByClassName('helpButton');
             helpbutton[0].click();
             testValue = button[0].style.display;
         })
         return testValue;
     }

     function settingsBeforeClick(){
        let testValue;
         document.addEventListener('DOMContentLoaded', event => {
             let button = document.getElementsByClassName('help');
              testValue = settings[0].style.display;
         })
         return testValue;
     }

     function settingsAfterClick(){
         let testValue;
         document.addEventListener('DOMContentLoaded', event => {
             let button = document.getElementsByClassName('help');
             testValue = settings[0].style.display;
         })
         return testValue;
     }