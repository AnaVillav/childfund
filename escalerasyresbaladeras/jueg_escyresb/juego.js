let app = new PIXI.Application({ width: 960, height: 540, transparent: false });

document.body.appendChild(app.view);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.backgroundColor = 0x061639;

var scaleImg = .5;
var screenW = app.screen.width;
var screenH = app.screen.height;

const container = new PIXI.Container();

app.stage.addChild(container);

//------ CARGAR IMAGENES DE JUEGO------
//Etapa3-Juego
const tablero = PIXI.Sprite.from('sprites/tablero.jpg');
const instrucciones = PIXI.Sprite.from('sprites/instrucciones.jpg');
const but_salir = PIXI.Sprite.from('sprites/salir.png');
const but_instrucciones = PIXI.Sprite.from('sprites/instrucciones.png');
const but_dado = PIXI.Sprite.from('sprites/dado.png');
const but_personaje = PIXI.Sprite.from('sprites/armadillo.png');
const but_cerrar = PIXI.Sprite.from('sprites/cerrar.png');
const but_positivo = PIXI.Sprite.from('sprites/positivo.png');
const but_negativo = PIXI.Sprite.from('sprites/negativo.png');

//Etapa2-Menu

const armadillo = PIXI.Texture.from('sprites/armadillo.png');
const cuy = PIXI.Texture.from('sprites/cuy.png');
const iguana = PIXI.Texture.from('sprites/iguana.png');
const tortuga = PIXI.Texture.from('sprites/tortuga.png');
const menu = PIXI.Sprite.from('sprites/menu.jpg');
const fondopersonajes = PIXI.Sprite.from('sprites/fondo.jpg');
const but_armadillo = PIXI.Sprite.from(armadillo);
const but_cuy = PIXI.Sprite.from(cuy);
const but_iguana = PIXI.Sprite.from(iguana);
const but_tortuga = PIXI.Sprite.from(tortuga);
const but_mas = PIXI.Sprite.from('sprites/mas.png');
const but_menos = PIXI.Sprite.from('sprites/menos.png');
const but_empezar = PIXI.Sprite.from('sprites/empezar.png');
const but_cerrarPers = PIXI.Sprite.from('sprites/cerrar.png');


const but_jugador0 = PIXI.Sprite.from('sprites/armadillo.png');
const but_jugador1 = PIXI.Sprite.from('sprites/cuy.png');
const but_jugador2 = PIXI.Sprite.from('sprites/iguana.png');

//Cargar texto
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fill: '#ffffff',
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 3,
    wordWrap: true,
    wordWrapWidth: 440,
});
const in_text = new PIXI.Text('1', style);

//------ CENTRAR PIVOT -------
//Etapa 3- Juego
but_salir.anchor.set(0.5);
but_instrucciones.anchor.set(0.5);
but_dado.anchor.set(0.5);
but_personaje.anchor.set(0.5);
but_cerrar.anchor.set(0.5);
but_positivo.anchor.set(0.5);
but_negativo.anchor.set(0.5);

instrucciones.anchor.set(0.5);

//Etapa 2- Menu
but_mas.anchor.set(0.5);
but_menos.anchor.set(0.5);
but_empezar.anchor.set(0.5);
but_armadillo.anchor.set(0.5);
but_cuy.anchor.set(0.5);
but_iguana.anchor.set(0.5);
but_tortuga.anchor.set(0.5);

fondopersonajes.anchor.set(0.5);
but_cerrarPers.anchor.set(0.5);

but_jugador0.anchor.set(0.5);
but_jugador1.anchor.set(0.5);
but_jugador2.anchor.set(0.5);


// -----ESCALA IMG -----
//Etapa 3 - Juego
tablero.scale.set(scaleImg);
but_salir.scale.set(scaleImg);
but_personaje.scale.set(scaleImg);
but_dado.scale.set(scaleImg);
but_instrucciones.scale.set(scaleImg);
but_positivo.scale.set(scaleImg);
but_negativo.scale.set(scaleImg);
instrucciones.scale.set(scaleImg);

but_cerrar.scale.set(scaleImg);

