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
const option1 = new Option('Rodear la estructura buscando otra entrada', {motivacion: +2}, 13);
const option2 = new Option('Esperar y observar con cautela', {motivacion: -2}, 26);
const scene0 = new Scene('Estás de pie frente a una antigua puerta misteriosa. ¿Qué harás?', [option0, option1, option2]);

const option3 = new Option('Intentas calmar a todos y proponer una conversación sana.', {inteligencia: +2, moral: +2, motivacion: +1}, 2);
const option4 = new Option('Estallas emocionalmente y tomas partido en la discusión.', {salud: -1, moral: -2, energia: +2}, 14);
const option5 = new Option('No dices nada. Te das la vuelta y te marchas sin intervenir.', {motivacion: -1, moral: -2, inteligencia: +1}, 27);
const scene1 = new Scene('Al cruzar la puerta, apareces en el comedor de tu casa. Tu familia discute fuerte por temas económicos y viejos rencores. Tu presencia tensa aún más el ambiente. ¿Cómo reaccionas?', [option3, option4, option5]);

const option6 = new Option('No es que me crea mejor. Solo estoy tratando de mejorar mi vida. Si eso les molesta, lo lamento.', {inteligencia: +1, moral: +1, motivacion: +2}, 3);
const option7 = new Option('Tenés razón, me he vuelto medio intenso últimamente, jaja...', {motivacion: -1, moral: -1, energia: +2}, 15);
const option8 = new Option('No dices nada. Te levantás y salís sin mirar atrás.', {motivacion: -2, moral: -1, inteligencia: +1}, 27);
const scene2 = new Scene('Vas a una pequeña reunión con tus amigos de siempre. Notas que ya no tienen los mismos intereses: hablan de lo mismo de siempre, se burlan de tus nuevos hábitos y uno incluso te dice que "te creés mejor que los demás". ¿Qué haces?', [option6, option7, option8]);

const option9 = new Option('Dios, si estás ahí, guíame. No quiero rendirme, pero me siento perdido...', {energia: +1, moral: +2, motivacion: +2}, 4);
const option10 = new Option('Mejor veo un par de videos, así se me pasa esto...', {motivacion: -1, inteligencia: -1, energia: +1}, 16);
const option11 = new Option('¿Dónde estás cuando más te necesito?', {salud: -1, moral: -1, inteligencia: +1}, 28);
const scene3 = new Scene('Te encontrás solo en tu cuarto, después de un mal día. Sentís que nada avanza, que tus esfuerzos no dan frutos. Mirás al techo y te preguntás si alguien allá arriba realmente te escucha. Por primera vez en mucho tiempo, pensás en orar. ¿Qué haces?', [option9, option10, option11]);

const option12 = new Option('Me gustás, pero necesito claridad. No quiero jugar con sentimientos, ni con los tuyos ni con los míos.', {inteligencia: +2, moral: +1, motivacion: +2}, 5);
const option13 = new Option('Está bien, no me importa si no tenés claro lo que querés. Yo me quedo igual...', {motivacion: -1, moral: -1, salud: +1}, 17);
const option14 = new Option('No necesito esto. Me bloqueo y ya.', {inteligencia: -1, salud: -2, energia: +1}, 29);
const scene4 = new Scene('Sales con alguien desde hace 2 años, que te inspira y te hace sentir visto de una forma distinta. Pero pronto notás que la otra persona cambia y te manda señales confusas. ¿Qué hacés?', [option12, option13, option14]);

const option15 = new Option('No quiero esconder más esto. Voy a escribir lo que siento y dejarlo salir...', {inteligencia: +2, moral: +1, salud: +2}, 6);
const option16 = new Option('No tengo tiempo para dramas. Apretás los dientes y seguís con tu día.', {motivacion: -1, salud: -1, energia: +1}, 18);
const option17 = new Option('Necesito apagar la cabeza. Lo que sea que me saque de esto.', {inteligencia: -1, moral: -2, energia: +2}, 30);
const scene5 = new Scene('Una noche, en la soledad de tu cuarto, todo se te viene encima. Pensamientos como "¿y si no soy suficiente?", "¿y si todo esto no sirve de nada?" te llenan la cabeza. Sentís un nudo en el pecho. Nadie te hizo daño hoy, pero igual estás cayendo. ¿Qué hacés?', [option15, option16, option17]);

