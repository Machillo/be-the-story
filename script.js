class Scene {
    constructor (text, options) {
        this.text = text;
        this.options = options;
    }
};

class Option {
    constructor (text, stats, nextScene) {
        this.text = text;
        this.stats = stats;
        this.nextScene = nextScene;
    }
};

const option0 = new Option('Abrir la puerta y enfrentar lo desconocido', {motivacion: +10}, 1);
const option1 = new Option('Rodear la estructura buscando otra entrada', {motivacion: +2}, 14);
const option2 = new Option('Esperar y observar con cautela', {motivacion: -2}, 27);
const scene0 = new Scene('Estás de pie frente a una antigua puerta misteriosa. ¿Qué harás?', [option0, option1, option2]);

const option3 = new Option('Intentas calmar a todos y proponer una conversación sana.', {inteligencia: +2, moral: +2, motivacion: +1}, 2);
const option4 = new Option('Estallas emocionalmente y tomas partido en la discusión.', {salud: -1, moral: -2, energia: +2}, 15);
const option5 = new Option('No dices nada. Te das la vuelta y te marchas sin intervenir.', {motivacion: -1, moral: -2, inteligencia: +1}, 28);
const scene1 = new Scene('Al cruzar la puerta, apareces en el comedor de tu casa. Tu familia discute fuerte por temas económicos y viejos rencores. Tu presencia tensa aún más el ambiente. ¿Cómo reaccionas?', [option3, option4, option5]);

const option6 = new Option('No es que me crea mejor. Solo estoy tratando de mejorar mi vida. Si eso les molesta, lo lamento.', {inteligencia: +1, moral: +1, motivacion: +2}, 3);
const option7 = new Option('Tenés razón, me he vuelto medio intenso últimamente, jaja...', {motivacion: -1, moral: -1, energia: +2}, 16);
const option8 = new Option('No dices nada. Te levantás y salís sin mirar atrás.', {motivacion: -2, moral: -1, inteligencia: +1}, 28);
const scene2 = new Scene('Vas a una pequeña reunión con tus amigos de siempre. Notas que ya no tienen los mismos intereses: hablan de lo mismo de siempre, se burlan de tus nuevos hábitos y uno incluso te dice que "te creés mejor que los demás". ¿Qué haces?', [option6, option7, option8]);

const option9 = new Option('Dios, si estás ahí, guíame. No quiero rendirme, pero me siento perdido...', {energia: +1, moral: +2, motivacion: +2}, 4);
const option10 = new Option('Mejor veo un par de videos, así se me pasa esto...', {motivacion: -1, inteligencia: -1, energia: +1}, 17);
const option11 = new Option('¿Dónde estás cuando más te necesito?', {salud: -1, moral: -1, inteligencia: +1}, 29);
const scene3 = new Scene('Te encontrás solo en tu cuarto, después de un mal día. Sentís que nada avanza, que tus esfuerzos no dan frutos. Mirás al techo y te preguntás si alguien allá arriba realmente te escucha. Por primera vez en mucho tiempo, pensás en orar. ¿Qué haces?', [option9, option10, option11]);

const option12 = new Option('Me gustás, pero necesito claridad. No quiero jugar con sentimientos, ni con los tuyos ni con los míos.', {inteligencia: +2, moral: +1, motivacion: +2}, 5);
const option13 = new Option('Está bien, no me importa si no tenés claro lo que querés. Yo me quedo igual...', {motivacion: -1, moral: -1, salud: +1}, 18);
const option14 = new Option('No necesito esto. Me bloqueo y ya.', {inteligencia: -1, salud: -2, energia: +1}, 30);
const scene4 = new Scene('Sales con alguien desde hace 2 años, que te inspira y te hace sentir visto de una forma distinta. Pero pronto notás que la otra persona cambia y te manda señales confusas. ¿Qué hacés?', [option12, option13, option14]);

const option15 = new Option('No quiero esconder más esto. Voy a escribir lo que siento y dejarlo salir...', {inteligencia: +2, moral: +1, salud: +2}, 6);
const option16 = new Option('No tengo tiempo para dramas. Apretás los dientes y seguís con tu día.', {motivacion: -1, salud: -1, energia: +1}, 19);
const option17 = new Option('Necesito apagar la cabeza. Lo que sea que me saque de esto.', {inteligencia: -1, moral: -2, energia: +2}, 31);
const scene5 = new Scene('Una noche, en la soledad de tu cuarto, todo se te viene encima. Pensamientos como "¿y si no soy suficiente?", "¿y si todo esto no sirve de nada?" te llenan la cabeza. Sentís un nudo en el pecho. Nadie te hizo daño hoy, pero igual estás cayendo. ¿Qué hacés?', [option15, option16, option17]);

const option18 = new Option('No fue un error amar. Fue parte de mi camino. No me voy a castigar por sentir.', {inteligencia: +2, moral: +2, motivacion: +1}, 7);
const option19 = new Option('Ya fue... al menos sé cómo anestesiarme por un rato.', {moral: -1, salud: -2, energia: +2}, 20);
const option20 = new Option('Nunca voy a encontrar a alguien como ella... necesito a alguien que me haga sentir eso otra vez.', {inteligencia: -1, motivacion: -2, energia: +1}, 32);
const scene6 = new Scene('Después de meses de confusión y señales mixtas, la relación termina de forma fría, sin muchas palabras. Te das cuenta de que te aferraste a una idea más que a una realidad. Sentís el golpe profundo, como un error que no supiste evitar. ¿Qué hacés ahora?', [option18, option19, option20]);

