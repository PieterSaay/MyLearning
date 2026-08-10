// CAPS-ooreenstemmende inhoud vir Graad 4
// Elke vak het kwisvrae, lesse en flitskaarte

export const SUBJECTS = [
  { id: 'maths',     label: 'Wiskunde',           emoji: '🔢', color: 'bg-blue-500',   light: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-400' },
  { id: 'english',   label: 'Engels',              emoji: '📚', color: 'bg-green-500',  light: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-400' },
  { id: 'science',   label: 'Natuurwetenskappe',   emoji: '🔬', color: 'bg-teal-500',   light: 'bg-teal-100',   text: 'text-teal-700',   border: 'border-teal-400' },
  { id: 'afrikaans', label: 'Afrikaans',            emoji: '🇿🇦', color: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-400' },
  { id: 'lifeskills',label: 'Lewensvaardighede',   emoji: '🌟', color: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-400' },
]

export const GRADE = 4

export const GRADE_COLOR = { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500', hex: '#3b82f6' }

// ─── KWISVRAE ──────────────────────────────────────────────────────────────────
export const QUIZ_QUESTIONS = [
  // ── Wiskunde ────────────────────────────────────────────────────────────────
  { grade:4, subject:'maths', question:'Wat is 234 × 4?', options:['836','926','936','846'], answer:2, explanation:'234 × 4: 4×4=16, skryf 6 dra 1; 4×3+1=13, skryf 3 dra 1; 4×2+1=9. Antwoord: 936.' },
  { grade:4, subject:'maths', question:'Wat is die waarde van 7 in 4 735?', options:['7','70','700','7000'], answer:2, explanation:'In 4 735 is die 7 in die honderdtal-posisie, dus is sy waarde 700.' },
  { grade:4, subject:'maths', question:'Wat is 3/4 van 40?', options:['10','20','30','15'], answer:2, explanation:'1/4 van 40 = 10, dus 3/4 = 3 × 10 = 30.' },
  { grade:4, subject:'maths', question:'Wat is \'n priemgetal?', options:['9','15','7','21'], answer:2, explanation:'7 is \'n priemgetal omdat dit slegs deur 1 en 7 deelbaar is.' },
  { grade:4, subject:'maths', question:'Wat is die oppervlakte van \'n reghoek 6 cm × 4 cm?', options:['10 cm²','20 cm²','24 cm²','24 cm'], answer:2, explanation:'Oppervlakte = lengte × breedte = 6 × 4 = 24 cm².' },
  { grade:4, subject:'maths', question:'Wat is 0,5 as \'n breuk?', options:['1/4','1/3','1/5','1/2'], answer:3, explanation:'0,5 = 5/10 = 1/2 (een helfte).' },
  // ── Engels ──────────────────────────────────────────────────────────────────
  { grade:4, subject:'english', question:'Wat is \'n metafoor?', options:['\'n Vergelyking wat "like" of "as" gebruik','\'n Direkte vergelyking wat sê iets IS iets anders','\'n Soort leesteken','\'n Soort selfstandige naamwoord'], answer:1, explanation:'\'n Metafoor sê iets IS iets anders, bv. "Life is a journey."' },
  { grade:4, subject:'english', question:'Watter woord is \'n werkwoord?', options:['beautiful','happiness','quickly','dance'], answer:3, explanation:'Werkwoorde is aksiewoorde of toestandswoorde. "Dance" is \'n aksiewoord.' },
  { grade:4, subject:'english', question:'Wat is die korrekte meervoud van "wolf"?', options:['wolfs','wolves','wolfes','wolve'], answer:1, explanation:'"Wolf" → "wolves" (verander f na v en voeg -es by).' },
  { grade:4, subject:'english', question:'Wat beteken "prefix"?', options:['Letters wat aan die einde van \'n woord bygevoeg word','Letters wat aan die begin van \'n woord bygevoeg word','\'n Soort sin','\'n Leesteken'], answer:1, explanation:'\'n Voorvoegsel word aan die begin van \'n woord gevoeg om sy betekenis te verander, bv. "un-" in "unhappy".' },
  { grade:4, subject:'english', question:'Watter tekssoort sou jy gebruik om iemand te oorreed?', options:['Verhaal','Resep','Oorredingsopstel','Dagboek'], answer:2, explanation:'\'n Oorredingsopstel gebruik argumente en bewyse om die leser te oortuig.' },
  { grade:4, subject:'english', question:'Wat is \'n vergelyking (simile)?', options:['\'n Vergelyking wat "like" of "as" gebruik','\'n Baie lang woord','\'n Soort werkwoord','\'n Leesteken'], answer:0, explanation:'\'n Simile vergelyk deur "like" of "as" te gebruik, bv. "As brave as a lion."' },
  // ── Natuurwetenskappe ───────────────────────────────────────────────────────
  { grade:4, subject:'science', question:'Hoe word lewende dinge genoem wat hul eie kos maak?', options:['Verbruikers','Produsente','Ontbinders','Roofdiere'], answer:1, explanation:'Produsente (plante) maak hul eie kos deur fotosintese.' },
  { grade:4, subject:'science', question:'Wat is fotosintese?', options:['Hoe diere asemhaal','Hoe plante kos maak met sonlig','Hoe water verdamp','Hoe rotse vorm'], answer:1, explanation:'Fotosintese: plante gebruik sonlig, water en CO₂ om kos en suurstof te produseer.' },
  { grade:4, subject:'science', question:'Watter laag van die Aarde is die warmste?', options:['Kors','Mantel','Buitenste kern','Binneste kern'], answer:3, explanation:'Die binneste kern is die warmste deel van die Aarde — gemaak van soliede yster en nikkel.' },
  { grade:4, subject:'science', question:'Wat is die eenheid van elektriese stroom?', options:['Watt','Volt','Ampere','Ohm'], answer:2, explanation:'Elektriese stroom word in Ampere (Amps) gemeet.' },
  { grade:4, subject:'science', question:'Wat is \'n voedselketting?', options:['\'n Spyskaart','Die volgorde waarin lewende dinge mekaar eet','\'n Soort resep','Hoe kos gaar gemaak word'], answer:1, explanation:'\'n Voedselketting wys wat eet wat in die natuur, bv. plant → insek → padda → arend.' },
  { grade:4, subject:'science', question:'Watter krag trek voorwerpe na die Aarde toe?', options:['Magnetisme','Wrywing','Swaartekrag','Elektrisiteit'], answer:2, explanation:'Swaartekrag is die krag wat alle voorwerpe na die middel van die Aarde toe trek.' },
  // ── Afrikaans ───────────────────────────────────────────────────────────────
  { grade:4, subject:'afrikaans', question:'Wat is die verlede tyd van "eet"?', options:['geëet','geeet','geeit','gegeet'], answer:0, explanation:'"Eet" se verlede tyd is "geëet" (the past tense of "eat").' },
  { grade:4, subject:'afrikaans', question:'Watter woord is \'n byvoeglike naamwoord?', options:['spring','rooi','tafel','lag'], answer:1, explanation:'Byvoeglike naamwoorde beskryf selfstandige naamwoorde. "Rooi" beskryf \'n kleur.' },
  { grade:4, subject:'afrikaans', question:'Wat is die meervoud van "vrou"?', options:['vroue','vrous','vrouens','vrowe'], answer:0, explanation:'"Vrou" se meervoud is "vroue" (women).' },
  { grade:4, subject:'afrikaans', question:'Hoe sê jy "We are going to school" in Afrikaans?', options:['Ons gaan na skool.','Ons was by skool.','Ons bly by skool.','Ons speel op skool.'], answer:0, explanation:'"Ons gaan na skool" beteken "We are going to school".' },
  { grade:4, subject:'afrikaans', question:'Wat is \'n werkwoord?', options:['\'n Woord wat \'n ding beskryf','\'n Aksiewoord','\'n Naam van \'n plek','\'n Kleurwoord'], answer:1, explanation:'\'n Werkwoord is \'n aksiewoord, soos "loop", "eet", of "speel".' },
  { grade:4, subject:'afrikaans', question:'Wat beteken "nagmerrie"?', options:['A sweet dream','A nightmare','A bedtime story','A lullaby'], answer:1, explanation:'"Nagmerrie" beteken "nightmare" in Afrikaans.' },
  // ── Lewensvaardighede ───────────────────────────────────────────────────────
  { grade:4, subject:'lifeskills', question:'Waarvoor staan MIV?', options:['Menslike Ongelooflike Virus','Menslike Immuniteitsgebreksvirus','Gesonde Immuunvirus','Hoë Interne Virus'], answer:1, explanation:'MIV staan vir Menslike Immuniteitsgebreksvirus — dit verswak die immuunstelsel.' },
  { grade:4, subject:'lifeskills', question:'Wat is portuurgroepdruk?', options:['Druk van ouers','Invloed van vriende om iets te doen','Skoolwerk druk','Fisiese druk'], answer:1, explanation:'Portuurgroepdruk is wanneer vriende jou beïnvloed om dinge te doen wat jy dalk nie wil doen nie.' },
  { grade:4, subject:'lifeskills', question:'Wat beteken "demokrasie"?', options:['Heerskappy deur een persoon','Regering deur die volk','Heerskappy deur die weermag','Geen regering'], answer:1, explanation:'Demokrasie beteken die volk het die mag en kies hul leiers deur stemming.' },
  { grade:4, subject:'lifeskills', question:'Wat is die naam van Suid-Afrika se grondwet?', options:['Die Handves','Die Vryheidsakte','Die Grondwet van die Republiek van Suid-Afrika','Die Nasionale Wet'], answer:2, explanation:'Suid-Afrika se Grondwet het in 1996 in werking getree en beskerm almal se regte.' },
  { grade:4, subject:'lifeskills', question:'Watter vitamien kry ons van sonlig?', options:['Vitamien A','Vitamien B','Vitamien C','Vitamien D'], answer:3, explanation:'Ons vel maak Vitamien D wanneer dit aan sonlig blootgestel word — belangrik vir sterk bene.' },
  { grade:4, subject:'lifeskills', question:'Wat is stereotipering?', options:['Kuns maak','Aannames maak oor alle mense in \'n groep','\'n Soort musiek','\'n Taal leer'], answer:1, explanation:'Stereotipering is om onregverdige, vaste aannames te maak oor \'n hele groep mense.' },
]

// ─── LESSE ─────────────────────────────────────────────────────────────────────
export const LESSONS = [
  // Wiskunde
  { grade:4, subject:'maths', title:'Breuke Verstaan', emoji:'🍕',
    content:'\'n Breuk wys \'n deel van \'n geheel. As jy \'n pizza in 4 gelyke snye sny en 1 eet, het jy 1/4 (een kwart) geëet. Die onderste getal (noemer) wys hoeveel gelyke dele. Die boonste getal (teller) wys hoeveel dele jy het.',
    keyPoints:['Die noemer (onder) = totale gelyke dele','Die teller (bo) = dele wat jy het','1/2 = helfte, 1/4 = kwart, 3/4 = drie kwarte'] },
  // Engels
  { grade:4, subject:'english', title:'Figuurlike Taal: Simile en Metafoor', emoji:'🎭',
    content:'In English, we use figurative language to make writing more interesting.\n\nA SIMILE compares two things using "like" or "as":\n• "As brave as a lion."\n• "She swims like a fish."\n\nA METAPHOR says one thing IS another (no "like" or "as"):\n• "Life is a journey."\n• "He is a night owl."\n\nBoth similes and metaphors help the reader picture what you mean.',
    keyPoints:['A simile uses "like" or "as" to compare two things','A metaphor says something IS something else','Figurative language makes writing vivid and interesting'] },
  // Natuurwetenskappe
  { grade:4, subject:'science', title:'Voedselkettings', emoji:'🦁',
    content:'\'n Voedselketting wys wat eet wat in die natuur. Dit begin altyd met \'n plant (produsent). Dan kom \'n plantvreter (herbivoor), dan \'n vleisvreter (karnivoor). Voorbeeld: Gras → Sprinkaan → Padda → Arend. Energie gaan langs die ketting oor.',
    keyPoints:['Voedselkettings begin met produsente (plante)','Herbivore eet plante; karnivore eet diere','Energie vloei van een organisme na die volgende'] },
  // Afrikaans (CAPS-ooreenstemmend)
  { grade:4, subject:'afrikaans', title:'Selfstandige Naamwoorde (Nouns)', emoji:'📝',
    content:'\'n Selfstandige naamwoord is die naam van \'n persoon, plek, dier of ding.\n\n👤 Persone: onderwyser, kind, meisie\n📍 Plekke: skool, dorp, Suid-Afrika\n🐘 Diere: olifant, kat, voël\n🪑 Dinge: tafel, boek, bal\n\nEienaamwoorde begin altyd met \'n hoofletter: Pieter, Kaapstad, Suid-Afrika.\nGewone naamwoorde begin met \'n kleinletter: seun, stad, land.',
    keyPoints:['\'n Selfstandige naamwoord noem \'n persoon, plek, dier of ding','Eienaamwoorde (name) begin met \'n hoofletter','Gewone selfstandige naamwoorde begin met \'n kleinletter','Meervoud: voeg -e, -s, of -ers by (bv. boek → boeke, seun → seuns)'] },
  { grade:4, subject:'afrikaans', title:'Werkwoorde (Verbs)', emoji:'🏃',
    content:'\'n Werkwoord is \'n aksiewoord — dit wys wat iemand of iets DOEN of IS.\n\n✅ Teenwoordige tyd (nou): Ek LOOP skool toe. Sy LEES \'n boek.\n⏪ Verlede tyd (toe): Ek HET gister gespeel. Hy HET die kos geëet.\n⏩ Toekomende tyd (later): Ons SAL môre oefen.\n\nDie hulpwerkwoord "het" help ons die verlede tyd vorm:\nEk het geloop. Jy het geëet. Hulle het gespeel.',
    keyPoints:['Werkwoorde wys aksie of toestand','Teenwoordige tyd: ek loop, hy eet','Verlede tyd gebruik "het" + ge-: ek het geloop','Toekomende tyd gebruik "sal": ek sal loop'] },
  { grade:4, subject:'afrikaans', title:'Byvoeglike Naamwoorde (Adjectives)', emoji:'🌈',
    content:'\'n Byvoeglike naamwoord BESKRYF \'n selfstandige naamwoord. Dit vertel ons hoe iets lyk, voel, klink of ruik.\n\nVoorbeelde:\n• Die GROOT boom. (groot beskryf die boom)\n• \'n ROOI appel. (rooi beskryf die appel)\n• Die KLEIN hond. (klein beskryf die hond)\n\nSommige byvoeglike naamwoorde verander effens wanneer hulle vóór \'n naamwoord staan:\n• sag → die SAGTE kussing\n• goed → die GOEIE boek\n• mooi → die mooi kind (bly dieselfde)',
    keyPoints:['Byvoeglike naamwoorde beskryf selfstandige naamwoorde','Hulle vertel hoe iets lyk, voel of ruik','Voorbeelde: groot, klein, rooi, mooi, lekker, vinnig','Byvoeglike naamwoorde antwoord die vraag: "Watter soort?"'] },
  { grade:4, subject:'afrikaans', title:'Sinsbou en Leestekens', emoji:'✏️',
    content:'\'n SIN is \'n groep woorde wat \'n volledige gedagte uitdruk.\n\nElke sin het:\n1. \'n ONDERWERP (wie of wat doen iets?): Die seun...\n2. \'n GESEGDE (wat doen hy/sy?): ...hardloop.\n\nLeestekens:\n• . Punt — gebruik aan die einde van \'n sin\n• ? Vraagteken — gebruik aan die einde van \'n vraag\n• ! Uitroepteken — gebruik as iets opwindend of dringend is\n• , Komma — gebruik om items te skei\n\nReëls:\n✅ Elke sin begin met \'n HOOFLETTER.\n✅ Elke sin eindig met \'n leesteken.',
    keyPoints:['Elke sin het \'n onderwerp en \'n gesegde','Sinne begin met \'n hoofletter','\'n Punt (.) eindig \'n stelling','\'n Vraagteken (?) eindig \'n vraag','\'n Uitroepteken (!) wys sterk gevoel'] },
  { grade:4, subject:'afrikaans', title:'Meervoud en Verkleinwoorde', emoji:'🔡',
    content:'MEERVOUD — meer as een:\n• -e: boek → boeke, seun → seuns, tafel → tafels\n• -ers: kind → kinders, broer → broers\n• Onreëlmatig: mens → mense, vrou → vroue\n\nVERKLEINWOORDE — kleiner of liefliker weergawe:\nVoeg -tjie, -jie, of -ie by:\n• kat → katjie 🐱\n• boom → boompie 🌱\n• hond → hondjie 🐶\n• huis → huisie 🏠\n• bal → balletjie ⚽\n\nVerkleinwoorde kan ook liefde of kleinheid aandui:\n"Kom hier, my kindjie!"',
    keyPoints:['Meervoud wys meer as een (bv. boek → boeke)','Voeg -e, -s, -ers by vir meervoud','Verkleinwoorde voeg -tjie of -jie by (bv. kat → katjie)','Verkleinwoorde wys dat iets klein of oulik is'] },
  // Lewensvaardighede
  { grade:4, subject:'lifeskills', title:'Gesondheid, Regte en Verantwoordelikheid', emoji:'🩺',
    content:'MIV (Menslike Immuniteitsgebreksvirus) is \'n virus wat die liggaam se immuunstelsel verswak. Dit word nie deur gewone kontak soos handskud of die deel van kos oorgedra nie — wees ingelig en vriendelik teenoor almal.\n\nOns liggame het ook VITAMIEN D nodig, wat ons vel maak wanneer dit aan sonlig blootgestel word — dit hou ons bene sterk.\n\nSuid-Afrika is \'n DEMOKRASIE: die volk kies sy leiers deur stemming, en almal se regte word beskerm deur die GRONDWET van die Republiek van Suid-Afrika.\n\nWees bewus van STEREOTIPERING — moenie onregverdige aannames oor \'n hele groep mense maak nie. Behandel almal met respek.',
    keyPoints:['MIV verswak die immuunstelsel — wees ingelig, nie bang nie','Vitamien D van sonlig hou ons bene sterk','Suid-Afrika se Grondwet beskerm elkeen se regte','Vermy stereotipering — behandel almal regverdig'] },
]

// ─── FLITSKAARTE ───────────────────────────────────────────────────────────────
export const FLASHCARDS = [
  // Wiskunde
  { grade:4, subject:'maths', front:'Wat is 7 × 8?', back:'56', emoji:'🔢' },
  { grade:4, subject:'maths', front:'Wat is 1/2 + 1/4?', back:'3/4', emoji:'🍕' },
  { grade:4, subject:'maths', front:'Oppervlakteformule vir \'n reghoek?', back:'O = lengte × breedte', emoji:'📐' },
  { grade:4, subject:'maths', front:'Wat is 144 ÷ 12?', back:'12', emoji:'🔢' },
  { grade:4, subject:'maths', front:'Wat is \'n faktor van 12?', back:'1, 2, 3, 4, 6 of 12', emoji:'🔢' },
  // Engels
  { grade:4, subject:'english', front:'What is a simile?', back:'A comparison using "like" or "as" 🦁 (e.g. "as brave as a lion")', emoji:'🦁' },
  { grade:4, subject:'english', front:'What is a metaphor?', back:'Saying something IS something else 🌊 (e.g. "Life is a journey")', emoji:'🌊' },
  { grade:4, subject:'english', front:'Plural of "wolf"?', back:'wolves 🐺 (f → v + es)', emoji:'🐺' },
  { grade:4, subject:'english', front:'What does the prefix "un-" do?', back:'It is added to the START of a word to change its meaning (e.g. unhappy) 🔤', emoji:'🔤' },
  { grade:4, subject:'english', front:'Which word type is "dance"?', back:'A verb — it shows an action 🏃', emoji:'🏃' },
  // Natuurwetenskappe
  { grade:4, subject:'science', front:'Wat is fotosintese?', back:'Plante maak kos met sonlig, CO₂ en water', emoji:'🌿' },
  { grade:4, subject:'science', front:'Wat is \'n produsent in \'n voedselketting?', back:'\'n Plant (maak sy eie kos)', emoji:'🌱' },
  { grade:4, subject:'science', front:'Wat is die chemiese simbool vir water?', back:'H₂O', emoji:'💧' },
  { grade:4, subject:'science', front:'Hoeveel planete is in ons sonnestelsel?', back:'8 planete', emoji:'🪐' },
  { grade:4, subject:'science', front:'Watter krag hou ons op die grond?', back:'Swaartekrag', emoji:'🌍' },
  // Afrikaans
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
  { grade:4, subject:'afrikaans', front:'Toekomende tyd — watter hulpwerkwoord gebruik jy?', back:'"sal" — bv. Ek sal môre oefen. ⏩', emoji:'⏩' },
  { grade:4, subject:'afrikaans', front:'Wat beskryf \'n bywoord?', back:'Dit beskryf \'n werkwoord — HOE iets gedoen word (bv. vinnig, stadig, stil) 💨', emoji:'💨' },
  // Lewensvaardighede
  { grade:4, subject:'lifeskills', front:'Waarvoor staan MIV?', back:'Menslike Immuniteitsgebreksvirus 🩺', emoji:'🩺' },
  { grade:4, subject:'lifeskills', front:'Wat is portuurgroepdruk?', back:'Wanneer vriende jou beïnvloed om iets te doen 🤝', emoji:'🤝' },
  { grade:4, subject:'lifeskills', front:'Wat beteken "demokrasie"?', back:'Regering deur die volk — hulle kies hul leiers 🗳️', emoji:'🗳️' },
  { grade:4, subject:'lifeskills', front:'Watter vitamien kry ons van sonlig?', back:'Vitamien D ☀️ — belangrik vir sterk bene', emoji:'☀️' },
  { grade:4, subject:'lifeskills', front:'Wat is stereotipering?', back:'Onregverdige, vaste aannames oor \'n hele groep mense maak 🚫', emoji:'🚫' },
  { grade:4, subject:'lifeskills', front:'Wat is die naam van SA se grondwet?', back:'Die Grondwet van die Republiek van Suid-Afrika 📜', emoji:'📜' },
]