const option18 = new Option('No fue un error amar. Fue parte de mi camino. No me voy a castigar por sentir.', {inteligencia: +2, moral: +2, motivacion: +1}, 7);
const option19 = new Option('Ya fue... al menos sé cómo anestesiarme por un rato.', {moral: -1, salud: -2, energia: +2}, 19);
const option20 = new Option('Nunca voy a encontrar a alguien como ella... necesito a alguien que me haga sentir eso otra vez.', {inteligencia: -1, motivacion: -2, energia: +1}, 31);
const scene6 = new Scene('Después de meses de confusión y señales mixtas, la relación termina de forma fría, sin muchas palabras. Te das cuenta de que te aferraste a una idea más que a una realidad. Sentís el golpe profundo, como un error que no supiste evitar. ¿Qué hacés ahora?', [option18, option19, option20]);

const option21 = new Option('Basta de sobrevivir. Quiero construir algo que de verdad tenga sentido para mí.', {inteligencia: +2, energia: +1, motivacion: +2}, 8);
const option22 = new Option('Esto no puede seguir así... algún día voy a cambiar. Lo prometo.', {moral: +1, motivacion: -1, salud: +1}, 20);
const option23 = new Option('Ya entendí. Esto no cambia. Mejor me adapto a lo que hay y dejo de luchar.', {inteligencia: -1, motivacion: -2, salud: +1}, 32);
const scene7 = new Scene('Una tarde cualquiera, mientras caminás sin rumbo, te encontrás pensando en todo lo que viviste últimamente. No fue fácil. Algunas cosas te dolieron más de lo que admitís, pero también aprendiste. Por primera vez, sentís que ya no querés ser el de antes. ¿Qué hacés con esa sensación?', [option21, option22, option23]);

const option24 = new Option('No vine a impresionar a nadie. Esto es por mí. Un paso a la vez.', {salud: +3, energia: +1, motivacion: +2}, 9);
const option25 = new Option('Mejor hago lo que están haciendo ellos... no quiero parecer un tonto.', {energia: +1, inteligencia: -1, salud: -1}, 21);
const option26 = new Option('Esto no es para mí. No tengo fuerza ni cuerpo. ¿A quién quiero engañar?', {salud: -1, motivacion: -2, moral: +1}, 33);
const scene8 = new Scene('Te anotás al gimnasio y vas por primera vez. Todo el mundo parece saber qué está haciendo. Te mirás al espejo y no te reconocés. Dudás de si esto realmente es para vos. ¿Qué hacés?', [option24, option25, option26]);

const option27 = new Option('No tengo que saberlo todo hoy. Solo tengo que no rendirme.', {inteligencia: +3, salud: +1, motivacion: +2}, 10);
const option28 = new Option('Esto no me va a ganar. No voy a parar hasta que lo entienda, aunque me duela.', {energia: +2, moral: -1, salud: -1}, 22);
const option29 = new Option('Hoy no es el día. Mejor me distraigo un rato y mañana será diferente.', {inteligencia: -1, motivacion: -2, energia: +1}, 34);
const scene9 = new Scene('Te sentás frente a la computadora a estudiar algo que siempre te gustó, pero no entendés nada al principio. Te comparás con otros, sentís que vas lento y pensás que tal vez esto no es para vos. ¿Qué hacés?', [option27, option28, option29]);

const option30 = new Option('Prefiero fallar intentando algo mío que quedarme con las ganas toda la vida.', {inteligencia: +1, energia: +2, motivacion: +2}, 11);
const option31 = new Option('¿Y si primero le pregunto a alguien a ver si vale la pena?', {inteligencia: +1, moral: -1, salud: +1}, 23);
const option32 = new Option('Esto no es urgente… algún día lo haré, cuando esté listo.', {moral: +1, motivacion: -2, energia: -1}, 35);
const scene10 = new Scene('Después de todo lo vivido, tenés una idea: un proyecto propio. Algo que refleja tus valores, tu historia y tus talentos. Pero justo cuando estás por empezarlo, te ataca la duda: "¿y si nadie lo apoya?", "¿y si me expongo y fallo?". ¿Qué hacés?', [option30, option31, option32]);

