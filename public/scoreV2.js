function getScores() {
    var board = document.getElementById("board");
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    var db = firebase.firestore();
    var users = db.collection("Users").orderBy("HighScore", "desc").limit(10).get().then((Snap) => {
        Snap.docs.forEach(doc => {
            renderScore(doc);

        });
    });
}
function renderScore(doc) {
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