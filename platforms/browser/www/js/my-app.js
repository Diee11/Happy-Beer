// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});



// Handle Cordova Device Ready Event
$$('.hide-navbar').on('click', function () {
    app.navbar.hide('.navbar');
  });
  $$('.show-navbar').on('click', function () {
    app.navbar.show('.navbar');
  });

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});



// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }else if(page.name === 'Usuario'){
        myApp.alert('Here comes pagina tres page');
    }
})

// BARRIO PALERMO
function show_hide_palermo () {
    var click = document.getElementById("palermo");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// LA BIRRERIA
function show_hide () {
    var click = document.getElementById("LaBirreria");
    if(click.style.display === "none") {
        click.style.display = "block" ;
    } else {
        click.style.display = "none" ;
    }
}

// EL GALPON DE TACUARA 
function show_hide_tacuara () {
    var click = document.getElementById("Tacuara");
    if(click.style.display === "none") {
        click.style.display = "block" ;
    } else {
        click.style.display = "none" ;
    }
}

// FEA
function show_hide_FEA () {
    var click = document.getElementById("FEA");
    if(click.style.display === "none") {
        click.style.display = "block" ;
    } else {
        click.style.display = "none" ;
    }
}

// Dársena
function show_hide_Dársena () {
    var click = document.getElementById("Dársena");
    if(click.style.display === "none") {
        click.style.display = "block" ;
    } else {
        click.style.display = "none" ;
    }
}


// BARRIO RECOLETA 

function show_hide_recoleta () {
    var click = document.getElementById("recoleta");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// BULLER
function show_hide_buller () {
    var click = document.getElementById("buller");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// MALDINI
function show_hide_maldini () {
    var click = document.getElementById("maldini");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// JOBS
function show_hide_Jobs () {
    var click = document.getElementById("Jobs");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// PATAGONIA
function show_hide_patagonia () {
    var click = document.getElementById("patagonia");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}


// BARRIO BELGRANO
function show_hide_belgrano () {
    var click = document.getElementById("belgrano");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// ON TAP
function show_hide_ontap () {
    var click = document.getElementById("ontap");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// Cervelar
function show_hide_Cervelar () {
    var click = document.getElementById("Cervelar");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// Maldita Birra
function show_hide_MalditaBirra () {
    var click = document.getElementById("MalditaBirra");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}

// SKAL
function show_hide_Skal () {
    var click = document.getElementById("Skal");
    if(click.style.display === "block") {
        click.style.display = "none" ;
    } else {
        click.style.display = "block" ;
    }
}