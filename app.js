var myFirebaseRef;
var chart;
var chartData = [];
var candidatos;



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
    
    database.ref('/').on('value', (sanpshot) => {
        console.log('Los datos han cambiado', JSON.stringify(sanpshot.val(), null, 2));
        candidatos = sanpshot.val();
        var votoTotal = 0;
        for(var candidato in candidatos){
            console.log(candidato, candidatos[candidato].votos, candidatos[candidato]);
            $("#votos_"+candidato + " span").text(candidatos[candidato].votos);
            votoTotal += Number(candidatos[candidato].votos);
            
        }
        console.log(votoTotal);
        $("#total span").html(votoTotal);
    });

    $('#canditato1').click(function () {
        var vote = candidatos.candidato1.votos + 1;
        database.ref()
            .child('candidato1')
            .child('votos')
            .set(vote);
        console.log("funciona");
    });
    $('#canditato2').click(function () {
        var vote = candidatos.candidato2.votos + 1;
        database.ref()
            .child('candidato2')
            .child('votos')
            .set(vote);
        console.log("funciona");
    });
    $('#canditato3').click(function () {
        var vote = candidatos.candidato3.votos + 1;
        database.ref()
            .child('candidato3')
            .child('votos')
            .set(vote);
        console.log("funciona");
    });
    $('#canditato4').click(function () {
        var vote = candidatos.candidato4.votos + 1;
        database.ref()
            .child('candidato4')
            .child('votos')
            .set(vote);
        console.log("funciona");
    });

});