const option33 = new Option('Este es el momento por el que trabajé. No tengo todo resuelto, pero estoy listo.', {inteligencia: +2, moral: +2, motivacion: +4, salud: +3, energia: +1}, 12);
const option34 = new Option('Quiero esto… pero no estoy seguro de estar listo. Necesito pensar bien las cosas.', {inteligencia: +1, energia: -1, motivacion: -1}, 24);
const option35 = new Option('Estoy bien así. Cambiar tanto ahora podría arruinar todo lo que logré.', {moral: -2, motivacion: -4, salud: +1}, 36);
const scene11 = new Scene('Después de meses de esfuerzo, lágrimas y pequeñas victorias, todo parece alinearse: recibís una oportunidad única. Una oferta laboral de lo que estudiaste, una mudanza, un proyecto que te representa, tu cuerpo responde a los cambios en el gimnasio. Para lograrlo, tendrás que salir de tu zona segura, dejar atrás parte de tu rutina, y comprometerte con todo lo que sos. ¿Qué hacés?', [option33, option34, option35]);

const option36 = new Option('Aunque cueste, hoy quiero intentar cambiar algo. Me voy a sentar y hablar con ellos con calma.', {inteligencia: +2, moral: +1, motivacion: +1}, 2);
const option37 = new Option('No vale la pena meterse. Voy a poner música y olvidarme de esto.', {salud: +1, moral: -1, motivacion: -1}, 14);
const option38 = new Option('Me voy. Que se maten entre ellos, no me importa.', {moral: -2, motivacion: -1, energia: +1}, 27);
const scene13 = new Scene('Estás en casa. Tu familia vuelve a discutir, como tantas veces. Las voces suben, hay dolor, pero también costumbre. Sabés que podrías intentar hacer algo… pero también sabés que nunca cambian. ¿Qué hacés?', [option36, option37, option38]);

const option39 = new Option('Les digo que no. Prefiero descansar y enfocarme en lo mío. Ya no me llena ese ambiente.', {inteligencia: +1, salud: +1, motivacion: +2}, 3);
const option40 = new Option('Voy un rato, como siempre. No es lo ideal, pero al menos no me aburro.', {energia: +1, moral: -1, motivacion: -1}, 15);
const option41 = new Option('No respondo. Me quedo viendo redes toda la noche sin hacer nada.', {salud: -1, motivacion: -2, energia: +1}, 28);
const scene14 = new Scene('Es sábado y tus amigos te escriben para salir. Siempre es lo mismo: fiesta, licor, risas vacías. No sentís que crezcas con ellos, pero seguís diciendo que sí. Esta vez, estás cansado, tenés cosas pendientes… pero no querés quedarte solo. ¿Qué hacés?', [option39, option40, option41]);

const option42 = new Option('No importa si es tarde. Hoy vuelvo a hablar con vos, Dios. No puedo más solo.', {motivacion: +1, salud: +1, moral: +2}, 4);
const option43 = new Option('Dios sabe cómo soy… Él entenderá. No tengo que decirle nada hoy.', {salud: +1, moral: -1, motivacion: -1}, 16);
const option44 = new Option('Mejor duermo. Si ignoro esto, tal vez se me pase mañana.', {moral: -1, motivacion: -2, energia: -1}, 29);
const scene15 = new Scene('Estás solo en tu cuarto, de madrugada. Hace tiempo que no hablás con Dios. No es que no creas, pero sentís que la conexión se apagó. Pensás en orar… pero también sentís que sería hipócrita hacerlo solo cuando estás mal. ¿Qué hacés?', [option42, option43, option44]);

