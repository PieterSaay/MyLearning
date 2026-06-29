// CAPS-ooreenstemmende inhoud vir grade 1–7
// Elke vak het vraelysevrae, lesse en flitskaarte

export const SUBJECTS = [
  { id: 'maths',     label: 'Wiskunde',           emoji: '🔢', color: 'bg-blue-500',   light: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-400' },
  { id: 'english',   label: 'Engels',              emoji: '📚', color: 'bg-green-500',  light: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-400' },
  { id: 'science',   label: 'Natuurwetenskappe',   emoji: '🔬', color: 'bg-teal-500',   light: 'bg-teal-100',   text: 'text-teal-700',   border: 'border-teal-400' },
  { id: 'afrikaans', label: 'Afrikaans',            emoji: '🇿🇦', color: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-400' },
  { id: 'lifeskills',label: 'Lewensvaardighede',   emoji: '🌟', color: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-400' },
]

export const GRADES = [1,2,3,4,5,6,7]

export const GRADE_COLORS = {
  1: { bg: 'bg-yellow-400', light: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-400', hex: '#facc15' },
  2: { bg: 'bg-orange-400', light: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-400', hex: '#fb923c' },
  3: { bg: 'bg-green-500',  light: 'bg-green-100',  text: 'text-green-800',  border: 'border-green-500',  hex: '#22c55e' },
  4: { bg: 'bg-blue-500',   light: 'bg-blue-100',   text: 'text-blue-800',   border: 'border-blue-500',   hex: '#3b82f6' },
  5: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-500', hex: '#a855f7' },
  6: { bg: 'bg-red-500',    light: 'bg-red-100',    text: 'text-red-800',    border: 'border-red-500',    hex: '#ef4444' },
  7: { bg: 'bg-teal-500',   light: 'bg-teal-100',   text: 'text-teal-800',   border: 'border-teal-500',   hex: '#14b8a6' },
}

// ─── VRAELYS VRAE ──────────────────────────────────────────────────────────────
export const QUIZ_QUESTIONS = [
  // ── Graad 1 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:1, subject:'maths', question:'Wat is 2 + 3?', options:['4','5','6','7'], answer:1, explanation:'2 en 3 saam maak 5!' },
  { grade:1, subject:'maths', question:'Hoeveel bene het \'n hond?', options:['2','3','4','6'], answer:2, explanation:'Honde het 4 bene.' },
  { grade:1, subject:'maths', question:'Watter getal kom na 9?', options:['8','10','11','7'], answer:1, explanation:'Ons tel ...8, 9, 10!' },
  { grade:1, subject:'maths', question:'Wat is 5 - 2?', options:['2','3','4','1'], answer:1, explanation:'5 minus 2 is 3.' },
  { grade:1, subject:'maths', question:'Hoeveel kante het \'n vierkant?', options:['3','5','4','6'], answer:2, explanation:'\'n Vierkant het 4 gelyke kante.' },
  { grade:1, subject:'maths', question:'Wat is 1 + 1?', options:['1','3','2','4'], answer:2, explanation:'1 plus 1 is gelyk aan 2.' },
  // Engels
  { grade:1, subject:'english', question:'Watter woord rym met "cat"?', options:['dog','hat','sit','run'], answer:1, explanation:'"Cat" en "hat" eindig albei op -at, dus rym hulle!' },
  { grade:1, subject:'english', question:'Wat is die eerste letter van die alfabet?', options:['B','C','A','D'], answer:2, explanation:'A is die heel eerste letter van die alfabet.' },
  { grade:1, subject:'english', question:'Watter woord is \'n kleur?', options:['run','happy','blue','big'], answer:2, explanation:'"Blue" is \'n kleur.' },
  { grade:1, subject:'english', question:'Hoeveel klinkers is in "apple"?', options:['1','2','3','4'], answer:1, explanation:'"Apple" het twee klinkers: a en e.' },
  { grade:1, subject:'english', question:'Watter sin is korrek?', options:['i am happy.','I am happy.','I Am Happy.','i Am happy.'], answer:1, explanation:'Sinne begin met \'n hoofletter.' },
  { grade:1, subject:'english', question:'Watter klank maak die letter "S"?', options:['buh','sss','mmm','ttt'], answer:1, explanation:'S maak \'n "sss" klank soos \'n slang.' },
  // Natuurwetenskappe
  { grade:1, subject:'science', question:'Wat het plante nodig om te groei?', options:['Pizza','Sonlig en water','Sand','Ys'], answer:1, explanation:'Plante het sonlig en water nodig om hul kos te maak en te groei.' },
  { grade:1, subject:'science', question:'Watter dier kan vlieg?', options:['Vis','Hond','Voël','Kat'], answer:2, explanation:'Voëls het vlerke en kan vlieg.' },
  { grade:1, subject:'science', question:'Watter kleur is die lug op \'n sonnige dag?', options:['Groen','Rooi','Geel','Blou'], answer:3, explanation:'Die lug lyk blou as gevolg van die manier waarop lig verstrooi.' },
  { grade:1, subject:'science', question:'Waar leef visse?', options:['In bome','In die sand','In water','In huise'], answer:2, explanation:'Visse leef in water — riviere, mere en die see.' },
  { grade:1, subject:'science', question:'Wat is \'n vrug?', options:['Wortel','Appel','Aartappel','Brood'], answer:1, explanation:'\'n Appel is \'n vrug wat op \'n boom groei.' },
  { grade:1, subject:'science', question:'Waarvan word \'n ruspe?', options:['\'n Padda','\'n Voël','\'n Vlinder','\'n By'], answer:2, explanation:'\'n Ruspe maak \'n kokon en word \'n vlinder!' },
  // Afrikaans
  { grade:1, subject:'afrikaans', question:'Wat is "hond" in Engels?', options:['cat','dog','fish','bird'], answer:1, explanation:'"Hond" in Afrikaans is "dog" in English.' },
  { grade:1, subject:'afrikaans', question:'Hoe sê jy "hello" in Afrikaans?', options:['Dankie','Totsiens','Hallo','Asseblief'], answer:2, explanation:'"Hallo" is die Afrikaanse woord vir "hello".' },
  { grade:1, subject:'afrikaans', question:'Wat beteken "rooi"?', options:['Blue','Green','Red','Yellow'], answer:2, explanation:'"Rooi" is die kleur "red" in Engels.' },
  { grade:1, subject:'afrikaans', question:'Hoe sê jy "goodbye" in Afrikaans?', options:['Hallo','Dankie','Ja','Totsiens'], answer:3, explanation:'"Totsiens" beteken "goodbye".' },
  { grade:1, subject:'afrikaans', question:'Wat is "kat" in Engels?', options:['dog','cat','bird','cow'], answer:1, explanation:'"Kat" is "cat" in English.' },
  { grade:1, subject:'afrikaans', question:'Watter woord beteken "big"?', options:['Klein','Groot','Mooi','Vinnig'], answer:1, explanation:'"Groot" beteken "big" in Afrikaans.' },
  // Lewensvaardighede
  { grade:1, subject:'lifeskills', question:'Wat moet jy doen wanneer jy die pad oorsteek?', options:['Hardloop vinnig','Kyk eers na albei kante','Maak jou oë toe','Loop agteruit'], answer:1, explanation:'Stop altyd, kyk links en regs, dan steek veilig oor.' },
  { grade:1, subject:'lifeskills', question:'Hoeveel keer per dag moet jy jou tande borsel?', options:['Een keer','Twee keer','Nooit','Vyf keer'], answer:1, explanation:'Borsel jou tande in die oggend en saans — twee keer per dag!' },
  { grade:1, subject:'lifeskills', question:'Wat sê jy wanneer iemand jou iets gee?', options:['Asseblief','Jammer','Dankie','Hallo'], answer:2, explanation:'Ons sê "dankie" om te wys ons is dankbaar.' },
  { grade:1, subject:'lifeskills', question:'Wat moet jy doen as \'n vreemdeling met jou praat?', options:['Gaan saam met hulle','Vertel \'n vertroude volwassene','Gee hulle jou naam','Bly stil'], answer:1, explanation:'Vertel altyd \'n vertroude volwassene soos \'n ouer of onderwyser.' },
  { grade:1, subject:'lifeskills', question:'Watter kos is gesond om te eet?', options:['Lekkers','Skyfies','\'n Appel','Koek'], answer:2, explanation:'Vrugte en groente help ons liggame om sterk te word.' },
  { grade:1, subject:'lifeskills', question:'Wat moet jy met rommel doen?', options:['Gooi dit op die grond','Sit dit in \'n asblik','Los dit op \'n stoel','Gee dit aan \'n vriend'], answer:1, explanation:'Ons sit rommel in asblikke om ons omgewing skoon te hou.' },

  // ── Graad 2 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:2, subject:'maths', question:'Wat is 15 + 7?', options:['21','22','23','20'], answer:1, explanation:'15 + 7 = 22. Tel 7 verder van 15 af.' },
  { grade:2, subject:'maths', question:'Wat is 20 - 8?', options:['11','12','13','14'], answer:1, explanation:'20 minus 8 = 12.' },
  { grade:2, subject:'maths', question:'Hoeveel tientalle is in 30?', options:['1','2','3','4'], answer:2, explanation:'30 = 3 tientalle, dus is daar 3 tientalle in 30.' },
  { grade:2, subject:'maths', question:'Watter getal is die grootste?', options:['45','54','49','50'], answer:1, explanation:'54 is die grootste omdat 5 tientalle meer is as 4 tientalle.' },
  { grade:2, subject:'maths', question:'Wat is 3 × 2?', options:['5','6','7','8'], answer:1, explanation:'3 groepe van 2 = 6.' },
  { grade:2, subject:'maths', question:'Watter vorm het 3 kante?', options:['Vierkant','Sirkel','Driehoek','Reghoek'], answer:2, explanation:'\'n Driehoek het presies 3 kante.' },
  // Engels
  { grade:2, subject:'english', question:'Watter woord is \'n selfstandige naamwoord?', options:['run','beautiful','table','quickly'], answer:2, explanation:'\'n Selfstandige naamwoord is \'n persoon, plek of ding. "Table" is \'n ding.' },
  { grade:2, subject:'english', question:'Watter leesteken eindig \'n vraag?', options:['.','!','?',','], answer:2, explanation:'Vrae eindig met \'n vraagteken (?).' },
  { grade:2, subject:'english', question:'Watter woord beteken die teenoorgestelde van "hot"?', options:['warm','cold','big','fast'], answer:1, explanation:'"Cold" is die teenoorgestelde (antoniem) van "hot".' },
  { grade:2, subject:'english', question:'Hoeveel lettergrepe is in "elephant"?', options:['1','2','3','4'], answer:2, explanation:'El-e-phant het 3 lettergrepe.' },
  { grade:2, subject:'english', question:'Watter sin het korrekte leestekens?', options:['i like dogs','I like dogs.','i like dogs.','I like dogs'], answer:1, explanation:'\'n Sin begin met \'n hoofletter en eindig met \'n punt.' },
  { grade:2, subject:'english', question:'Wat is die meervoud van "child"?', options:['childs','children','childes','child'], answer:1, explanation:'"Child" het \'n onreëlmatige meervoud: "children".' },
  // Natuurwetenskappe
  { grade:2, subject:'science', question:'Watter planeet in ons sonnestelsel is die grootste?', options:['Aarde','Mars','Jupiter','Saturnus'], answer:2, explanation:'Jupiter is die grootste planeet — dit is so groot dat al die ander planete daarin kan pas!' },
  { grade:2, subject:'science', question:'Watter sintuig gebruik ons om te ruik?', options:['Oë','Ore','Neus','Vel'], answer:2, explanation:'Ons gebruik ons neus om dinge te ruik.' },
  { grade:2, subject:'science', question:'Watter gas asem mense in?', options:['Koolstofdioksied','Suurstof','Waterstof','Stikstof'], answer:1, explanation:'Ons asem suurstof in. Ons longe gebruik dit om ons liggame energie te gee.' },
  { grade:2, subject:'science', question:'Wat is die lewensiklus van \'n padda?', options:['Eier→Kikkervisie→Padda','Eier→Ruspe→Padda','Saad→Spruit→Padda','Eier→Vis→Padda'], answer:0, explanation:'Paddas begin as eiers, word kikkervisies, dan groei hulle tot paddas.' },
  { grade:2, subject:'science', question:'Watter materiaal is magneties?', options:['Hout','Plastiek','Yster','Glas'], answer:2, explanation:'Yster (en staal) word na magnete aangetrek.' },
  { grade:2, subject:'science', question:'Waar kom die son op?', options:['Noord','Suid','Oos','Wes'], answer:2, explanation:'Die son kom elke oggend in die Ooste op.' },
  // Afrikaans
  { grade:2, subject:'afrikaans', question:'Wat is die meervoud van "kind"?', options:['kinders','kinds','kindere','kinde'], answer:0, explanation:'"Kind" se meervoud is "kinders" (children).' },
  { grade:2, subject:'afrikaans', question:'Watter woord is \'n kleur?', options:['lekker','speel','geel','vinnig'], answer:2, explanation:'"Geel" is die kleur "yellow".' },
  { grade:2, subject:'afrikaans', question:'Hoe sê jy "thank you" in Afrikaans?', options:['Asseblief','Dankie','Hallo','Totsiens'], answer:1, explanation:'"Dankie" beteken "thank you".' },
  { grade:2, subject:'afrikaans', question:'Wat beteken die woord "skool"?', options:['Home','Park','School','Shop'], answer:2, explanation:'"Skool" is die plek waar jy leer — "school" in English.' },
  { grade:2, subject:'afrikaans', question:'Watter sin is korrek?', options:['ek is bly.','Ek is bly.','Ek Is Bly.','ek Is bly.'], answer:1, explanation:'Sinne begin met \'n hoofletter.' },
  { grade:2, subject:'afrikaans', question:'Wat beteken "seun"?', options:['Girl','Boy','Mother','Father'], answer:1, explanation:'"Seun" beteken "boy" in Afrikaans.' },
  // Lewensvaardighede
  { grade:2, subject:'lifeskills', question:'Wat is \'n gesonde ontbyt?', options:['Skyfies en koeldrank','Graanvlokkies en melk','Lekkers en sap','Koek en tee'], answer:1, explanation:'Graanvlokkies en melk gee jou energie en voedingstowwe om die dag te begin.' },
  { grade:2, subject:'lifeskills', question:'Wat beteken \'n verkeerslig wanneer dit ROOI is?', options:['Ry vinnig','Stadiger ry','Stop','Draai links'], answer:2, explanation:'Rooi beteken STOP — wag altyd vir groen.' },
  { grade:2, subject:'lifeskills', question:'Watter een van hierdie is \'n vorm van oefening?', options:['TV kyk','Middagete eet','Sokker speel','Lees'], answer:2, explanation:'Oefening soos sokker speel hou jou liggaam gesond en sterk.' },
  { grade:2, subject:'lifeskills', question:'Hoe moet jy iemand behandel wat hartseer is?', options:['Lag vir hulle','Ignoreer hulle','Wees vriendelik en luister','Loop weg'], answer:2, explanation:'Om vriendelik te wees en te luister help mense om beter te voel.' },
  { grade:2, subject:'lifeskills', question:'Wat beteken die woord "gemeenskap"?', options:['\'n Skoolvak','Die mense in jou omgewing','\'n Soort kos','\'n Sport'], answer:1, explanation:'\'n Gemeenskap is die groep mense wat in dieselfde omgewing woon en mekaar help.' },
  { grade:2, subject:'lifeskills', question:'Waarom is dit belangrik om jou hande te was?', options:['Om hulle wit te maak','Om kieme te verwyder','Om hulle koud te maak','Om hulle lekker te laat ruik'], answer:1, explanation:'Hand was verwyder kieme en verhoed jou om siek te word.' },

  // ── Graad 3 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:3, subject:'maths', question:'Wat is 45 + 37?', options:['72','82','83','73'], answer:1, explanation:'45 + 37 = 82. Tel die ene: 5+7=12, dra 1 oor. Tientalle: 4+3+1=8.' },
  { grade:3, subject:'maths', question:'Wat is 100 - 54?', options:['44','46','56','34'], answer:1, explanation:'100 - 54 = 46.' },
  { grade:3, subject:'maths', question:'Wat is 6 × 7?', options:['36','42','48','56'], answer:1, explanation:'6 × 7 = 42. Die 6-tafel: 6,12,18,24,30,36,42.' },
  { grade:3, subject:'maths', question:'Wat is 56 ÷ 8?', options:['6','7','8','9'], answer:1, explanation:'56 ÷ 8 = 7 omdat 8 × 7 = 56.' },
  { grade:3, subject:'maths', question:'Watter breuk van hierdie vorm is geskadu as 2 van 4 dele geskadu is?', options:['1/4','1/3','1/2','3/4'], answer:2, explanation:'2 uit 4 dele = 2/4 = 1/2 (een helfte).' },
  { grade:3, subject:'maths', question:'Wat is die omtrek van \'n vierkant met sy 5 cm?', options:['15 cm','20 cm','25 cm','10 cm'], answer:1, explanation:'Omtrek = 4 × sy = 4 × 5 = 20 cm.' },
  // Engels
  { grade:3, subject:'english', question:'Watter woord is \'n byvoeglike naamwoord?', options:['jump','slowly','beautiful','sing'], answer:2, explanation:'Byvoeglike naamwoorde beskryf selfstandige naamwoorde. "Beautiful" beskryf hoe iets lyk.' },
  { grade:3, subject:'english', question:'Wat is die verlede tyd van "run"?', options:['runned','running','runs','ran'], answer:3, explanation:'"Run" is onreëlmatig — sy verlede tyd is "ran".' },
  { grade:3, subject:'english', question:'Watter woord is \'n sinoniem vir "happy"?', options:['sad','angry','joyful','tired'], answer:2, explanation:'"Joyful" beteken dieselfde as "happy" — albei wys \'n positiewe gevoel.' },
  { grade:3, subject:'english', question:'Waarmee help \'n woordeboek jou?', options:['Wiskundeantwoorde','Betekenisse van woorde','Adresse','Resepte'], answer:1, explanation:'\'n Woordeboek gee jou die definisie en spelling van woorde.' },
  { grade:3, subject:'english', question:'Watter sin gebruik "their" korrek?', options:['Their going home.','The dog wagged their tail.','The children brought their books.','Their is a park nearby.'], answer:2, explanation:'"Their" is besitlik — dit wys iets behoort aan hulle.' },
  { grade:3, subject:'english', question:'Watter soort teks is \'n resep?', options:['Verhalend','Gedig','Instruksioneel','Verslag'], answer:2, explanation:'\'n Resep gee instruksies oor hoe om kos te maak, dus is dit instruksioneel.' },
  // Natuurwetenskappe
  { grade:3, subject:'science', question:'Wat is die drie toestande van materie?', options:['Warm, koud, louwarm','Vastestof, vloeistof, gas','Groot, klein, medium','Hard, sag, taai'], answer:1, explanation:'Materie bestaan as \'n vastestof, vloeistof of gas afhangende van temperatuur.' },
  { grade:3, subject:'science', question:'Wat is die funksie van wortels in \'n plant?', options:['Maak kos','Absorbeer water en voedingstowwe','Produseer sade','Vang sonlig'], answer:1, explanation:'Wortels anker die plant en absorbeer water en minerale uit die grond.' },
  { grade:3, subject:'science', question:'Watter planeet is die naaste aan die Son?', options:['Venus','Aarde','Merkurius','Mars'], answer:2, explanation:'Merkurius is die eerste planeet en die naaste aan die Son.' },
  { grade:3, subject:'science', question:'Watter soort dier is \'n walvis?', options:['Vis','Reptiel','Soogdier','Voël'], answer:2, explanation:'Walvisse is soogdiere — hulle asem lug in, is warmbloedig en voed hul babas met melk.' },
  { grade:3, subject:'science', question:'Wat gebeur met water wanneer dit tot 100°C verhit word?', options:['Dit vries','Dit verdamp (kook)','Dit bly dieselfde','Dit word ys'], answer:1, explanation:'Water kook by 100°C en word stoom (gas).' },
  { grade:3, subject:'science', question:'Waarom het ons die Son nodig?', options:['Vir reën','Vir lig en energie','Vir wind','Vir grond'], answer:1, explanation:'Die Son gee ons lig, warmte en energie waarop alle lewende dinge afhanklik is.' },
  // Afrikaans
  { grade:3, subject:'afrikaans', question:'Wat is die teenoorgestelde van "groot"?', options:['vinnig','mooi','klein','lank'], answer:2, explanation:'Die teenoorgestelde (antoniem) van "groot" is "klein".' },
  { grade:3, subject:'afrikaans', question:'Watter woord is \'n selfstandige naamwoord?', options:['hardloop','mooi','tafel','vinnig'], answer:2, explanation:'Selfstandige naamwoorde is name van dinge. "Tafel" is \'n ding.' },
  { grade:3, subject:'afrikaans', question:'Hoe sê jy "I am hungry" in Afrikaans?', options:['Ek is bly.','Ek is honger.','Ek is moeg.','Ek is siek.'], answer:1, explanation:'"Ek is honger" beteken "I am hungry".' },
  { grade:3, subject:'afrikaans', question:'Wat is die meervoud van "boom"?', options:['boomte','bome','booms','boom'], answer:1, explanation:'"Boom" se meervoud is "bome" (trees).' },
  { grade:3, subject:'afrikaans', question:'Watter sin gebruik "het" korrek?', options:['Ek het gister gespeel.','Ek het môre speel.','Ek het nou speel.','Ek het leer.'], answer:0, explanation:'"Het" word gebruik vir die verlede tyd: "Ek het gister gespeel."' },
  { grade:3, subject:'afrikaans', question:'Wat beteken "reën"?', options:['Sun','Snow','Rain','Wind'], answer:2, explanation:'"Reën" beteken "rain" in Afrikaans.' },
  // Lewensvaardighede
  { grade:3, subject:'lifeskills', question:'Wat is \'n begroting?', options:['\'n Soort kos','\'n Plan vir geldbesteding','\'n Skoolvak','\'n Spel'], answer:1, explanation:'\'n Begroting is \'n plan wat wys hoeveel geld jy het en hoe jy dit sal bestee.' },
  { grade:3, subject:'lifeskills', question:'Wat beteken "verantwoordelikheid"?', options:['Vinnig wees','Jou pligte doen en betroubaar wees','Slim wees','Speletjies speel'], answer:1, explanation:'Verantwoordelikheid beteken om te doen wat jy moet doen en betroubaar te wees.' },
  { grade:3, subject:'lifeskills', question:'Watter een van hierdie is \'n natuurramp?', options:['\'n Partytjie','\'n Vloed','\'n Verjaardag','\'n Vakansie'], answer:1, explanation:'\'n Vloed is \'n natuurramp wat veroorsaak word deur te veel water.' },
  { grade:3, subject:'lifeskills', question:'Wat is afknouery?', options:['Speel met vriende','Iemand help','Iemand herhaaldelik seer maak of gemeen wees','Kos deel'], answer:2, explanation:'Afknouery is wanneer iemand herhaaldelik gemeen of seerpikkend teenoor \'n ander persoon is.' },
  { grade:3, subject:'lifeskills', question:'Waarom is dit belangrik om in verkiesings te stem?', options:['Om geld te wen','Om leiers vir ons land te kies','Om skoolafsnyding te kry','Om vriende te ontmoet'], answer:1, explanation:'Stemming laat burgers kies wie hul gemeenskap sal lei en besluite neem.' },
  { grade:3, subject:'lifeskills', question:'Waarvoor is die Suid-Afrikaanse vlag bekend?', options:['Om een kleur te hê','Sy baie helder kleure en die Y-vorm','Om alles groen te wees','Om net sterre te hê'], answer:1, explanation:'Die Suid-Afrikaanse vlag het 6 kleure en \'n unieke Y-vorm wat eenheid in diversiteit verteenwoordig.' },

  // ── Graad 4 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:4, subject:'maths', question:'Wat is 234 × 4?', options:['836','926','936','846'], answer:2, explanation:'234 × 4: 4×4=16, skryf 6 dra 1; 4×3+1=13, skryf 3 dra 1; 4×2+1=9. Antwoord: 936.' },
  { grade:4, subject:'maths', question:'Wat is die waarde van 7 in 4 735?', options:['7','70','700','7000'], answer:2, explanation:'In 4 735 is die 7 in die honderdetal-posisie, dus is sy waarde 700.' },
  { grade:4, subject:'maths', question:'Wat is 3/4 van 40?', options:['10','20','30','15'], answer:2, explanation:'1/4 van 40 = 10, dus 3/4 = 3 × 10 = 30.' },
  { grade:4, subject:'maths', question:'Wat is \'n priemgetal?', options:['9','15','7','21'], answer:2, explanation:'7 is \'n priemgetal omdat dit slegs deur 1 en 7 deelbaar is.' },
  { grade:4, subject:'maths', question:'Wat is die oppervlakte van \'n reghoek 6 cm × 4 cm?', options:['10 cm²','20 cm²','24 cm²','24 cm'], answer:2, explanation:'Oppervlakte = lengte × breedte = 6 × 4 = 24 cm².' },
  { grade:4, subject:'maths', question:'Wat is 0.5 as \'n breuk?', options:['1/4','1/3','1/5','1/2'], answer:3, explanation:'0.5 = 5/10 = 1/2 (een helfte).' },
  // Engels
  { grade:4, subject:'english', question:'Wat is \'n metafoor?', options:['\'n Vergelyking wat "like" of "as" gebruik','\'n Direkte vergelyking wat sê iets IS iets anders','\'n Soort leesteken','\'n Soort selfstandige naamwoord'], answer:1, explanation:'\'n Metafoor sê iets IS iets anders, bv. "Life is a journey."' },
  { grade:4, subject:'english', question:'Watter woord is \'n werkwoord?', options:['beautiful','happiness','quickly','dance'], answer:3, explanation:'Werkwoorde is aksie- of synde woorde. "Dance" is \'n aksie.' },
  { grade:4, subject:'english', question:'Wat is die korrekte meervoud van "wolf"?', options:['wolfs','wolves','wolfes','wolve'], answer:1, explanation:'"Wolf" → "wolves" (verander f na v en voeg -es by).' },
  { grade:4, subject:'english', question:'Wat beteken "prefix"?', options:['Letters wat aan die einde van \'n woord bygevoeg word','Letters wat aan die begin van \'n woord bygevoeg word','\'n Soort sin','\'n Leesteken'], answer:1, explanation:'\'n Voorvoegsel word aan die begin van \'n woord gevoeg om sy betekenis te verander, bv. "un-" in "unhappy".' },
  { grade:4, subject:'english', question:'Watter tekssoort sou jy gebruik om iemand te oorreed?', options:['Verhalend','Resep','Oorredingsopstel','Dagboek'], answer:2, explanation:'\'n Oorredingsopstel gebruik argumente en bewyse om die leser te oortuig.' },
  { grade:4, subject:'english', question:'Wat is \'n vergelyking (simile)?', options:['\'n Vergelyking wat "like" of "as" gebruik','\'n Baie lang woord','\'n Soort werkwoord','\'n Leesteken'], answer:0, explanation:'\'n Simile vergelyk deur "like" of "as" te gebruik, bv. "As brave as a lion."' },
  // Natuurwetenskappe
  { grade:4, subject:'science', question:'Hoe word lewende dinge genoem wat hul eie kos maak?', options:['Verbruikers','Produsente','Ontbinders','Roofdiere'], answer:1, explanation:'Produsente (plante) maak hul eie kos deur fotosintese.' },
  { grade:4, subject:'science', question:'Wat is fotosintese?', options:['Hoe diere asemhaal','Hoe plante kos maak met sonlig','Hoe water verdamp','Hoe rotse vorm'], answer:1, explanation:'Fotosintese: plante gebruik sonlig, water en CO₂ om kos en suurstof te produseer.' },
  { grade:4, subject:'science', question:'Watter laag van die Aarde is die warmste?', options:['Kors','Mantel','Buitenste kern','Binneste kern'], answer:3, explanation:'Die binneste kern is die warmste deel van die Aarde — gemaak van soliede yster en nikkel.' },
  { grade:4, subject:'science', question:'Wat is die eenheid van elektriese stroom?', options:['Watt','Volt','Ampere','Ohm'], answer:2, explanation:'Elektriese stroom word in Ampere (Amps) gemeet.' },
  { grade:4, subject:'science', question:'Wat is die voedselketting?', options:['\'n Spyskaart','Die volgorde waarin lewende dinge mekaar eet','\'n Soort resep','Hoe kos gaar gemaak word'], answer:1, explanation:'\'n Voedselketting wys wat wat eet in die natuur, bv. plant → insek → padda → arend.' },
  { grade:4, subject:'science', question:'Watter krag trek voorwerpe na die Aarde toe?', options:['Magnetisme','Wrywing','Swaartekrag','Elektrisiteit'], answer:2, explanation:'Swaartekrag is die krag wat alle voorwerpe na die middel van die Aarde toe trek.' },
  // Afrikaans
  { grade:4, subject:'afrikaans', question:'Wat is die verlede tyd van "eet"?', options:['geëet','geeet','geeit','gegeet'], answer:0, explanation:'"Eet" se verlede tyd is "geëet" (the past tense of "eat").' },
  { grade:4, subject:'afrikaans', question:'Watter woord is \'n byvoeglike naamwoord?', options:['spring','rooi','tafel','lag'], answer:1, explanation:'Byvoeglike naamwoorde beskryf selfstandige naamwoorde. "Rooi" beskryf \'n kleur.' },
  { grade:4, subject:'afrikaans', question:'Wat is die meervoud van "vrou"?', options:['vroue','vrous','vrouens','vrowe'], answer:0, explanation:'"Vrou" se meervoud is "vroue" (women).' },
  { grade:4, subject:'afrikaans', question:'Hoe sê jy "We are going to school" in Afrikaans?', options:['Ons gaan na skool.','Ons was by skool.','Ons bly by skool.','Ons speel op skool.'], answer:0, explanation:'"Ons gaan na skool" beteken "We are going to school".' },
  { grade:4, subject:'afrikaans', question:'Wat is \'n werkwoord?', options:['\'n Woord wat \'n ding beskryf','\'n Aksiewoord','\'n Naam van \'n plek','\'n Kleurwoord'], answer:1, explanation:'\'n Werkwoord is \'n aksiewoord, soos "loop", "eet", of "speel".' },
  { grade:4, subject:'afrikaans', question:'Wat beteken "nagmerrie"?', options:['A sweet dream','A nightmare','A bedtime story','A lullaby'], answer:1, explanation:'"Nagmerrie" beteken "nightmare" in Afrikaans.' },
  // Lewensvaardighede
  { grade:4, subject:'lifeskills', question:'Waarvoor staan MIV?', options:['Menslike Ongelooflike Virus','Menslike Immuniteitsgebreksvirus','Gesonde Immuunvirus','Hoë Interne Virus'], answer:1, explanation:'MIV staan vir Menslike Immuniteitsgebreksvirus — dit verswak die immuunstelsel.' },
  { grade:4, subject:'lifeskills', question:'Wat is portuurgroepdruk?', options:['Druk van ouers','Invloed van vriende om iets te doen','Skoolwerk druk','Fisiese druk'], answer:1, explanation:'Portuurgroepdruk is wanneer vriende jou beïnvloed om dinge te doen wat jy dalk nie wil doen nie.' },
  { grade:4, subject:'lifeskills', question:'Wat beteken "demokrasie"?', options:['Heerskappy deur een persoon','Regering deur die volk','Heerskappy deur die weermag','Geen regering'], answer:1, explanation:'Demokrasie beteken die volk het die mag en kies hul leiers deur stemming.' },
  { grade:4, subject:'lifeskills', question:'Wat is die naam van Suid-Afrika se grondwet?', options:['Die Handves','Die Vryheidsakte','Die Grondwet van die Republiek van Suid-Afrika','Die Nasionale Wet'], answer:2, explanation:'Suid-Afrika se Grondwet het in 1996 in werking getree en beskerm almal se regte.' },
  { grade:4, subject:'lifeskills', question:'Watter vitamien kry ons van sonlig?', options:['Vitamien A','Vitamien B','Vitamien C','Vitamien D'], answer:3, explanation:'Ons vel maak Vitamien D wanneer dit aan sonlig blootgestel word — belangrik vir sterk bene.' },
  { grade:4, subject:'lifeskills', question:'Wat is stereotipering?', options:['Kuns maak','Aannames maak oor alle mense in \'n groep','\'n Soort musiek','\'n Taal leer'], answer:1, explanation:'Stereotipering is om onregverdige, vaste aannames te maak oor \'n hele groep mense.' },

  // ── Graad 5 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:5, subject:'maths', question:'Wat is 25% van 200?', options:['25','50','75','100'], answer:1, explanation:'25% = 1/4. \'n Kwart van 200 is 50.' },
  { grade:5, subject:'maths', question:'Vereenvoudig: 12/16', options:['2/3','3/4','4/5','1/2'], answer:1, explanation:'Deel albei deur 4: 12÷4=3, 16÷4=4. Dus 12/16 = 3/4.' },
  { grade:5, subject:'maths', question:'Wat is 2.4 × 3?', options:['6.2','7.2','7.4','6.4'], answer:1, explanation:'2.4 × 3 = 7.2. Dink: 24 × 3 = 72, dan deel deur 10.' },
  { grade:5, subject:'maths', question:'Wat is die volume van \'n kubus met sy 3 cm?', options:['9 cm³','18 cm³','27 cm³','12 cm³'], answer:2, explanation:'Volume van kubus = sy³ = 3×3×3 = 27 cm³.' },
  { grade:5, subject:'maths', question:'Wat is die KGV van 4 en 6?', options:['2','8','12','24'], answer:2, explanation:'Veelvoude van 4: 4,8,12... Veelvoude van 6: 6,12... Eerste gemeenskaplike is 12.' },
  { grade:5, subject:'maths', question:'As \'n sak rys R35 kos en jy koop 4 sakke, hoeveel kleingeld kry jy terug van R200?', options:['R50','R60','R65','R40'], answer:1, explanation:'4×35=R140. Kleingeld = R200 - R140 = R60.' },
  // Engels
  { grade:5, subject:'english', question:'Wat is \'n idioom?', options:['\'n Soort gedig','\'n Frase met \'n nie-letterlike betekenis','\'n Grammatikareël','\'n Soort werkwoord'], answer:1, explanation:'Idiome is uitdrukkings waarvan die betekenis verskil van die letterlike woorde, bv. "It\'s raining cats and dogs."' },
  { grade:5, subject:'english', question:'Wat is die onderwerp van: "The fast car zoomed past"?', options:['fast','car','zoomed','past'], answer:1, explanation:'Die onderwerp is wie of wat die sin oor handel — "The fast car".' },
  { grade:5, subject:'english', question:'Watter woord vul hierdie sin korrek in: "She __ to school every day"?', options:['walk','walks','walking','walked'], answer:1, explanation:'Met "she" (derde persoon enkelvoud) in teenwoordige tyd, voeg -s by: "walks".' },
  { grade:5, subject:'english', question:'Wat is die doel van \'n opskrif?', options:['Om \'n paragraaf te beëindig','Om jou te vertel waaroor \'n teks handel','Om items te lys','Om \'n karakter te beskryf'], answer:1, explanation:'\'n Opskrif vertel jou die onderwerp of hoofgedagte van die teks wat volg.' },
  { grade:5, subject:'english', question:'Wat is \'n antoniem?', options:['\'n Woord met \'n soortgelyke betekenis','\'n Woord met die teenoorgestelde betekenis','\'n Versinkte woord','\'n Baie lang woord'], answer:1, explanation:'Antonieme is woorde met teenoorgestelde betekenisse, bv. "hot" en "cold".' },
  { grade:5, subject:'english', question:'Watter soort sin is "What time does the film start?"?', options:['Stelling','Vraag','Uitroep','Bevel'], answer:1, explanation:'Hierdie is \'n vraag omdat dit inligting vra en met \'n vraagteken eindig.' },
  // Natuurwetenskappe
  { grade:5, subject:'science', question:'Wat is die chemiese formule vir water?', options:['CO₂','H₂O','O₂','NaCl'], answer:1, explanation:'Water bestaan uit 2 waterstofatome en 1 suurstofatoom: H₂O.' },
  { grade:5, subject:'science', question:'Wat is die funksie van chlorofil?', options:['Absorbeer water','Gee plante hul groen kleur en absorbeer sonlig','Produseer sade','Breek grond af'], answer:1, explanation:'Chlorofil is die groen pigment in plante wat sonlig opvang vir fotosintese.' },
  { grade:5, subject:'science', question:'Wat is \'n ekosisteem?', options:['\'n Soort dier','\'n Gemeenskap van lewende dinge en hul omgewing','\'n Wetenskaplike instrument','\'n Soort grond'], answer:1, explanation:'\'n Ekosisteem sluit alle lewende organismes en hul fisiese omgewing in \'n area in.' },
  { grade:5, subject:'science', question:'Wat veroorsaak dag en nag?', options:['Die Maan wat om die Aarde beweeg','Die Aarde wat op sy as roteer','Die Son wat om die Aarde beweeg','Wolke wat sonlig blokkeer'], answer:1, explanation:'Die Aarde roteer (draai) elke 24 uur op sy as en veroorsaak dag en nag.' },
  { grade:5, subject:'science', question:'Watter orgaan pomp bloed deur die liggaam?', options:['Longe','Lewer','Hart','Nier'], answer:2, explanation:'Die hart is \'n spier wat bloed deur die liggaam se bloedvate pomp.' },
  { grade:5, subject:'science', question:'Wat is \'n hernubare energiebron?', options:['Steenkool','Petrol','Sonkrag','Aardgas'], answer:2, explanation:'Sonkrag kom van die Son en is hernubaar — dit sal nie opraak nie.' },
  // Afrikaans
  { grade:5, subject:'afrikaans', question:'Wat is \'n idioom?', options:['\'n Versie','\'n Uitdrukking met \'n figuurlike betekenis','\'n Lang woord','\'n Grammatikareël'], answer:1, explanation:'\'n Idioom is \'n uitdrukking waarvan die betekenis verskil van die letterlike woorde.' },
  { grade:5, subject:'afrikaans', question:'Wat is die lydende vorm van "Die seun gooi die bal"?', options:['Die bal is gegooi deur die seun','Die seun het die bal gegooi','Die bal gooi die seun','Die seun gooi na die bal'], answer:0, explanation:'Lydende vorm: "Die bal is gegooi deur die seun" (passive voice).' },
  { grade:5, subject:'afrikaans', question:'Watter woord is \'n bywoord?', options:['skool','vinnig','tafel','rooi'], answer:1, explanation:'\'n Bywoord beskryf hoe iets gedoen word. "Vinnig" beskryf die manier van handeling.' },
  { grade:5, subject:'afrikaans', question:'Wat beteken "omgewing"?', options:['A building','A person','The environment/surroundings','A type of food'], answer:2, explanation:'"Omgewing" beteken "environment" of "surroundings" in Afrikaans.' },
  { grade:5, subject:'afrikaans', question:'Hoe skryf jy 456 in Afrikaans?', options:['vierhonderd ses-en-vyftig','vyfhonderd vier-en-ses','vierduisend vyftig-ses','vierhonderd vyftig-ses'], answer:0, explanation:'456 in Afrikaans: vierhonderd ses-en-vyftig.' },
  { grade:5, subject:'afrikaans', question:'Wat is die verkleiningsvorm van "kat"?', options:['kattie','katjie','katje','katke'], answer:1, explanation:'Die verkleinwoord van "kat" is "katjie" (a small cat / kitten).' },
  // Lewensvaardighede
  { grade:5, subject:'lifeskills', question:'Wat is puberteit?', options:['\'n Soort sport','Die fisiese veranderinge wat die liggaam ondergaan tydens groei van kind na volwassene','\'n Skoolvak','\'n Kulturele viering'], answer:1, explanation:'Puberteit is die tyd wanneer die liggaam verander en ontwikkel van \'n kind se liggaam na \'n volwassene se liggaam.' },
  { grade:5, subject:'lifeskills', question:'Wat beteken dit om goeie selfagting te hê?', options:['Dikwels kwaad wees','Om selfversekerd en positief oor jouself te voel','Ander vermy','Die beste in sport wees'], answer:1, explanation:'Goeie selfagting beteken dat jy jouself waardeer, selfversekerd voel en in jou eie waarde glo.' },
  { grade:5, subject:'lifeskills', question:'Wat is die belang van die Handves van Regte in Suid-Afrika?', options:['Dit lys sportspanne','Dit beskerm die regte van alle mense in Suid-Afrika','Dit beskryf SA-kos','Dit lys skoolreëls'], answer:1, explanation:'Die Handves van Regte (Hoofstuk 2 van die Grondwet) waarborg regte soos gelykheid, waardigheid en vryheid vir almal.' },
  { grade:5, subject:'lifeskills', question:'Wat is middelmisbruik?', options:['Medisyne korrek gebruik','Dwelms of alkohol op skadelike maniere gebruik','Te veel suiker eet','Nie oefen nie'], answer:1, explanation:'Middelmisbruik is die skadelike gebruik van dwelms, alkohol of ander stowwe wat gesondheid beskadig.' },
  { grade:5, subject:'lifeskills', question:'Wat is die verskil tussen \'n behoefte en \'n wens?', options:['Daar is geen verskil nie','\'n Behoefte is noodsaaklik om te oorleef; \'n wens is iets ekstra','\'n Wens is belangriker','Behoeftes is dinge wat jy koop'], answer:1, explanation:'Behoeftes is noodsaaklik (kos, water, skuiling). Wense is ekstra\'s wat ons wil hê maar sonder kan leef.' },
  { grade:5, subject:'lifeskills', question:'Wat is xenofobie?', options:['\'n Vrees vir diere','\'n Vrees of haat teenoor buitelanders of mense van ander lande','\'n Soort sport','\'n Skoolvak'], answer:1, explanation:'Xenofobie is vooroordeel of vyandigheid teenoor mense van ander lande — dit gaan teen menseregte in.' },

  // ── Graad 6 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:6, subject:'maths', question:'Wat is 15% van 360?', options:['42','54','45','36'], answer:1, explanation:'15% van 360 = 0.15 × 360 = 54.' },
  { grade:6, subject:'maths', question:'Los op vir x: 3x + 7 = 22', options:['x=4','x=5','x=6','x=3'], answer:1, explanation:'3x = 22-7 = 15, dus x = 15÷3 = 5.' },
  { grade:6, subject:'maths', question:'Wat is die gemiddelde van: 4, 8, 6, 10, 12?', options:['6','8','10','9'], answer:1, explanation:'Gemiddelde = som ÷ aantal = (4+8+6+10+12)÷5 = 40÷5 = 8.' },
  { grade:6, subject:'maths', question:'Wat is 2³?', options:['5','6','8','9'], answer:2, explanation:'2³ = 2×2×2 = 8.' },
  { grade:6, subject:'maths', question:'Skakel 3/8 om na \'n desimale getal.', options:['0.25','0.375','0.38','0.3'], answer:1, explanation:'3 ÷ 8 = 0.375.' },
  { grade:6, subject:'maths', question:'\'n Winkel gee 20% afslag op R250. Wat is die saleprys?', options:['R180','R200','R210','R220'], answer:1, explanation:'Afslag = 20% van 250 = 50. Saleprys = 250 - 50 = R200.' },
  // Engels
  { grade:6, subject:'english', question:'Wat is die lydende vorm?', options:['Wanneer die onderwerp die aksie uitvoer','Wanneer die aksie op die onderwerp uitgevoer word','\'n Soort byvoeglike naamwoord','\'n Tyd'], answer:1, explanation:'Lydende vorm: "The book was read by Maria" (die onderwerp ontvang die aksie).' },
  { grade:6, subject:'english', question:'Wat is \'n bysin?', options:['\'n Soort leesteken','\'n Groep woorde met \'n onderwerp en werkwoord','\'n Paragraaf','\'n Soort byvoeglike naamwoord'], answer:1, explanation:'\'n Bysin het \'n onderwerp en \'n werkwoord. "When she sang" is \'n bysin.' },
  { grade:6, subject:'english', question:'Identifiseer die literêre tegniek: "The wind whispered secrets"', options:['Vergelyking','Metafoor','Personifikasie','Alliterasie'], answer:2, explanation:'Personifikasie gee menslike eienskappe aan nie-menslike dinge. Wind kan nie werklik fluister nie.' },
  { grade:6, subject:'english', question:'Wat is die verskil tussen denotasie en konnotasie?', options:['Geen verskil','Denotasie is letterlike betekenis; konnotasie is geassosieerde gevoelens','Konnotasie is altyd negatief','Denotasie is verouderd'], answer:1, explanation:'Denotasie = die woordeboekbetekenis. Konnotasie = die emosionele assosiasies van \'n woord.' },
  { grade:6, subject:'english', question:'Watter sin bevat \'n afhanklike bysin?', options:['She ran fast.','Although it was raining, they played outside.','The dog barked.','I ate lunch.'], answer:1, explanation:'"Although it was raining" is \'n afhanklike bysin — dit kan nie alleen staan nie.' },
  { grade:6, subject:'english', question:'Wat is ironie?', options:['Om direk te sê wat jy bedoel','Wanneer woorde gebruik word om die teenoorgestelde te beteken van wat gesê word','\'n Soort rym','\'n Vergelyking'], answer:1, explanation:'Ironie is wanneer woorde die teenoorgestelde beteken, of wanneer gebeure die teenoorgestelde uitval van wat verwag word.' },
  // Natuurwetenskappe
  { grade:6, subject:'science', question:'Wat is Newton se Eerste Wet van Beweging?', options:['Elke aksie het \'n gelyke en teenoorgestelde reaksie','\'n Voorwerp bly in rus of beweeg in \'n reguit lyn tensy \'n krag daarop inwerk','Krag is gelyk aan massa maal versnelling','Voorwerpe trek mekaar aan'], answer:1, explanation:'Newton se 1ste Wet (Traagheid): \'n voorwerp sal sy beweging nie verander nie tensy \'n krag daarop inwerk.' },
  { grade:6, subject:'science', question:'Wat is die verskil tussen \'n mengsel en \'n verbinding?', options:['Geen verskil','\'n Mengsel kan maklik geskei word; \'n verbinding kan nie maklik geskei word nie','\'n Verbinding is altyd vloeistof','\'n Mengsel het net een stof'], answer:1, explanation:'In \'n mengsel behou stowwe hul eienskappe en kan geskei word. Verbindings is chemies gebind en moeiliker om te skei.' },
  { grade:6, subject:'science', question:'Wat is die waterkringloop?', options:['Hoe visse swem','Die deurlopende beweging van water deur verdamping, kondensasie en neerslag','Hoe ons water drink','Hoe plante groei'], answer:1, explanation:'Die waterkringloop: verdamping → waterdamp styg → kondensasie vorm wolke → neerslag (reën/sneeu).' },
  { grade:6, subject:'science', question:'Wat is die funksie van die senuweestelsel?', options:['Om bloed te pomp','Om kos te verteer','Om boodskappe tussen die brein en liggaam te dra','Om bene te maak'], answer:2, explanation:'Die senuweestelsel stuur elektriese seine tussen die brein en alle dele van die liggaam.' },
  { grade:6, subject:'science', question:'Wat is \'n fossiel?', options:['Slegs \'n soort rots','Bewaarde oorblyfsels of spore van antieke lewende dinge','\'n Soort plant','\'n Soort metaal'], answer:1, explanation:'Fossiele is bewaarde oorblyfsels, afdrukke of spore van organismes uit die verre verlede.' },
  { grade:6, subject:'science', question:'Wat is biodiversiteit?', options:['\'n Soort eksperiment','Die verskeidenheid van alle lewensvorme in \'n ekosisteem','\'n Enkele diersoort','\'n Weerpatroon'], answer:1, explanation:'Biodiversiteit verwys na die verskeidenheid van lewende organismes in \'n gegewe area — hoe meer verskeidenheid, hoe gesonder die ekosisteem.' },
  // Afrikaans
  { grade:6, subject:'afrikaans', question:'Wat is \'n beknopte bysin?', options:['\'n Selfstandige sin','\'n Afhanklike sin','\'n Lang sin','\'n Vraagsin'], answer:1, explanation:'\'n Beknopte bysin is \'n afhanklike sin wat op \'n hoofsin staatmaak.' },
  { grade:6, subject:'afrikaans', question:'Wat is die lydende vorm van "Hy eet die brood"?', options:['Die brood is deur hom geëet.','Hy het die brood geëet.','Die brood eet hom.','Hy eet die brood gou.'], answer:0, explanation:'Lydende vorm: "Die brood is deur hom geëet." (Passive: the bread was eaten by him.)' },
  { grade:6, subject:'afrikaans', question:'Watter taal het Afrikaans geword?', options:['Dutch (Nederlands)','French','German','Portuguese'], answer:0, explanation:'Afrikaans het hoofsaaklik ontwikkel uit Nederlands (Dutch) wat deur setlaars na Suid-Afrika gebring is.' },
  { grade:6, subject:'afrikaans', question:'Wat beteken "beskawing"?', options:['A river','Civilisation','A mountain','A type of food'], answer:1, explanation:'"Beskawing" beteken "civilisation" in Afrikaans.' },
  { grade:6, subject:'afrikaans', question:'Identifiseer die figuurlike taal: "Die wind sing in die bome."', options:['Vergelyking','Personifikasie','Alliterasie','Metafoor'], answer:1, explanation:'Personifikasie gee menslike eienskappe aan iets nie-menslik. Wind kan nie werklik sing nie.' },
  { grade:6, subject:'afrikaans', question:'Wat is die meervoud van "mens" in formele Afrikaans?', options:['mensens','mense','menses','mensers'], answer:1, explanation:'Die meervoud van "mens" is "mense" (people/humans).' },
  // Lewensvaardighede
  { grade:6, subject:'lifeskills', question:'Wat is die verskil tussen aërobie en anaërobie oefening?', options:['Geen verskil','Aërobie gebruik suurstof vir volgehoue aktiwiteit; anaërobie is kort intense uitbarstings','Anaërobie is veiliger','Aërobie is net vir volwassenes'], answer:1, explanation:'Aërobiese oefening (hardloop, fietsry) gebruik suurstof. Anaërobies (sprintloop, gewigte) verbrand gestoorte energie.' },
  { grade:6, subject:'lifeskills', question:'Wat is geslagsgebaseerde geweld (GGG)?', options:['Geweld in sport','Geweld gerig teen iemand as gevolg van hul geslag','Huiswerk probleme','\'n Skoolvak'], answer:1, explanation:'GGG is geweld of skade wat teen \'n persoon gerig word as gevolg van hul geslag — dit is \'n ernstige menseregteskenning.' },
  { grade:6, subject:'lifeskills', question:'Wat is menseregte?', options:['Reëls net vir volwassenes','Regte waarmee elke persoon gebore word, ongeag ras of geslag','Regte net vir Suid-Afrikaners','Skoolreëls'], answer:1, explanation:'Menseregte is universeel — elke persoon op Aarde het hulle op grond van die feit dat hulle menslik is.' },
  { grade:6, subject:'lifeskills', question:'Wat beteken "versoening" in Suid-Afrika se konteks?', options:['\'n Kompetisie wen','Verdeling heel en vrede bou na apartheid','\'n Soort wiskundeberekening','\'n Sportspan vorm'], answer:1, explanation:'Versoening beteken dat verskillende groepe saamkom, wonde uit die verlede heel en \'n vreedsame toekoms bou.' },
  { grade:6, subject:'lifeskills', question:'Wat is \'n gebalanseerde dieet?', options:['Slegs vrugte eet','Die regte hoeveelhede van alle voedselgroepe eet','Baie min eet','Slegs proteïen eet'], answer:1, explanation:'\'n Gebalanseerde dieet sluit koolhidrate, proteïene, vette, vitamiene, minerale en water in die regte proporsies in.' },
  { grade:6, subject:'lifeskills', question:'Wat is eerste hulp?', options:['\'n Skoolvak','Onmiddellike sorg wat aan \'n beseerde of siek persoon gegee word voordat professionele hulp aankom','\'n Soort medisyne','\'n Sportevent'], answer:1, explanation:'Eerste hulp is onmiddellike basiese behandeling wat aan iemand gegee word wat seer is of siek is totdat behoorlike mediese hulp beskikbaar is.' },

  // ── Graad 7 ────────────────────────────────────────────────────────────────
  // Wiskunde
  { grade:7, subject:'maths', question:'Los op: 2x - 5 = 11', options:['x=6','x=7','x=8','x=9'], answer:2, explanation:'2x = 11+5 = 16, x = 16÷2 = 8.' },
  { grade:7, subject:'maths', question:'Wat is die helling van \'n lyn wat deur (0,0) en (3,6) gaan?', options:['1','2','3','6'], answer:1, explanation:'Helling = styging/loop = (6-0)/(3-0) = 6/3 = 2.' },
  { grade:7, subject:'maths', question:'Vereenvoudig: 5a + 3b - 2a + b', options:['3a+4b','7a+4b','3a+2b','7a+2b'], answer:0, explanation:'Kombineer gelyksoortige terme: 5a-2a=3a, 3b+b=4b. Antwoord: 3a+4b.' },
  { grade:7, subject:'maths', question:'Wat is die waarskynlikheid om \'n 4 op \'n standaard dobbelklip te gooi?', options:['1/4','1/5','1/6','1/3'], answer:2, explanation:'\'n Dobbelklip het 6 gelyke kante. Waarskynlikheid om 4 te gooi = 1/6.' },
  { grade:7, subject:'maths', question:'Wat is die stelling van Pythagoras?', options:['a+b=c','a²+b²=c²','a×b=c','a²-b²=c²'], answer:1, explanation:'In \'n regte driehoek: a²+b²=c² waar c die skuinssy (langste sy) is.' },
  { grade:7, subject:'maths', question:'Wat is -8 + 3?', options:['-11','-5','5','11'], answer:1, explanation:'-8 + 3 = -5. Begin by -8, beweeg 3 stappe regs op die getallelyn.' },
  // Engels
  { grade:7, subject:'english', question:'Wat is die tema van \'n teks?', options:['Die omgewing','Die sentrale boodskap of idee van die teks','Die karakters','Die intrige'], answer:1, explanation:'Die tema is die onderliggende boodskap of les wat die skrywer deur die teks oordra.' },
  { grade:7, subject:'english', question:'Wat is \'n retoriese vraag?', options:['\'n Vraag wat gevra word om inligting te kry','\'n Vraag wat vir effek gevra word, sonder om \'n antwoord te verwag','\'n Soort leesteken','\'n Onderhoudsvraag'], answer:1, explanation:'Retoriese vrae word vir effek of klem gevra, nie om \'n antwoord te kry nie: "Isn\'t it obvious?"' },
  { grade:7, subject:'english', question:'Wat is die verskil tussen formele en informele taal?', options:['Formeel word saam met vriende gebruik; informeel by die werk','Formeel is professioneel/gestruktureerd; informeel is ongedwonge/ontspanne','Geen verskil','Formeel gebruik straattaal'], answer:1, explanation:'Formele taal volg standaardreëls en word in professionele omgewings gebruik. Informeel is ontspanne, gebruik saam met vriende.' },
  { grade:7, subject:'english', question:'Wat is alliterasie?', options:['Woorde wat rym','Herhaling van dieselfde medeklinkerklank aan die begin van nabygelegen woorde','\'n Soort vergelyking','Die teenoorgestelde van \'n woord'], answer:1, explanation:'Alliterasie: "Peter Piper picked a peck of pickled peppers" — die P-klank herhaal.' },
  { grade:7, subject:'english', question:'Wat is die intrige van \'n verhaal?', options:['Wie die karakters is','Waar die verhaal afspeel','Die volgorde van gebeure','Die les van die verhaal'], answer:2, explanation:'Die intrige is die volgorde van gebeure wat die verhaal saamstel.' },
  { grade:7, subject:'english', question:'Wat beteken "aflei" in lees?', options:['\'n Woord opsoek','Hardop lees','Leidrade in die teks gebruik om uit te vind wat nie direk gesê word nie','\'n Sin kopieer'], answer:2, explanation:'Aflei beteken "tussen die reëls lees" — getuienis en redenasie gebruik om te verstaan wat die skrywer impliseer.' },
  // Natuurwetenskappe
  { grade:7, subject:'science', question:'Wat is die verskil tussen spoed en snelheid?', options:['Geen verskil','Spoed is hoe vinnig; snelheid is spoed MET rigting','Snelheid is vinniger as spoed','Spoed sluit rigting in'], answer:1, explanation:'Spoed = hoe vinnig (skalaar). Snelheid = spoed in \'n spesifieke rigting (vektor).' },
  { grade:7, subject:'science', question:'Wat is \'n atoom?', options:['Die kleinste lewende ding','Die basiese eenheid van materie wat alle stowwe saamstel','\'n Soort sel','\'n Soort energie'], answer:1, explanation:'\'n Atoom is die kleinste eenheid van \'n element wat die chemiese eienskappe van daardie element behou.' },
  { grade:7, subject:'science', question:'Waarvoor staan DNS?', options:['Deoksiribonukleïensuur','Digitale Nukleïese Rangskikking','Dinamiese Natuurlike Suur','Digte Nukleï Samestelling'], answer:0, explanation:'DNS staan vir Deoksiribonukleïensuur — dit dra die genetiese instruksies vir alle lewende organismes.' },
  { grade:7, subject:'science', question:'Wat is die kweekhuiseffek?', options:['Plante in \'n glashuis kweek','Die vastevang van hitte in die Aarde se atmosfeer deur gasse soos CO₂','\'n Soort eksperiment','Glas maak'], answer:1, explanation:'Die kweekhuiseffek: kweekhuisgasse vang hitte van die Son vas in die Aarde se atmosfeer en warm die planeet op.' },
  { grade:7, subject:'science', question:'Wat is \'n sel?', options:['\'n Tronkkamer','Die basiese eenheid van lewe in alle lewende organismes','\'n Soort battery','\'n Rekenaaronderdeel'], answer:1, explanation:'Die sel is die basiese strukturele en funksionele eenheid van alle lewende organismes.' },
  { grade:7, subject:'science', question:'Wat is die verskil tussen oorerflike en aangeleerde eienskappe?', options:['Geen verskil','Oorerflike eienskappe kom van ouers via gene; aangeleerde eienskappe ontwikkel gedurende jou lewe','Aangeleerde eienskappe is geneties','Oorerflike eienskappe verander mettertyd'], answer:1, explanation:'Oorerflike eienskappe (oogkleur, bloedtipe) kom van jou gene. Aangeleerde eienskappe (\'n litteken, \'n vaardigheid) ontwikkel uit lewenservarings.' },
  // Afrikaans
  { grade:7, subject:'afrikaans', question:'Wat is \'n toutologisme?', options:['\'n Kort sin','Die onnodige herhaling van dieselfde betekenis','\'n Persoonlike verwysing','\'n Vraagsin'], answer:1, explanation:'\'n Toutologisme is wanneer dieselfde idee onnodig herhaal word, bv. "gratis geskenk".' },
  { grade:7, subject:'afrikaans', question:'Wat beteken "polemiek"?', options:['A type of food','A serious debate or argument','A type of dance','A school subject'], answer:1, explanation:'"Polemiek" beteken \'n hewige debat of argument, veral oor \'n kontroversiële onderwerp.' },
  { grade:7, subject:'afrikaans', question:'Wat is \'n statiese werkwoord?', options:['\'n Aksiewerkwoord','\'n Werkwoord wat \'n toestand beskryf (nie \'n aksie)','\'n Verlede tyd','\'n Vraagwoord'], answer:1, explanation:'Statiese werkwoorde beskryf toestande: "weet", "het", "is" — nie fisieke aksies nie.' },
  { grade:7, subject:'afrikaans', question:'Identifiseer die retoriese vraag: ', options:['Wat is jou naam?','Hoe laat is dit?','Is dit nie pragtig nie?','Waar bly jy?'], answer:2, explanation:'"Is dit nie pragtig nie?" is \'n retoriese vraag — dit word vir effek gevra, nie vir \'n antwoord nie.' },
  { grade:7, subject:'afrikaans', question:'Wat is die verskil tussen denotatiewe en konnotatiewe betekenis?', options:['Geen verskil','Denotatief = letterlike betekenis; konnotatief = gevoelswaarde','Konnotatief is altyd negatief','Denotatief is verouderd'], answer:1, explanation:'Denotatiewe betekenis is die woordeboekbetekenis. Konnotatiewe betekenis sluit gevoelens en assosiasies in.' },
  { grade:7, subject:'afrikaans', question:'Wat is \'n eufemisme?', options:['\'n Sterk belediging','\'n Sagter woord of frase vir iets onaangenaam','\'n Tipe rym','\'n Metafoor'], answer:1, explanation:'\'n Eufemisme is \'n sagter of beleefder uitdrukking, bv. "hy het heengegaan" in plaas van "hy het gesterf".' },
  // Lewensvaardighede
  { grade:7, subject:'lifeskills', question:'Wat is die betekenis van "ubuntu"?', options:['\'n Rekenaarstesel','Ek is omdat ons is — \'n filosofie van menslike verbandenheid','\'n Soort kos','\'n Suid-Afrikaanse sport'], answer:1, explanation:'Ubuntu is \'n Afrika-filosofie wat beteken "Ek is omdat ons is" — dit beklemtoon gemeenskap, medelye en gedeelde menslikheid.' },
  { grade:7, subject:'lifeskills', question:'Wat is emosionele intelligensie?', options:['Baie slim in Wiskunde wees','Die vermoë om jou eie en ander se emosies te verstaan en te bestuur','\'n Soort toets','Fisiese fiksheid'], answer:1, explanation:'Emosionele intelligensie (EI) is die vermoë om emosies effektief te identifiseer, te verstaan, te bestuur en te gebruik.' },
  { grade:7, subject:'lifeskills', question:'Wat beteken "volhoubare ontwikkeling"?', options:['Meer fabrieke bou','Ontwikkeling wat huidige behoeftes bevredig sonder om toekomstige generasies te benadeel','Sagteware ontwikkel','Meer kos verbou'], answer:1, explanation:'Volhoubare ontwikkeling bevredig huidige behoeftes sonder om die vermoë van toekomstige generasies te benadeel om hul eie behoeftes te bevredig.' },
  { grade:7, subject:'lifeskills', question:'Wat is die rol van die Nasionale Vervolgingsgesag (NVG) in Suid-Afrika?', options:['Om wette te maak','Om strafregtelike sake namens die staat te vervolg','Om belasting in te vorder','Om paaie te bou'], answer:1, explanation:'Die NVG vervolg mense wat van misdade beskuldig word in Suid-Afrika se howe in die naam van die staat.' },
  { grade:7, subject:'lifeskills', question:'Wat is die betekenis van "integriteit"?', options:['Fisieke krag','Eerlik wees en sterk morele beginsels hê','Gewild wees','Slim wees'], answer:1, explanation:'Integriteit beteken om eerlik, betroubaar te wees en by jou morele beginsels te staan selfs wanneer dit moeilik is.' },
  { grade:7, subject:'lifeskills', question:'Wat sê die Grondwet oor onderwys?', options:['Onderwys is net vir burgers','Elkeen het die reg op basiese onderwys','Onderwys eindig by Graad 7','Slegs seuns kan skool gaan'], answer:1, explanation:'Artikel 29 van die Grondwet bepaal dat elkeen die reg op basiese onderwys het, insluitend basiese volwassene-onderwys.' },
]

// ─── LESSE ─────────────────────────────────────────────────────────────────────
export const LESSONS = [
  // Graad 1 Wiskunde
  { grade:1, subject:'maths', title:'Tel tot 20', emoji:'🔢',
    content:'Kom ons tel van 1 tot 20! Sê elke getal hardop: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ... 11, 12, 13, 14, 15, 16, 17, 18, 19, 20! Goed gedaan! 🎉',
    keyPoints:['Getalle gaan in volgorde van 1 tot 20','Na 10 kom 11, 12, 13...','Ons gebruik getalle elke dag — om speelgoed, lekkers en vriende te tel!'] },
  { grade:1, subject:'english', title:'Die Alfabet', emoji:'🔤',
    content:'Die alfabet het 26 letters! A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Die klinkers (vowels) is spesiaal: A, E, I, O, U. Al die ander letters is medeklinkers (consonants).',
    keyPoints:['Daar is 26 letters in die alfabet','A, E, I, O, U is klinkers (vowels)','Elke woord het ten minste een klinker nodig'] },
  { grade:1, subject:'science', title:'Lewende en Nie-lewende Dinge', emoji:'🌱',
    content:'Sommige dinge is LEWENDIG en sommige is NIE lewendig nie. Lewende dinge groei, eet, asemhaal en kan babas hê. Plante en diere is lewende dinge. Klippe, stoele en motors is nie-lewende dinge.',
    keyPoints:['Lewende dinge groei en verander','Lewende dinge het kos en water nodig','Nie-lewende dinge groei nie en asemhaal nie'] },
  { grade:1, subject:'afrikaans', title:'Kleure / Colours', emoji:'🎨',
    content:'In Afrikaans, colours are: Rooi (Red) 🔴, Blou (Blue) 🔵, Geel (Yellow) 🟡, Groen (Green) 🟢, Oranje (Orange) 🟠, Pers (Purple), Pienk (Pink), Wit (White), Swart (Black).',
    keyPoints:['"Rooi" = Red, "Blou" = Blue, "Geel" = Yellow','Oefen om elke kleur hardop te sê','Kyk rond en noem die kleure wat jy sien in Afrikaans!'] },
  { grade:1, subject:'lifeskills', title:'My Liggaam', emoji:'🧍',
    content:'Ons liggame is wonderlik! Ons het: \'n KOP met oë, ore, \'n neus en \'n mond. \'n LYF met arms en hande. BENE met voete en tone. Ons moet na ons liggame omsien deur gesonde kos te eet, water te drink, te oefen en genoeg te slaap.',
    keyPoints:['Jou liggaam het baie dele, elk met \'n taak','Gesond eet hou jou liggaam sterk','Slaap, oefening en water is baie belangrik'] },

  // Graad 4 Wiskunde
  { grade:4, subject:'maths', title:'Breuke Verstaan', emoji:'🍕',
    content:'\'n Breuk wys \'n deel van \'n geheel. As jy \'n pizza in 4 gelyke snye sny en 1 eet, het jy 1/4 (een kwart) geëet. Die onderste getal (noemer) wys hoeveel gelyke dele. Die boonste getal (teller) wys hoeveel dele jy het.',
    keyPoints:['Die noemer (onder) = totale gelyke dele','Die teller (bo) = dele wat jy het','1/2 = helfte, 1/4 = kwart, 3/4 = drie kwarte'] },
  { grade:4, subject:'science', title:'Voedselkettings', emoji:'🦁',
    content:'\'n Voedselketting wys wat wat eet in die natuur. Dit begin altyd met \'n plant (produsent). Dan kom \'n plantvreter (herbivoor), dan \'n vleisvreter (karnivoor). Voorbeeld: Gras → Sprinkaan → Padda → Arend. Energie gaan langs die ketting oor.',
    keyPoints:['Voedselkettings begin met produsente (plante)','Herbivore eet plante; karnivore eet diere','Energie vloei van een organisme na die volgende'] },

  // Graad 4 Afrikaans (CAPS-ooreenstemmend)
  { grade:4, subject:'afrikaans', title:'Selfstandige Naamwoorde (Nouns)', emoji:'📝',
    content:'\'n Selfstandige naamwoord is die naam van \'n persoon, plek, dier of ding.\n\n👤 Persone: onderwyser, kind, meisie\n📍 Plekke: skool, dorp, Suid-Afrika\n🐘 Diere: olifant, kat, voël\n🪑 Dinge: tafel, boek, bal\n\nEienaamwoorde begin altyd met \'n hoofletter: Pieter, Kaapstad, Suid-Afrika.\nGewone naamwoorde begin met \'n kleinletter: seun, stad, land.',
    keyPoints:['\'n Selfstandige naamwoord noem \'n persoon, plek, dier of ding','Eienaamwoorde (name) begin met \'n hoofletter','Gewone selfstandige naamwoorde begin met \'n kleinletter','Meervoud: voeg -e, -s, of -ers by (bv. boek → boeke, seun → seuns)'] },

  { grade:4, subject:'afrikaans', title:'Werkwoorde (Verbs)', emoji:'🏃',
    content:'\'n Werkwoord is \'n aksiewoord — dit wys wat iemand of iets DOEN of IS.\n\n✅ Teenwoordige tyd (nou): Ek LOOP skool toe. Sy LEES \'n boek.\n⏪ Verlede tyd (toe): Ek HET gister gespeel. Hy HET die kos geëet.\n⏩ Toekomende tyd (later): Ons SAL môre oefen.\n\nDie hulpwerkwoord "het" help ons die verlede tyd vorm:\nEk het geloop. Jy het geëet. Hulle het gespeel.',
    keyPoints:['Werkwoorde wys aksie of toestand','Teenwoordige tyd: ek loop, hy eet','Verlede tyd gebruik "het" + ge-: ek het geloop','Toekomende tyd gebruik "sal": ek sal loop'] },

  { grade:4, subject:'afrikaans', title:'Byvoeglike Naamwoorde (Adjectives)', emoji:'🌈',
    content:'\'n Byvoeglike naamwoord BESKRYF \'n selfstandige naamwoord. Dit vertel ons hoe iets lyk, voel, klink of ruik.\n\nVoorbeelde:\n• Die GROOT boom. (groot beskryf die boom)\n• \'n ROOI appel. (rooi beskryf die appel)\n• Die KLEIN hond. (klein beskryf die hond)\n\nWanneer \'n byvoeglike naamwoord voor \'n naamwoord staan, kry dit soms \'n -e uitgang:\n• groot → die groot seun / \'n groot-e seun\n• mooi → die mooi kind\n• lekker → lekker kos',
    keyPoints:['Byvoeglike naamwoorde beskryf selfstandige naamwoorde','Hulle vertel hoe iets lyk, voel of ruik','Voorbeelde: groot, klein, rooi, mooi, lekker, vinnig','Byvoeglike naamwoorde antwoord die vraag: "Watter soort?"'] },

  { grade:4, subject:'afrikaans', title:'Sinsbou en Leestekens', emoji:'✏️',
    content:'\'n SIN is \'n groep woorde wat \'n volledige gedagte uitdruk.\n\nElke sin het:\n1. \'n ONDERWERP (wie of wat doen iets?): Die seun...\n2. \'n GESEGDE (wat doen hy/sy?): ...hardloop.\n\nLeestekens:\n• . Punt — gebruik aan die einde van \'n sin\n• ? Vraagteken — gebruik aan die einde van \'n vraag\n• ! Uitroepteken — gebruik as iets opwindend of dringend is\n• , Komma — gebruik om items te skei\n\nRëels:\n✅ Elke sin begin met \'n HOOFLETTER.\n✅ Elke sin eindig met \'n leesteken.',
    keyPoints:['Elke sin het \'n onderwerp en \'n gesegde','Sinne begin met \'n hoofletter','\'n Punt (.) eindig \'n stelling','\'n Vraagteken (?) eindig \'n vraag','\'n Uitroepteken (!) wys sterk gevoel'] },

  { grade:4, subject:'afrikaans', title:'Meervoud en Verkleinwoorde', emoji:'🔡',
    content:'MEERVOUD — meer as een:\n• -e: boek → boeke, seun → seuns, tafel → tafels\n• -ers: kind → kinders, broer → broers\n• Onreëlmatig: mens → mense, vrou → vroue\n\nVERKLEINWOORDE — kleiner of liefliker weergawe:\nVoeg -tjie, -jie, of -ie by:\n• kat → katjie 🐱\n• boom → boompie 🌱\n• hond → hondjie 🐶\n• huis → huisie 🏠\n• bal → balletjie ⚽\n\nVerkleinwoorde kan ook liefde of kleinheid aandui:\n"Kom hier, my kindjie!"',
    keyPoints:['Meervoud wys meer as een (bv. boek → boeke)','Voeg -e, -s, -ers by vir meervoud','Verkleinwoorde voeg -tjie of -jie by (bv. kat → katjie)','Verkleinwoorde wys dat iets klein of oulik is'] },

  // Graad 7 Wiskunde
  { grade:7, subject:'maths', title:'Inleiding tot Algebra', emoji:'🔣',
    content:'Algebra gebruik letters (soos x en y) om onbekende getalle voor te stel. Voorbeeld: As x + 5 = 12, wat is x? Ons los op deur die teenoorgestelde bewerking te doen: x = 12 - 5 = 7. Doen altyd dieselfde ding aan ALBEI kante van die vergelyking.',
    keyPoints:['Letters (veranderlikes) stel onbekende getalle voor','Los vergelykings op deur teenoorgestelde bewerkings te doen','Balanseer altyd albei kante van die vergelyking'] },
  { grade:7, subject:'science', title:'Struktuur van die Atoom', emoji:'⚛️',
    content:'\'n Atoom het drie soorte deeltjies: PROTONE (positiewe lading, in die kern), NEUTRONE (geen lading, in die kern) en ELEKTRONE (negatiewe lading, baan om die kern). Die atoomgetal = aantal protone. Verskillende elemente het verskillende aantal protone.',
    keyPoints:['Atome het protone, neutrone en elektrone','Protone en neutrone is in die kern','Elektrone baan om die kern en het negatiewe lading'] },
]

// ─── FLITSKAARTE ───────────────────────────────────────────────────────────────
export const FLASHCARDS = [
  // Graad 1
  { grade:1, subject:'maths', front:'2 + 2 = ?', back:'4', emoji:'🔢' },
  { grade:1, subject:'maths', front:'5 - 3 = ?', back:'2', emoji:'🔢' },
  { grade:1, subject:'maths', front:'Hoeveel vingers het jy op een hand?', back:'5', emoji:'✋' },
  { grade:1, subject:'maths', front:'1 + 1 + 1 = ?', back:'3', emoji:'🔢' },
  { grade:1, subject:'maths', front:'10 - 5 = ?', back:'5', emoji:'🔢' },
  { grade:1, subject:'english', front:'Wat is die teenoorgestelde van BIG?', back:'Small / Little', emoji:'📏' },
  { grade:1, subject:'english', front:'Noem \'n klinker (VOWEL)', back:'A, E, I, O of U', emoji:'🔤' },
  { grade:1, subject:'english', front:'Hoe spel jy die getal 3?', back:'T-H-R-E-E', emoji:'3️⃣' },
  { grade:1, subject:'english', front:'Wat is \'n selfstandige naamwoord (noun)?', back:'A person, place, or thing', emoji:'📚' },
  { grade:1, subject:'english', front:'Waarmee begin \'n sin altyd?', back:'A capital letter', emoji:'🆙' },
  { grade:1, subject:'science', front:'Wat het plante nodig om te groei?', back:'Sonlig, water, grond', emoji:'🌱' },
  { grade:1, subject:'science', front:'Watter dier op land is die grootste?', back:'Afrika-olifant 🐘', emoji:'🐘' },
  { grade:1, subject:'science', front:'Watter kleur is \'n gesonde blaar?', back:'Groen 🍃', emoji:'🍃' },
  { grade:1, subject:'science', front:'Hoeveel bene het \'n insek?', back:'6 bene', emoji:'🐛' },
  { grade:1, subject:'science', front:'Op watter planeet woon ons?', back:'Aarde 🌍', emoji:'🌍' },
  { grade:1, subject:'afrikaans', front:'Hond', back:'Dog 🐶', emoji:'🐶' },
  { grade:1, subject:'afrikaans', front:'Kat', back:'Cat 🐱', emoji:'🐱' },
  { grade:1, subject:'afrikaans', front:'Skool', back:'School 🏫', emoji:'🏫' },
  { grade:1, subject:'afrikaans', front:'Dankie', back:'Thank you 🙏', emoji:'🙏' },
  { grade:1, subject:'afrikaans', front:'Rooi', back:'Red 🔴', emoji:'🔴' },
  { grade:1, subject:'lifeskills', front:'Noem 3 gesonde kosse', back:'Vrugte, groente, brood 🥦', emoji:'🥗' },
  { grade:1, subject:'lifeskills', front:'Wat sê jy wanneer jy iets wil hê?', back:'"Asseblief" 😊', emoji:'😊' },
  { grade:1, subject:'lifeskills', front:'Wanneer moet jy jou hande was?', back:'Voor eet en na die toilet', emoji:'🧼' },
  { grade:1, subject:'lifeskills', front:'Watter kleur is \'n STOP-teken?', back:'Rooi 🛑', emoji:'🛑' },
  { grade:1, subject:'lifeskills', front:'Noem \'n vertroude volwassene met wie jy kan praat', back:'Ouer, onderwyser of voog', emoji:'👨‍👩‍👧' },

  // Graad 4
  { grade:4, subject:'maths', front:'Wat is 7 × 8?', back:'56', emoji:'🔢' },
  { grade:4, subject:'maths', front:'Wat is 1/2 + 1/4?', back:'3/4', emoji:'🍕' },
  { grade:4, subject:'maths', front:'Oppervlakteformule vir \'n reghoek?', back:'O = lengte × breedte', emoji:'📐' },
  { grade:4, subject:'maths', front:'Wat is 144 ÷ 12?', back:'12', emoji:'🔢' },
  { grade:4, subject:'maths', front:'Wat is \'n faktor van 12?', back:'1, 2, 3, 4, 6 of 12', emoji:'🔢' },
  { grade:4, subject:'science', front:'Wat is fotosintese?', back:'Plante maak kos met sonlig, CO₂ en water', emoji:'🌿' },
  { grade:4, subject:'science', front:'Wat is \'n produsent in \'n voedselketting?', back:'\'n Plant (maak sy eie kos)', emoji:'🌱' },
  { grade:4, subject:'science', front:'Wat is die chemiese simbool vir water?', back:'H₂O', emoji:'💧' },
  { grade:4, subject:'science', front:'Hoeveel planete is in ons sonnestelsel?', back:'8 planete', emoji:'🪐' },
  { grade:4, subject:'science', front:'Watter krag hou ons op die grond?', back:'Swaartekrag', emoji:'🌍' },

  // Graad 4 Afrikaans (CAPS-ooreenstemmend)
  { grade:4, subject:'afrikaans', front:'Wat is \'n selfstandige naamwoord?', back:'Die naam van \'n persoon, plek, dier of ding 📝', emoji:'📝' },
  { grade:4, subject:'afrikaans', front:'Gee \'n voorbeeld van \'n eienaam', back:'Pieter, Kaapstad, Suid-Afrika (begin met hoofletter) 🔠', emoji:'🔠' },
  { grade:4, subject:'afrikaans', front:'Wat is \'n werkwoord?', back:'\'n Aksiewoord — dit wys wat iemand DOEN (bv. loop, eet, speel) 🏃', emoji:'🏃' },
  { grade:4, subject:'afrikaans', front:'Hoe vorm jy die verlede tyd?', back:'het + ge- + werkwoord (bv. Ek het geloop. Sy het geëet.) ⏪', emoji:'⏪' },
  { grade:4, subject:'afrikaans', front:'Wat is \'n byvoeglike naamwoord?', back:'\'n Woord wat \'n selfstandige naamwoord BESKRYF (bv. groot, rooi, mooi) 🌈', emoji:'🌈' },
  { grade:4, subject:'afrikaans', front:'Meervoud van "boek"', back:'boeke 📚', emoji:'📚' },
  { grade:4, subject:'afrikaans', front:'Meervoud van "kind"', back:'kinders 👧', emoji:'👧' },
  { grade:4, subject:'afrikaans', front:'Meervoud van "vrou"', back:'vroue 👩', emoji:'👩' },
  { grade:4, subject:'afrikaans', front:'Verkleinwoord van "kat"', back:'katjie 🐱', emoji:'🐱' },
  { grade:4, subject:'afrikaans', front:'Verkleinwoord van "huis"', back:'huisie 🏠', emoji:'🏠' },
  { grade:4, subject:'afrikaans', front:'Watter leesteken gebruik jy aan die einde van \'n vraag?', back:'\'n Vraagteken (?) ❓', emoji:'❓' },
  { grade:4, subject:'afrikaans', front:'Waarmee begin elke sin?', back:'\'n Hoofletter 🔠', emoji:'🔠' },
  { grade:4, subject:'afrikaans', front:'Verlede tyd van "speel"', back:'het gespeel ⏪', emoji:'⏪' },
  { grade:4, subject:'afrikaans', front:'Toekomende tyd — watter hulpwoord gebruik jy?', back:'"sal" — bv. Ek sal môre oefen. ⏩', emoji:'⏩' },
  { grade:4, subject:'afrikaans', front:'Wat beskryf \'n bywoord?', back:'Dit beskryf \'n werkwoord — HOE iets gedoen word (bv. vinnig, stadig, stil) 💨', emoji:'💨' },

  // Graad 7
  { grade:7, subject:'maths', front:'Wat is die stelling van Pythagoras?', back:'a² + b² = c²', emoji:'📐' },
  { grade:7, subject:'maths', front:'Los op: 3x = 24', back:'x = 8', emoji:'🔣' },
  { grade:7, subject:'maths', front:'Wat is die hellingformule?', back:'m = (y₂-y₁)/(x₂-x₁)', emoji:'📈' },
  { grade:7, subject:'maths', front:'Wat is \'n rasionele getal?', back:'Enige getal wat as \'n breuk geskryf kan word (p/q)', emoji:'🔢' },
  { grade:7, subject:'maths', front:'Wat is die mediaan?', back:'Die middelste waarde wanneer data gerangskik is', emoji:'📊' },
  { grade:7, subject:'science', front:'Waarvoor staan DNS?', back:'Deoksiribonukleïensuur', emoji:'🧬' },
  { grade:7, subject:'science', front:'Wat is \'n selmembraan?', back:'Die dun laag wat \'n sel omring en beheer wat inkom en uitkom', emoji:'🔬' },
  { grade:7, subject:'science', front:'Wat is Newton se 2de Wet?', back:'F = ma (Krag = massa × versnelling)', emoji:'⚡' },
  { grade:7, subject:'science', front:'Wat is die atoomgetal?', back:'Die aantal protone in die kern van \'n atoom', emoji:'⚛️' },
  { grade:7, subject:'science', front:'Wat is die kweekhuiseffek?', back:'Kweekhuisgasse vang hitte vas in die Aarde se atmosfeer', emoji:'🌡️' },
]