const option21 = new Option('Basta de sobrevivir. Quiero construir algo que de verdad tenga sentido para mí.', {inteligencia: +2, energia: +1, motivacion: +2}, 8);
const option22 = new Option('Esto no puede seguir así... algún día voy a cambiar. Lo prometo.', {moral: +1, motivacion: -1, salud: +1}, 21);
const option23 = new Option('Ya entendí. Esto no cambia. Mejor me adapto a lo que hay y dejo de luchar.', {inteligencia: -1, motivacion: -2, salud: +1}, 33);
const scene7 = new Scene('Una tarde cualquiera, mientras caminás sin rumbo, te encontrás pensando en todo lo que viviste últimamente. No fue fácil. Algunas cosas te dolieron más de lo que admitís, pero también aprendiste. Por primera vez, sentís que ya no querés ser el de antes. ¿Qué hacés con esa sensación?', [option21, option22, option23]);

const option24 = new Option('No vine a impresionar a nadie. Esto es por mí. Un paso a la vez.', {salud: +3, energia: +1, motivacion: +2}, 9);
const option25 = new Option('Mejor hago lo que están haciendo ellos... no quiero parecer un tonto.', {energia: +1, inteligencia: -1, salud: -1}, 22);
const option26 = new Option('Esto no es para mí. No tengo fuerza ni cuerpo. ¿A quién quiero engañar?', {salud: -1, motivacion: -2, moral: +1}, 34);
const scene8 = new Scene('Te anotás al gimnasio y vas por primera vez. Todo el mundo parece saber qué está haciendo. Te mirás al espejo y no te reconocés. Dudás de si esto realmente es para vos. ¿Qué hacés?', [option24, option25, option26]);

const option27 = new Option('No tengo que saberlo todo hoy. Solo tengo que no rendirme.', {inteligencia: +3, salud: +1, motivacion: +2}, 10);
const option28 = new Option('Esto no me va a ganar. No voy a parar hasta que lo entienda, aunque me duela.', {energia: +2, moral: -1, salud: -1}, 23);
const option29 = new Option('Hoy no es el día. Mejor me distraigo un rato y mañana será diferente.', {inteligencia: -1, motivacion: -2, energia: +1}, 35);
const scene9 = new Scene('Te sentás frente a la computadora a estudiar algo que siempre te gustó, pero no entendés nada al principio. Te comparás con otros, sentís que vas lento y pensás que tal vez esto no es para vos. ¿Qué hacés?', [option27, option28, option29]);

const option30 = new Option('Prefiero fallar intentando algo mío que quedarme con las ganas toda la vida.', {inteligencia: +1, energia: +2, motivacion: +2}, 11);
const option31 = new Option('¿Y si primero le pregunto a alguien a ver si vale la pena?', {inteligencia: +1, moral: -1, salud: +1}, 24);
const option32 = new Option('Esto no es urgente… algún día lo haré, cuando esté listo.', {moral: +1, motivacion: -2, energia: -1}, 36);
const scene10 = new Scene('Después de todo lo vivido, tenés una idea: un proyecto propio. Algo que refleja tus valores, tu historia y tus talentos. Pero justo cuando estás por empezarlo, te ataca la duda: "¿y si nadie lo apoya?", "¿y si me expongo y fallo?". ¿Qué hacés?', [option30, option31, option32]);

const option33 = new Option('Este es el momento por el que trabajé. No tengo todo resuelto, pero estoy listo.', {inteligencia: +2, moral: +2, motivacion: +4, salud: +3, energia: +1}, 12);
const option34 = new Option('Quiero esto… pero no estoy seguro de estar listo. Necesito pensar bien las cosas.', {inteligencia: +1, energia: -1, motivacion: -1}, 25);
const option35 = new Option('Estoy bien así. Cambiar tanto ahora podría arruinar todo lo que logré.', {moral: -2, motivacion: -4, salud: +1}, 37);
const scene11 = new Scene('Después de meses de esfuerzo, lágrimas y pequeñas victorias, todo parece alinearse: recibís una oportunidad única. Una oferta laboral de lo que estudiaste, una mudanza, un proyecto que te representa, tu cuerpo responde a los cambios en el gimnasio. Para lograrlo, tendrás que salir de tu zona segura, dejar atrás parte de tu rutina, y comprometerte con todo lo que sos. ¿Qué hacés?', [option33, option34, option35]);

const scene12 = new Scene('Lograste lo que pocos logran: no solo cambiaste tu vida, sino que inspiraste a otros con tu ejemplo. Tu trabajo, tu salud, tu fe, tus relaciones y tu proyecto personal florecen porque no te rendiste. Supiste quién eras y lo defendiste.');
const scene25 = new Scene('Avanzaste mucho. No tenés todo resuelto, pero sos alguien nuevo. Tenés heridas, pero también herramientas. El futuro no está garantizado, pero tenés lo necesario para seguir creciendo. Lo importante: no volviste a ser quien eras.');
const scene37 = new Scene('Caminaste el sendero más difícil, pero la carga fue demasiado en algunos tramos. Aunque llegaste lejos, a veces dudaste demasiado de vos mismo. Te queda una lección: no siempre se trata de aguantar, sino de saber cuándo pedir ayuda.');

function finalEvaluation(stats) {
    
    const valores = Object.values(stats);
    const suma = valores.reduce((total, val) => total + val, 0);
    const promedio = suma / valores.length;

    if (promedio >= 60) {
        return scene12;
      } else if (promedio >= 45) {
        return scene25;
      } else {
        return scene37;
      }      
};