const option45 = new Option('Tenés razón. No estoy bien. Quiero hablarlo y ver si podemos reconstruir esto juntos.', {inteligencia: +2, motivacion: +1, moral: +1}, 5);
const option46 = new Option('Todo está bien, solo estoy cansado. No hagamos drama por tonteras.', {salud: +1, moral: -1, motivacion: -1}, 17);
const option47 = new Option('No respondés. Cambiás de tema, ponés una serie y esperás que se le pase.', {inteligencia: -1, motivacion: -2, energia: +1}, 30);
const scene16 = new Scene('Tu relación sigue, pero ya no se siente igual. Hay mensajes que no contestás, silencios que se hacen largos, y momentos en los que te preguntás si aún están por amor… o por costumbre. Esta noche, después de un silencio incómodo, tu pareja te dice: "¿estás bien? Últimamente te siento distante". ¿Qué hacés?', [option45, option46, option47]);

const option48 = new Option('No puedo seguir así. Voy a escribir lo que siento, aunque sea confuso. Tengo que entenderme.', {inteligencia: +2, motivacion: +1, salud: +1}, 6);
const option49 = new Option('Es solo un día raro. Voy a poner música, distraerme un poco y seguir como siempre.', {energia: +1, inteligencia: -1, motivacion: -1}, 18);
const option50 = new Option('Te tirás en la cama. No hacés nada. Ni redes, ni música. Solo vacío.', {salud: -2, motivacion: -2, moral: +1}, 31);
const scene17 = new Scene('Sentís un peso extraño desde que te despertaste. Todo está "bien", pero nada te emociona. Estás rodeado, pero te sentís solo. Recordás las cosas que querías hacer y en qué lugar estás hoy. La vida no está mal… pero ¿esto era todo? ¿Qué hacés con esa sensación?', [option48, option49, option50]);

const option51 = new Option('Tenés razón. No supe cuidar esto. Pero hoy empiezo a cuidarme a mí.', {motivacion: +2, energia: +1, moral: +1}, 7);
const option52 = new Option('Supongo que esto tenía que pasar. No era para mí..', {energia: +1, moral: -1, motivacion: -1}, 19);
const option53 = new Option('No respondés. Apagás el teléfono y seguís tu vida como si nada hubiera pasado.', {moral: -2, salud: -1, energia: +1}, 32);
const scene18 = new Scene('Una noche recibís un mensaje. Es tu pareja. Dice que no puede más con la distancia, que siente que estás con ella pero no presente. No hay pelea. Solo un adiós calmo, pero doloroso. Mirás la pantalla en silencio. ¿Qué hacés?', [option51, option52, option53]);

const option54 = new Option('No quiero seguir así. No importa si es tarde. Voy a empezar con lo que tengo.', {motivacion: +2, inteligencia: +1, moral: +1}, 8);
const option55 = new Option('Quizás esto es lo que me tocó. No estoy tan mal. Hay gente peor.', {salud: +1, moral: -1, motivacion: -2}, 20);
const option56 = new Option('No quiero pensar más. Mejor pongo una serie y me duermo..', {motivacion: -2, inteligencia: -1, energia: +1}, 33);
const scene19 = new Scene('Estás solo una noche cualquiera. Pensás en todo lo que viviste últimamente: la relación que perdiste, los sueños que postergaste, el tiempo que se te fue. Sentís que podrías cambiar, pero al mismo tiempo pensás: "¿Y si ya es tarde?" ¿Qué hacés con ese pensamiento?', [option54, option55, option56]);

const option57 = new Option('No importa cuánto me haya caído. Voy a volver, aunque sea con 10 minutos..', {motivacion: +2, inteligencia: +1, salud: +1}, 9);
const option58 = new Option('Volver ahora sería incómodo. Mejor cuando me sienta con más ganas.', {energia: +1, salud: -1, motivacion: -1}, 21);
const option59 = new Option('Apagás la luz del baño. No querés seguir viéndote así. Fin del tema.', {moral: -2, motivacion: -1, energia: +1}, 34);
const scene20 = new Scene('Hace semanas que no vas al gym. Al principio eran excusas pequeñas, luego te convenciste de que no importaba tanto. Hoy te mirás al espejo y sentís el retroceso. Nada te gusta. Te da vergüenza volver. Pero algo adentro te dice que no deberías soltar del todo. ¿Qué hacés?', [option57, option58, option59]);