//Etapa 2- Menu
menu.scale.set(scaleImg);
but_mas.scale.set(scaleImg);
but_menos.scale.set(scaleImg);
but_empezar.scale.set(scaleImg);
but_armadillo.scale.set(scaleImg);
but_cuy.scale.set(scaleImg);
but_iguana.scale.set(scaleImg);
but_tortuga.scale.set(scaleImg);
fondopersonajes.scale.set(scaleImg);
but_cerrarPers.scale.set(scaleImg);
but_jugador0.scale.set(scaleImg);
but_jugador1.scale.set(scaleImg);
but_jugador2.scale.set(scaleImg);

//-----POSICION IMG -----
//Etapa 3-Juego
tablero.x = 0;
tablero.y = 0;
but_salir.x = screenW * .92;
but_salir.y = screenH * .92;
but_instrucciones.x = screenW * .92;
but_instrucciones.y = screenH * .865;
but_dado.x = screenW * .92;
but_dado.y = screenH * .65;
but_personaje.x = screenW * .92;
but_personaje.y = screenH * .3;
instrucciones.x = screenW * .42;
instrucciones.y = screenH * .5;
but_cerrar.x = screenW * .65;
but_cerrar.y = screenH * .25;
but_positivo.x = screenW * .09;
but_positivo.y = screenH * .39;
but_negativo.x = screenW * .09;
but_negativo.y = screenH * .64;



//Etapa 2-Menu
but_mas.x = screenW * .68;
but_mas.y = screenH * .31;
but_menos.x = screenW * .72;
but_menos.y = screenH * .31;
but_empezar.x = screenW * .5;
but_empezar.y = screenH * .85;
in_text.x = screenW * .585;
in_text.y = screenH * .265;
but_armadillo.x = screenW * .42;
but_armadillo.y = screenH * .36;
but_cuy.x = screenW * .58;
but_cuy.y = screenH * .36;
but_iguana.x = screenW * .42;
but_iguana.y = screenH * .62;
but_tortuga.x = screenW * .58;
but_tortuga.y = screenH * .62;

fondopersonajes.x = screenW * .5;
fondopersonajes.y = screenH * .5;

but_cerrarPers.x = screenW * .73;
but_cerrarPers.y = screenH * .25;

but_jugador0.y = screenH * .65;
but_jugador0.x = screenW * .5;
but_jugador1.y = screenH * .65;
but_jugador2.y = screenH * .65;


//------AGREGAR IMG-----
//Etapa 3-Juego
app.stage.addChild(tablero, but_personaje,
    but_dado, but_salir, but_positivo, but_negativo, but_instrucciones,
    instrucciones, but_cerrar);

//Etapa 2-Menu
app.stage.addChild(menu, but_mas, but_menos,
    in_text, but_empezar, but_jugador0);


//  ----Activar interactivity ---
//Etapa 3-Juego
but_salir.interactive = true;
but_instrucciones.interactive = true;
but_cerrar.interactive = true;
but_dado.interactive = true;
but_positivo.interactive = true;
but_negativo.interactive = true;

//Etapa 2- Menu
but_mas.interactive = true;
but_menos.interactive = true;
but_empezar.interactive = true;
but_cerrarPers.interactive = true;
but_armadillo.interactive = true;
but_cuy.interactive = true;
but_iguana.interactive = true;
but_tortuga.interactive = true;
but_jugador0.interactive = true;
but_jugador1.interactive = true;
but_jugador2.interactive = true;

// ---- Shows hand cursor ---- 
//Etapa 3-Juego
but_salir.buttonMode = true;
but_instrucciones.buttonMode = true;
but_cerrar.buttonMode = true;
but_dado.buttonMode = true;
but_positivo.buttonMode = true;
but_negativo.buttonMode = true;


//Etapa 2 -Menu
but_mas.buttonMode = true;
but_menos.buttonMode = true;
but_empezar.buttonMode = true;
but_cerrarPers.buttonMode = true;
but_jugador0.buttonMode = true;
but_jugador1.buttonMode = true;
but_jugador2.buttonMode = true;

