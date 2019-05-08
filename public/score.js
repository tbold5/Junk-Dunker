function getScores() {
    let name = "";
    att = document.createAttribute("class");
    att.value = "nes-container is-rounded left";
    attr = document.createAttribute("class");
    attr.value = "nes-icon trophy";
    var board = document.getElementById("board");
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    var scores = firebase.database().ref("scores/");
    scores.on(
        "value",
        function (snap) {
            snap.forEach(function (snap) {
                name = snap.key;
                e = firebase.database().ref("scores/" + snap.key);
                e.orderByChild("score").limitToFirst(1).on(
                    "child_added",
                    function (snop) {
                        value = snop.val();
                        divs = document.createElement("div");
                        divs.setAttributeNode(att);
                        board.appendChild(divs);
                        trophy = document.createElement("i");
                        trophy.setAttributeNode(attr);
                        user = document.createElement("p");
                        usa = document.createElement("span");
                        usa.innerHTML = name;
                        user.innerHTML = "User: " + usa;
                        board.appendChild(user);
                        score = document.createElement("p");
                        scor = document.createElement("span");
                        scor.innerHTML = value;
                        score.innerHTML = "Score: " + scor;
                        board.appendChild(score);

                    }
                )
            })

        }
    )
    
}