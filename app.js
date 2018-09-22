var myFirebaseRef;
var chart;
var chartData = [
    ['candidato1', 50],
    ['candidato2', 30],
    ['candidato3', 144],
    ['candidato4',1]
];




$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCi29uZq3x-JrcQRE13M5r5EyhvCbyzq94",
        authDomain: "votaciones-sentu.firebaseapp.com",
        databaseURL: "https://votaciones-sentu.firebaseio.com",
        projectId: "votaciones-sentu",
        storageBucket: "votaciones-sentu.appspot.com",
        messagingSenderId: "579442049638"
    };
    firebase.initializeApp(config);
    const database = firebase.database();

    //Petición de datos.
    database.ref('/').on('value', (sanpshot) => {
        // console.log('Los datos han cambiado', JSON.stringify(sanpshot.val(), null, 2));
        var candidatos = sanpshot.val();
        var votoTotal = 0;
        for (var candidato in candidatos) {
            // console.log(candidato, candidatos[candidato].votos, candidatos[candidato]);
            $("#votos_" + candidato + " span").text(candidatos[candidato].votos);
            votoTotal += Number(candidatos[candidato].votos);

        }
        // console.log(votoTotal);
        $("#total span").html(votoTotal);
    });

    $("#candidato2, #candidato1, #candidato3, #candidato4").click(function () {
        // $("button[id^='candidato']").click(function () {
        var choice = this.id;
        var voteCount = $('#votos_' + choice + ' span').text();
        console.log(voteCount);
        $("#" + choice).prop("disabled", true);
        database.ref()
            .child(choice)
            .child('votos')
            .set(++voteCount);
        $("#" + choice).prop("disabled", false);
        console.log("votaste por " + choice + " y lleva " + voteCount);
    });
});