// Pointers normalize touch and mouse
//Etapa 3-Juego
but_salir.on('pointerdown', regresarMenu);
but_instrucciones.on('pointerdown', abrirInstrucciones);
but_cerrar.on('pointerdown', cerrarInstrucciones);
but_dado.on('pointerdown', lanzarDado);
but_positivo.on('pointerdown', selecPositivo);
but_negativo.on('pointerdown', selecNegativo);


//Etapa 2 -Menu
but_mas.on('pointerdown', masJugadores);
but_menos.on('pointerdown', menosJugadores);
but_empezar.on('pointerdown', empezarJuego);
but_cerrarPers.on('pointerdown', cerrarPersonajes);
but_armadillo.on('pointerdown', cambiarArmadillo);
but_cuy.on('pointerdown', cambiarCuy);
but_iguana.on('pointerdown', cambiarIguana);
but_tortuga.on('pointerdown', cambiarTortuga);
but_jugador0.on('pointerdown', cambiarJugador0);
but_jugador1.on('pointerdown', cambiarJugador1);
but_jugador2.on('pointerdown', cambiarJugador2);


// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only


//----Variables Interaccion----
var instAbiertas = true;
var numJugadores = 0;
var jugActivo;
var jugPersonajes = [0, 1, 2];
var avanza;
var posx = [screenW*.8,screenW*.69,screenW*.575,screenW*.46,screenW*.345,screenW*.23,screenW*.23,screenW*.345,screenW*.46,screenW*.575,screenW*.69,screenW*.69,screenW*.575,screenW*.46,screenW*.345,screenW*.23,screenW*.23,screenW*.345,screenW*.46,screenW*.575,screenW*.69]
var posy = [screenH*.8,screenH*.8,screenH*.8,screenH*.8,screenH*.8,screenH*.8,screenH*.6,screenH*.6,screenH*.6,screenH*.6,screenH*.6,screenH*.4,screenH*.4,screenH*.4,screenH*.4,screenH*.4,screenH*.2,screenH*.2,screenH*.2,screenH*.2,screenH*.2]
var jugEstados = [3,0,1,3,1,0,3,0,0,1,3,1,0,3,1,1,0,3,1,3,0];
var jugResEsc = [-1,0,10,-1,6,3,-1,6,3,13,-1,19,10,-1,17,17,6,-1,19,-1,10];
var jugPosiciones = [0,0,0];
var esperarnegativo = false;
var esperarpositivo = false;

//------Funciones-----
// Etapa 3-Juego
function regresarMenu() {
    if (!instAbiertas) {

        jugPosiciones = [0,0,0];
        numJugadores = 0;
        jugPersonajes = [0, 1, 2];
        in_text.text = (numJugadores + 1).toString();
        displayJugadores();
        app.stage.removeChild(but_jugador0, but_jugador1, but_jugador2);
        but_jugador0.scale.set(scaleImg);
        but_jugador1.scale.set(scaleImg);
        but_jugador2.scale.set(scaleImg);
        app.stage.addChild(menu, but_mas, but_menos, in_text, but_empezar, but_jugador0);
    }
}

function abrirInstrucciones() {
    if (!instAbiertas) {
        instAbiertas = true;
        app.stage.addChild(instrucciones);

        app.stage.addChild(but_cerrar);
    }
}

function cerrarInstrucciones() {
    if (instAbiertas) {
        instAbiertas = false;
        app.stage.removeChild(instrucciones);
        app.stage.removeChild(but_cerrar);
    }
}

function ActualizarTurno() {
    switch (jugActivo) {
        case 0:
            but_personaje.texture = but_jugador0.texture;
            break;
        case 1:
            but_personaje.texture = but_jugador1.texture;
            break;
        case 2:
            but_personaje.texture = but_jugador2.texture;
            break;
    }
}
function SiguienteTurno() {
jugActivo ++;
if (jugActivo > numJugadores) {
    jugActivo = 0;
}
ActualizarTurno();
}