const option60 = new Option('No voy a dejar que el tiempo perdido me frene. Hoy empiezo otra vez, aunque sea con 1 lección.', {motivacion: +2, inteligencia: +1, moral: +1}, 10);
const option61 = new Option('Mejor dejo este curso. Seguro más adelante encuentro algo que me motive más.', {energia: +1, inteligencia: -1, motivacion: -1}, 22);
const option62 = new Option('Cerrás la pestaña. Te vas a TikTok. En el fondo sabés que no vas a volver hoy.', {motivacion: -2, inteligencia: -1, energia: +1}, 35);
const scene21 = new Scene('Abrís el curso online que habías empezado hace meses. Vas por la lección 3… de 40. Sentís vergüenza, pero también culpa. Tenés tiempo, pero no la motivación. Mirás a otros que avanzaron y pensás que ya es tarde para vos. ¿Qué hacés?', [option60, option61, option62]);

const option63 = new Option('Nunca es tarde para construir algo real. Hoy empiezo, aunque sea solo 1 línea.', {motivacion: +2, energia: +1, inteligencia: +1}, 11);
const option64 = new Option('Ya fue. Era una buena idea, pero no soy de esos que terminan cosas grandes.', {motivacion: -1, moral: -1, salud: +1}, 25);
const option65 = new Option('Cerrás todo. Ni siquiera recordás por qué creías que esto iba a funcionar.', {motivacion: -2, inteligencia: -1, energia: +1}, 36);
const scene22 = new Scene('Una vez tuviste una idea que te hacía vibrar: un proyecto tuyo, algo que te representaba. Tenías el nombre, el concepto, hasta un par de diseños guardados. Hoy abrís esa carpeta. Nada cambió. Todo sigue en borrador. Te preguntás si ya es tarde para empezar. ¿Qué hacés?', [option63, option64, option65]);

const option66 = new Option('Estoy cansado de dejar pasar oportunidades. Voy a intentarlo, aunque me tiemblen las piernas.', {motivacion: +2, inteligencia: +1, moral: +1}, 11);
const option67 = new Option('Suena bien… pero no es el momento. Tal vez en otro año.', {motivacion: -1, salud: -1, energia: +1}, 25);
const option68 = new Option('Ignorás el correo. Ni lo abrís. Te da ansiedad solo pensar en responder.', {motivacion: -2, moral: -1, energia: +1}, 37);
const scene23 = new Scene('Te llega una propuesta: una entrevista para un trabajo que siempre quisiste, una oportunidad para mudarte, una beca para estudiar afuera. El tipo de cosas que antes te ilusionaban… pero que ahora te dan miedo. Años de dudas te dejaron lento, inseguro. Esta vez, la decisión es tuya. ¿Qué hacés?', [option66, option67, option68]);

const option69 = new Option('No quiero seguir siendo un fantasma en mi propia casa. Hoy voy a hablar.', {motivacion: +2, inteligencia: +1, moral: +1}, 1);
const option70 = new Option('Siempre fue así. No voy a arreglar nada. Mejor me encierro con los audífonos.', {motivacion: -1, energia: +1, moral: -1}, 14);
const option71 = new Option('Te sentás en una esquina y mirás al suelo. Ni te registran. Y vos ya ni esperás que lo hagan.', {motivacion: -2, salud: -1, moral: -1}, 28);
const scene27 = new Scene('Tu familia discute otra vez. Ya ni sabés por qué. Las voces son ruidos de fondo. Nadie te pregunta nada, nadie te incluye. Vos estás ahí, pero es como si no existieras. Querés irte… pero ni eso hacés. Solo estás. ¿Qué hacés?', [option69, option70, option71]);

