function getScores() {
    var db = firebase.firestore();
    var users = db.collection("Users");
    var ordered = users.orderBy("HighScore", "desc").limit(10);
    users.get().then((Snap) => {
        Snap.docs.forEach(doc => {
            renderScore(doc);

        })
    });
}
function renderScore(doc) {
    var board = document.getElementById("board");
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    let name = doc.data().UserName;
    att = document.createAttribute("class");
    att.value = "nes-container is-rounded left";
    attr = document.createAttribute("class");
    attr.value = "nes-icon trophy";
    value = doc.data().HighScore;
    divs = document.createElement("div");
    divs.setAttributeNode(att);
    board.appendChild(divs);
    trophy = document.createElement("i");
    trophy.setAttributeNode(attr);
    user = document.createElement("p");
    usa = document.createElement("span");
    usa.innerHTML = name;
    user.innerHTML = "User: ";
    user.appendChild(usa);
    board.appendChild(user);
    score = document.createElement("p");
    scor = document.createElement("span");
    scor.innerHTML = value;
    score.innerHTML = "Score: ";
    score.appendChild(scor);
    board.appendChild(score);
}