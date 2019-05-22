
document.addEventListener('DOMContentLoaded', event => {
    const firebaseConfig = {
        apiKey: "AIzaSyBCQrXMQ_lU5f-vFPmsSC9bvbRifHep-c0",
        authDomain: "moretest-22401.firebaseapp.com",
        databaseURL: "https://moretest-22401.firebaseio.com",
        projectId: "moretest-22401",
        storageBucket: "moretest-22401.appspot.com",
        messagingSenderId: "645485429348",
        appId: "1:645485429348:web:513b37cdbc0ca89f"
    };
    firebase.initializeApp(firebaseConfig);
    var perf = firebase.performance();
});