const option72 = new Option('Tenés razón. No estoy bien. Y necesito empezar a cambiar eso ya.', {motivacion: +2, moral: +1, inteligencia: +1}, 2);
const option73 = new Option('Todo bien. Solo estoy cansado. Ya se me va a pasar.', {motivacion: -1, energia: +1, moral: -1}, 15);
const option74 = new Option('No decís nada. Fingís una sonrisa, pero no estás ahí. Ni vos sabés qué hacés con ellos.', {motivacion: -2, moral: -1, energia: -1}, 29);
const scene28 = new Scene('Te invitan a salir, como antes. Ni sabés por qué todavía lo hacen. Cada vez hablás menos, cada vez reís menos. Estás ahí, pero sentís que sobrás. Uno te dice: "estás raro últimamente". No sabés qué responder. ¿Qué hacés?', [option72, option73, option74]);

const option75 = new Option('Dios… si todavía estás ahí, no me dejes solo. Aunque no tenga fe, voy a hablarte.', {moral: +2, motivacion: +1, salud: +1}, 3);
const option76 = new Option('Si existe, seguro entiende que no quiero hablar ahora.', {motivacion: -1, salud: +1, inteligencia: -1}, 16);
const option77 = new Option('Te das vuelta en la cama. Cerrás los ojos. Silencio absoluto. Como siempre.', {moral: -2, motivacion: -2, energia: +1}, 30);
const scene29 = new Scene('Una madrugada abrís los ojos de golpe. No sabés por qué. Te sentís vacío, como si nada tuviera sentido. Recordás cuando orabas, cuando sentías algo. Ahora, no sabés si Dios está o si alguna vez estuvo. Pero no preguntás. Solo te hundís un poco más. ¿Qué hacés?', [option75, option76, option77]);

const option78 = new Option('No puedo seguir anestesiado. Esta relación está muerta, y yo no quiero morirme con ella.', {motivacion: +2, inteligencia: +1, moral: +1}, 4);
const option79 = new Option('Al menos no estoy solo. Aunque no sea amor, es compañía.', {motivacion: -1, salud: +1, moral: -1}, 17);
const option80 = new Option('Abrís Instagram. Mirás parejas felices. Cerrás la app. Te acostás a dormir sin decirle nada.', {motivacion: -2, moral: -1, energia: +1}, 31);
const scene30 = new Scene('Seguís con alguien que hace tiempo dejó de preguntarte cómo estás. Vos tampoco hablás mucho. Las salidas se volvieron silencio. Ya no hay peleas, pero tampoco besos. Una noche te preguntás: "¿cuándo dejamos de ser algo?" Pero no hacés nada. ¿Qué hacés?', [option78, option79, option80]);

const option81 = new Option('No puedo seguir así. Tal vez no tenga fuerzas, pero necesito ayuda. Voy a escribirle a alguien.', {motivacion: +2, inteligencia: +1, moral: +1}, 5);
const option82 = new Option('Es solo otra noche rara. Mañana será igual. Mejor intento dormir.', {motivacion: -1, moral: -1, salud: +1}, 18);
const option83 = new Option('Mirás el techo hasta que el cuerpo se apaga solo. Como todas las noches.', {motivacion: -2, salud: -2, energia: +1}, 32);
const scene31 = new Scene('Son las 3 de la madrugada. Estás despierto, sin razón. No hay pensamientos claros, solo una sensación de estar cayendo, lento, sin fin. Ni siquiera llorás. Ya ni eso sale. Te sentís invisible, innecesario, desconectado del mundo. ¿Qué hacés?', [option81, option82, option83]);

const option84 = new Option('No sé cómo volver, pero voy a buscarme. No estoy listo para rendirme.', {motivacion: +2, moral: +1, inteligencia: +1}, 6);
const option85 = new Option('Supongo que esto es crecer: dejar de soñar y aceptar lo que hay.', {motivacion: -1, energia: +1, moral: -1}, 19);
const option86 = new Option('Apagás la luz del baño. Cerrás los ojos. Preferís no pensar.', {motivacion: -2, inteligencia: -1, energia: +1}, 33);
const scene32 = new Scene('Te mirás al espejo. Ya no está tu pareja, te alejaste de tu familia, perdiste conexión con tus amigos. Todo se fue desarmando en silencio, sin discusiones, sin gritos… solo con el tiempo. No fue una decisión. Fue no decidir. No sabés cuándo pasó, pero hoy, estás solo. ¿Qué hacés?', [option84, option85, option86]);