function lanzarDado() {
    if (!instAbiertas) {
       avanza= Math.floor ((Math.random ()*6));
       if (avanza == 0) avanza =1;
       jugPosiciones [jugActivo] = jugPosiciones [jugActivo]+ avanza; 
   if (jugPosiciones[jugActivo] == 20) {
       console.log ("ganador");
   } else if (jugPosiciones[jugActivo] > 19) {
       jugPosiciones [jugActivo] == 20 -(jugPosiciones [jugActivo] -20)
   } 
 
    moverFicha ();
   
    switch (jugEstados[jugPosiciones [jugActivo]]) {

        case 0:
             jugPosiciones [jugActivo] = jugResEsc [jugPosiciones [jugActivo]];
             esperarnegativo = true;
             but_negativo.scale.set (scaleImg*1.1)
            break;
        case 1:
            jugPosiciones [jugActivo] = jugResEsc [jugPosiciones [jugActivo]];
            esperarpositivo =true;
            
            but_positivo.scale.set (scaleImg*1.1)
            break;
        case 2:
            break;
    } 
    
}
}

function moverFicha () {
    switch (jugActivo) {
        case 0:
            but_jugador0.x = posx [jugPosiciones [jugActivo]];
            but_jugador0.y = posy [jugPosiciones [jugActivo]] -(screenH*.05);
            
            break;
        case 1:
            but_jugador1.x = posx [jugPosiciones [jugActivo]];
            but_jugador1.y = posy [jugPosiciones [jugActivo]];
            break;
        case 2:
            but_jugador2.x = posx [jugPosiciones [jugActivo]];
            but_jugador2.y = posy [jugPosiciones [jugActivo]]+(screenH*.05);
            break;
    }

}

function selecPositivo() {
    if (!instAbiertas) {
 if (esperarpositivo) {
     moverFicha();
     esperarpositivo = false;
     but_positivo.scale.set (scaleImg)
 }
    }
    SiguienteTurno();
}

function selecNegativo() {
    if (!instAbiertas) {
        if (esperarnegativo) {
            
     esperarnegativo = false;
        moverFicha();
        but_negativo.scale.set (scaleImg)
        }
    }
    
    SiguienteTurno();
}

// Etapa 2-Menu

function masJugadores() {
    if (numJugadores < 2) {
        numJugadores++;
        in_text.text = (numJugadores + 1).toString();
        displayJugadores();
    }

}
function menosJugadores() {
    if (numJugadores > 0) {
        numJugadores--;
        in_text.text = (numJugadores + 1).toString();
        displayJugadores();
    }

}

function displayJugadores() {
    app.stage.removeChild(but_jugador0, but_jugador1, but_jugador2);
    but_jugador0.y = screenH * .65;
    but_jugador1.y = screenH * .65;
    but_jugador2.y = screenH * .65;
    switch (numJugadores) {
        case 0:
            app.stage.addChild(but_jugador0);
            but_jugador0.x = screenW * .5;
            break;
        case 1:

            app.stage.addChild(but_jugador0, but_jugador1);
            but_jugador0.x = screenW * .42;
            but_jugador1.x = screenW * .58;
            break;
        case 2:

            app.stage.addChild(but_jugador0, but_jugador1, but_jugador2);
            but_jugador0.x = screenW * .34;
            but_jugador1.x = screenW * .5;
            but_jugador2.x = screenW * .66
            break;

    }
}

function cambiarJugador0() {
    jugActivo = 0;
    abrirPersonajes();
}
function cambiarJugador1() {
    jugActivo = 1;
    abrirPersonajes();
}

function cambiarJugador2() {
    jugActivo = 2;
    abrirPersonajes();
}

function abrirPersonajes() {
    but_armadillo.interactive = true;
    but_armadillo.alpha = 1;
    but_cuy.interactive = true;
    but_cuy.alpha = 1;
    but_iguana.interactive = true;
    but_iguana.alpha = 1;
    but_tortuga.interactive = true;
    but_tortuga.alpha = 1;

    for (var i = 0; i < numJugadores + 1; i++) {

        if (i != jugActivo) {
            switch (jugPersonajes[i]) {

                case 0:
                    but_armadillo.interactive = false;
                    but_armadillo.alpha = 0.5;
                    break;
                case 1:

                    but_cuy.interactive.false;
                    but_cuy.alpha = 0.5;
                    break;
                case 2:

                    but_iguana.interactive = false;
                    but_iguana.alpha = 0.5;
                    break;
                case 3:

                    but_tortuga.interactive = false;
                    but_tortuga.alpha = 0.5;
                    break;

            }
        }
    }
    switch (jugPersonajes[jugActivo]) {

        case 0:
            but_armadillo.scale.set(scaleImg + .1);
            break;
        case 1:
            but_cuy.scale.set(scaleImg + .1);
            break;
        case 2:

            but_iguana.scale.set(scaleImg + .1);
            break;
        case 3:
            but_tortuga.scale.set(scaleImg + .1);
            break;
    }
    app.stage.addChild(fondopersonajes, but_tortuga, but_iguana, but_armadillo, but_cuy, but_cerrarPers);
}

