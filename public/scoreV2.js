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
    console.log(name);
    value = doc.data().HighScore;
    let container = $('#board');
    let item = `<div class = 'nes-container is-rounded'>` +
        `<p class='highScore'><i class=\"nes-icon trophy\"></i>${name}:  ` +
        `<span id='score'>${value}</span><p/>` +
        `<div/>`;
    $(item).appendTo(container);
}