const option87 = new Option('No quiero seguir siendo espectador de mi vida. Algo tiene que cambiar, y empieza hoy.', {motivacion: +2, inteligencia: +1, moral: +1}, 7);
const option88 = new Option('Quizá no todos nacen para lograr grandes cosas. Quizá esto es suficiente.', {motivacion: -1, salud: +1, moral: -1}, 20);
const option89 = new Option('Te das vuelta. Cerrás los ojos. Otro día más sin hacer nada.', {motivacion: -2, moral: -1, energia: +1}, 34);
const scene33 = new Scene('Estás en la cama, mirando el techo. Pensás en lo que fuiste, en lo que podrías haber sido. Sabés que dejaste pasar demasiadas cosas, que hay un vacío que vos mismo alimentaste con cada no-decisón. Una parte de vos grita por un cambio… pero otra susurra que ya es tarde. ¿Qué hacés?', [option87, option88, option89]);

const option90 = new Option('Hoy salgo a caminar, aunque sea 15 minutos. Mi cuerpo necesita que yo lo cuide.', {salud: +2, motivacion: +1, moral: +1}, 8);
const option91 = new Option('Estoy cansado, sí… pero todos vivimos así. Es normal, supongo.', {motivacion: -1, energia: +1, salud: -1}, 21);
const option92 = new Option('Pedís comida por app. Te tirás en el sillón. Mañana será igual.', {salud: -2, motivacion: -1, energia: +1}, 35);
const scene34 = new Scene('Te cuesta levantarte. Subir las gradas te agita. Te vestís sin mirarte al espejo. Hace meses que no te movés, y tu cuerpo te lo está cobrando. Dolor en la espalda, fatiga constante, sueño sin descanso. Sabés que deberías hacer algo. Pero no lo hacés. ¿Qué hacés?', [option90, option91, option92]);

const option93 = new Option('No tengo claridad ni energía… pero no quiero seguir apagándome. Hoy vuelvo a intentar entender una sola cosa.', {inteligencia: +2, motivacion: +1, salud: +1}, 9);
const option94 = new Option('Capaz estudiar nunca fue lo mío. Hay gente que nace para otras cosas.', {motivacion: -1, inteligencia: -1, energia: +1}, 22);
const option95 = new Option('Cerrás la compu. Ponés cualquier video. Y dejás que el día se te escurra.', {motivacion: -2, inteligencia: -2, energia: +1}, 36);
const scene35 = new Scene('Ves una notificación del curso que empezaste hace meses. Ni recordás en qué parte lo dejaste. Tu mente se siente lenta, apagada. Leés una línea y ya querés cerrar todo. Antes querías aprender. Ahora solo querés que el día pase rápido. ¿Qué hacés?', [option93, option94, option95]);

const option96 = new Option('Aunque todo esté en ruinas, quiero volver a creer en mí. Aunque sea con una palabra.', {motivacion: +2, inteligencia: +1, energia: +1}, 10);
const option97 = new Option('Fue solo una idea más. Uno se acostumbra a que los sueños no se cumplan.', {motivacion: -1, salud: +1, moral: -1}, 23);
const option98 = new Option('Cerrás la libreta. Ni siquiera sabés por qué la guardás todavía.', {motivacion: -2, moral: -1, energia: +1}, 37);
const scene36 = new Scene('Encontrás esa libreta donde anotaste tu gran idea. Aquello que querías crear, construir, compartir. Está ahí, cubierta de polvo. Te acordás de lo emocionado que estabas… y de todo lo que no hiciste. No sabés por qué la abriste. Y tampoco sabés si querés seguir mirando. ¿Qué hacés?', [option96, option97, option98]);