function cambiarArmadillo() {

    jugPersonajes[jugActivo] = 0;
    switch (jugActivo) {
        case 0:
            but_jugador0.texture = armadillo;
            break;
        case 1:
            but_jugador1.texture = armadillo;
            break;
        case 2:
            but_jugador2.texture = armadillo;
            break;

    }
    selecPersonaje();

}

function cambiarCuy() {
    jugPersonajes[jugActivo] = 1;
    switch (jugActivo) {
        case 0:
            but_jugador0.texture = cuy;
            break;
        case 1:
            but_jugador1.texture = cuy;
            break;
        case 2:
            but_jugador2.texture = cuy;
            break;

    }
    selecPersonaje();
}

function cambiarIguana() {
    jugPersonajes[jugActivo] = 2;
    switch (jugActivo) {
        case 0:
            but_jugador0.texture = iguana;
            break;
        case 1:
            but_jugador1.texture = iguana;
            break;
        case 2:
            but_jugador2.texture = iguana;
            break;

    }
    selecPersonaje();
}

function cambiarTortuga() {
    jugPersonajes[jugActivo] = 3;
    switch (jugActivo) {
        case 0:
            but_jugador0.texture = tortuga;
            break;
        case 1:
            but_jugador1.texture = tortuga;
            break;
        case 2:
            but_jugador2.texture = tortuga;
            break;

    }
    selecPersonaje();
}

function selecPersonaje() {
    but_armadillo.scale.set(scaleImg);
    but_cuy.scale.set(scaleImg);
    but_iguana.scale.set(scaleImg);
    but_tortuga.scale.set(scaleImg);
    switch (jugPersonajes[jugActivo]) {

        case 0:
            but_armadillo.scale.set(scaleImg + .1);
            break;
        case 1:
            but_cuy.scale.set(scaleImg + .1);
            break;
        case 2:

            but_iguana.scale.set(scaleImg + .1);
            break;
        case 3:
            but_tortuga.scale.set(scaleImg + .1);
            break;
    }
}

function cerrarPersonajes() {
    but_armadillo.scale.set(scaleImg);
    but_cuy.scale.set(scaleImg);
    but_iguana.scale.set(scaleImg);
    but_tortuga.scale.set(scaleImg);
    app.stage.removeChild(fondopersonajes, but_tortuga, but_iguana, but_armadillo, but_cuy, but_cerrarPers);
}

function empezarJuego() {
    app.stage.removeChild(menu, but_mas, but_menos, in_text, but_empezar);
    abrirInstrucciones ();
    switch (numJugadores) {
        case 0:
            but_jugador0.scale.set(scaleImg * .4);
            but_jugador0.x = screenW * .8;
            but_jugador0.y = screenH * .8;
            break;
        case 1:

            but_jugador0.scale.set(scaleImg * .4);
            but_jugador1.scale.set(scaleImg * .4);
            but_jugador0.x = screenW * .8;
            but_jugador0.y = screenH * .75;

            but_jugador1.x = screenW * .8;
            but_jugador1.y = screenH * .85;
            break;
        case 2:

            but_jugador0.scale.set(scaleImg * .4);
            but_jugador1.scale.set(scaleImg * .4);
            but_jugador2.scale.set(scaleImg * .4);
            but_jugador0.x = screenW * .8;
            but_jugador0.y = screenH * .72;
            but_jugador1.x = screenW * .8;
            but_jugador1.y = screenH * .8;
            but_jugador2.x = screenW * .8;
            but_jugador2.y = screenH * .88;
            break;
    }

    jugActivo = Math.floor(Math.random() * (numJugadores + 1));
    ActualizarTurno();
}