const option99 = new Option('No quiero seguir dejando que mi vida se me escape. Hoy salgo de este pozo, aunque sea arrastrándome.', {motivacion: +2, moral: +1, salud: +1}, 11);
const option100 = new Option('Pensar en eso me angustia. Mejor dejo que pase, como todo lo demás.', {motivacion: -1, salud: -1, energia: +1}, 25);
const option101 = new Option('Silenciás el celular. Te tapás la cara con la almohada. Fin del pensamiento.', {motivacion: -2, moral: -2, energia: +1}, 37);
const scene37 = new Scene('Te despierta una notificación: murió un conocido, alguien que alguna vez fue importante para vos. No eran cercanos, pero el golpe te mueve algo. Te hace pensar en lo poco que estás viviendo, en lo mucho que estás dejando pasar. No sabés por qué, pero sentís que este día es distinto. ¿Qué hacés?', [option99, option100, option101]);

const scene12 = new Scene('Lograste lo que pocos logran: no solo cambiaste tu vida, sino que inspiraste a otros con tu ejemplo. Tu trabajo, tu salud, tu fe, tus relaciones y tu proyecto personal florecen porque no te rendiste. Supiste quién eras y lo defendiste.');
const scene25 = new Scene('Avanzaste mucho. No tenés todo resuelto, pero sos alguien nuevo. Tenés heridas, pero también herramientas. El futuro no está garantizado, pero tenés lo necesario para seguir creciendo. Lo importante: no volviste a ser quien eras.');
const scene38 = new Scene('Caminaste el sendero más difícil, pero la carga fue demasiado en algunos tramos. Aunque llegaste lejos, a veces dudaste demasiado de vos mismo. Te queda una lección: no siempre se trata de aguantar, sino de saber cuándo pedir ayuda.');

function finalEvaluation(stats) {
  const valores = Object.values(stats);
  const suma = valores.reduce((total, val) => total + val, 0);
  const promedio = suma / valores.length;

  if (promedio >= 60) {
    return scene12;
  } else if (promedio >= 45) {
    return scene25;
  } else {
    return scene38;
  }
}

let currentScene = scene0;
let playerStats = {
  salud: 50,
  energia: 50,
  motivacion: 50,
  moral: 50,
  inteligencia: 50,
};

const allScenes = {
  0: scene0,
  1: scene1,
  2: scene2,
  3: scene3,
  4: scene4,
  5: scene5,
  6: scene6,
  7: scene7,
  8: scene8,
  9: scene9,
  10: scene10,
  11: scene11,
  12: scene12,
  13: scene13,
  14: scene14,
  15: scene15,
  16: scene16,
  17: scene17,
  18: scene18,
  19: scene19,
  20: scene20,
  21: scene21,
  22: scene22,
  23: scene23,
  25: scene25,
  27: scene27,
  28: scene28,
  29: scene29,
  30: scene30,
  31: scene31,
  32: scene32,
  33: scene33,
  34: scene34,
  35: scene35,
  36: scene36,
  37: scene37,
  38: scene38,
};

function selectOption(index) {
  const selectedOption = currentScene.options[index];

  for (let key in selectedOption.stats) {
    playerStats[key] += selectedOption.stats[key];
  }

  currentScene = allScenes[selectedOption.nextScene];

  if (!currentScene.options || currentScene.options.length === 0) {
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('choice3').style.display = 'none';
  } else {
    document.getElementById('choice1').style.display = 'inline-block';
    document.getElementById('choice2').style.display = 'inline-block';
    document.getElementById('choice3').style.display = 'inline-block';
  }

  updateUI();
}

function updateUI() {
  document.getElementById('scene').innerHTML = `<p>${currentScene.text}</p>`;

  const buttons = [
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3'),
  ];

  if (currentScene.options) {
    currentScene.options.forEach((option, i) => {
      if (buttons[i]) {
        buttons[i].textContent = option.text;
      }
    });
  }

  document.getElementById('stat-health').textContent = playerStats.salud;
  document.getElementById('stat-morale').textContent = playerStats.moral;
  document.getElementById('stat-energy').textContent = playerStats.energia;
  document.getElementById('stat-intelligence').textContent = playerStats.inteligencia;
  document.getElementById('stat-motivation').textContent = playerStats.motivacion;
}

window.onload = function () {
  document.getElementById('choice1').addEventListener('click', () => selectOption(0));
  document.getElementById('choice2').addEventListener('click', () => selectOption(1));
  document.getElementById('choice3').addEventListener('click', () => selectOption(2));
  updateUI();
};