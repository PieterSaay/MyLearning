// CAPS-aligned seed content for grades 1–7
// Each subject has quiz questions, lessons and flashcards

export const SUBJECTS = [
  { id: 'maths',    label: 'Maths',             emoji: '🔢', color: 'bg-blue-500',   light: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-400' },
  { id: 'english',  label: 'English',            emoji: '📚', color: 'bg-green-500',  light: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-400' },
  { id: 'science',  label: 'Natural Sciences',   emoji: '🔬', color: 'bg-teal-500',   light: 'bg-teal-100',   text: 'text-teal-700',   border: 'border-teal-400' },
  { id: 'afrikaans',label: 'Afrikaans',           emoji: '🇿🇦', color: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-400' },
  { id: 'lifeskills',label: 'Life Skills',        emoji: '🌟', color: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-400' },
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

// ─── QUIZ QUESTIONS ────────────────────────────────────────────────────────────
// Format: { grade, subject, question, options:[4], answer(index 0-3), explanation }

export const QUIZ_QUESTIONS = [
  // ── Grade 1 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:1, subject:'maths', question:'What is 2 + 3?', options:['4','5','6','7'], answer:1, explanation:'2 and 3 together make 5!' },
  { grade:1, subject:'maths', question:'How many legs does a dog have?', options:['2','3','4','6'], answer:2, explanation:'Dogs have 4 legs.' },
  { grade:1, subject:'maths', question:'Which number comes after 9?', options:['8','10','11','7'], answer:1, explanation:'We count ...8, 9, 10!' },
  { grade:1, subject:'maths', question:'What is 5 - 2?', options:['2','3','4','1'], answer:1, explanation:'5 take away 2 leaves 3.' },
  { grade:1, subject:'maths', question:'How many sides does a square have?', options:['3','5','4','6'], answer:2, explanation:'A square has 4 equal sides.' },
  { grade:1, subject:'maths', question:'What is 1 + 1?', options:['1','3','2','4'], answer:2, explanation:'1 plus 1 equals 2.' },
  // English
  { grade:1, subject:'english', question:'Which word rhymes with "cat"?', options:['dog','hat','sit','run'], answer:1, explanation:'"Cat" and "hat" both end in -at, so they rhyme!' },
  { grade:1, subject:'english', question:'What is the first letter of the alphabet?', options:['B','C','A','D'], answer:2, explanation:'A is the very first letter of the alphabet.' },
  { grade:1, subject:'english', question:'Which word is a colour?', options:['run','happy','blue','big'], answer:2, explanation:'"Blue" is a colour.' },
  { grade:1, subject:'english', question:'How many vowels are in "apple"?', options:['1','2','3','4'], answer:1, explanation:'"Apple" has two vowels: a and e.' },
  { grade:1, subject:'english', question:'Which sentence is correct?', options:['i am happy.','I am happy.','I Am Happy.','i Am happy.'], answer:1, explanation:'Sentences start with a capital letter.' },
  { grade:1, subject:'english', question:'What sound does the letter "S" make?', options:['buh','sss','mmm','ttt'], answer:1, explanation:'S makes a "sss" sound like a snake.' },
  // Science
  { grade:1, subject:'science', question:'What do plants need to grow?', options:['Pizza','Sunlight and water','Sand','Ice'], answer:1, explanation:'Plants need sunlight and water to make their food and grow.' },
  { grade:1, subject:'science', question:'Which animal can fly?', options:['Fish','Dog','Bird','Cat'], answer:2, explanation:'Birds have wings and can fly.' },
  { grade:1, subject:'science', question:'What is the colour of the sky on a sunny day?', options:['Green','Red','Yellow','Blue'], answer:3, explanation:'The sky looks blue because of the way light scatters.' },
  { grade:1, subject:'science', question:'Where do fish live?', options:['In trees','In the sand','In water','In houses'], answer:2, explanation:'Fish live in water — rivers, lakes, and the sea.' },
  { grade:1, subject:'science', question:'Which is a fruit?', options:['Carrot','Apple','Potato','Bread'], answer:1, explanation:'An apple is a fruit that grows on a tree.' },
  { grade:1, subject:'science', question:'What does a caterpillar turn into?', options:['A frog','A bird','A butterfly','A bee'], answer:2, explanation:'A caterpillar makes a cocoon and becomes a butterfly!' },
  // Afrikaans
  { grade:1, subject:'afrikaans', question:'Wat is "hond" in Engels?', options:['cat','dog','fish','bird'], answer:1, explanation:'"Hond" in Afrikaans is "dog" in English.' },
  { grade:1, subject:'afrikaans', question:'Hoe sê jy "hello" in Afrikaans?', options:['Dankie','Totsiens','Hallo','Asseblief'], answer:2, explanation:'"Hallo" is die Afrikaanse woord vir "hello".' },
  { grade:1, subject:'afrikaans', question:'Wat beteken "rooi"?', options:['Blue','Green','Red','Yellow'], answer:2, explanation:'"Rooi" is die kleur "red" in Engels.' },
  { grade:1, subject:'afrikaans', question:'Hoe sê jy "goodbye" in Afrikaans?', options:['Hallo','Dankie','Ja','Totsiens'], answer:3, explanation:'"Totsiens" beteken "goodbye".' },
  { grade:1, subject:'afrikaans', question:'Wat is "kat" in Engels?', options:['dog','cat','bird','cow'], answer:1, explanation:'"Kat" is "cat" in English.' },
  { grade:1, subject:'afrikaans', question:'Watter woord beteken "big"?', options:['Klein','Groot','Mooi','Vinnig'], answer:1, explanation:'"Groot" beteken "big" in Afrikaans.' },
  // Life Skills
  { grade:1, subject:'lifeskills', question:'What should you do when crossing the road?', options:['Run fast','Look both ways first','Close your eyes','Walk backwards'], answer:1, explanation:'Always stop, look left and right, then cross safely.' },
  { grade:1, subject:'lifeskills', question:'How many times a day should you brush your teeth?', options:['Once','Twice','Never','Five times'], answer:1, explanation:'Brush your teeth in the morning and at night — twice a day!' },
  { grade:1, subject:'lifeskills', question:'What do you say when someone gives you something?', options:['Please','Sorry','Thank you','Hello'], answer:2, explanation:'We say "thank you" to show we are grateful.' },
  { grade:1, subject:'lifeskills', question:'What should you do if a stranger talks to you?', options:['Go with them','Tell a trusted adult','Give them your name','Stay quiet'], answer:1, explanation:'Always tell a trusted adult like a parent or teacher.' },
  { grade:1, subject:'lifeskills', question:'Which food is healthy to eat?', options:['Sweets','Chips','An apple','Cake'], answer:2, explanation:'Fruits and vegetables help our bodies grow strong.' },
  { grade:1, subject:'lifeskills', question:'What should you do with rubbish?', options:['Throw it on the ground','Put it in a bin','Leave it on a chair','Give it to a friend'], answer:1, explanation:'We put rubbish in bins to keep our environment clean.' },

  // ── Grade 2 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:2, subject:'maths', question:'What is 15 + 7?', options:['21','22','23','20'], answer:1, explanation:'15 + 7 = 22. Count on 7 from 15.' },
  { grade:2, subject:'maths', question:'What is 20 - 8?', options:['11','12','13','14'], answer:1, explanation:'20 minus 8 = 12.' },
  { grade:2, subject:'maths', question:'How many tens are in 30?', options:['1','2','3','4'], answer:2, explanation:'30 = 3 tens, so there are 3 tens in 30.' },
  { grade:2, subject:'maths', question:'Which number is the biggest?', options:['45','54','49','50'], answer:1, explanation:'54 is the biggest because 5 tens is more than 4 tens.' },
  { grade:2, subject:'maths', question:'What is 3 × 2?', options:['5','6','7','8'], answer:1, explanation:'3 groups of 2 = 6.' },
  { grade:2, subject:'maths', question:'What shape has 3 sides?', options:['Square','Circle','Triangle','Rectangle'], answer:2, explanation:'A triangle has exactly 3 sides.' },
  // English
  { grade:2, subject:'english', question:'Which word is a noun?', options:['run','beautiful','table','quickly'], answer:2, explanation:'A noun is a person, place, or thing. "Table" is a thing.' },
  { grade:2, subject:'english', question:'What punctuation ends a question?', options:['.','!','?',','], answer:2, explanation:'Questions end with a question mark (?).' },
  { grade:2, subject:'english', question:'Which word means the opposite of "hot"?', options:['warm','cold','big','fast'], answer:1, explanation:'"Cold" is the opposite (antonym) of "hot".' },
  { grade:2, subject:'english', question:'How many syllables are in "elephant"?', options:['1','2','3','4'], answer:2, explanation:'El-e-phant has 3 syllables.' },
  { grade:2, subject:'english', question:'Which sentence has correct punctuation?', options:['i like dogs','I like dogs.','i like dogs.','I like dogs'], answer:1, explanation:'A sentence starts with a capital letter and ends with a full stop.' },
  { grade:2, subject:'english', question:'What is the plural of "child"?', options:['childs','children','childes','child'], answer:1, explanation:'"Child" has an irregular plural: "children".' },
  // Science
  { grade:2, subject:'science', question:'What is the largest planet in our solar system?', options:['Earth','Mars','Jupiter','Saturn'], answer:2, explanation:'Jupiter is the biggest planet — it is so big that all other planets could fit inside it!' },
  { grade:2, subject:'science', question:'Which sense do we use to smell?', options:['Eyes','Ears','Nose','Skin'], answer:2, explanation:'We use our nose to smell things.' },
  { grade:2, subject:'science', question:'What gas do humans breathe in?', options:['Carbon dioxide','Oxygen','Hydrogen','Nitrogen'], answer:1, explanation:'We breathe in oxygen. Our lungs use it to give our bodies energy.' },
  { grade:2, subject:'science', question:'What is the life cycle of a frog?', options:['Egg→Tadpole→Frog','Egg→Caterpillar→Frog','Seed→Sprout→Frog','Egg→Fish→Frog'], answer:0, explanation:'Frogs start as eggs, become tadpoles, then grow into frogs.' },
  { grade:2, subject:'science', question:'Which material is magnetic?', options:['Wood','Plastic','Iron','Glass'], answer:2, explanation:'Iron (and steel) are attracted to magnets.' },
  { grade:2, subject:'science', question:'Where does the sun rise?', options:['North','South','East','West'], answer:2, explanation:'The sun rises in the East every morning.' },
  // Afrikaans
  { grade:2, subject:'afrikaans', question:'Wat is die meervoud van "kind"?', options:['kinders','kinds','kindere','kinde'], answer:0, explanation:'"Kind" se meervoud is "kinders" (children).' },
  { grade:2, subject:'afrikaans', question:'Watter woord is \'n kleur?', options:['lekker','speel','geel','vinnig'], answer:2, explanation:'"Geel" is die kleur "yellow".' },
  { grade:2, subject:'afrikaans', question:'Hoe sê jy "thank you" in Afrikaans?', options:['Asseblief','Dankie','Hallo','Totsiens'], answer:1, explanation:'"Dankie" beteken "thank you".' },
  { grade:2, subject:'afrikaans', question:'Wat beteken die woord "skool"?', options:['Home','Park','School','Shop'], answer:2, explanation:'"Skool" is die plek waar jy leer — "school" in English.' },
  { grade:2, subject:'afrikaans', question:'Watter sin is korrek?', options:['ek is bly.','Ek is bly.','Ek Is Bly.','ek Is bly.'], answer:1, explanation:'Sinne begin met \'n hoofletter.' },
  { grade:2, subject:'afrikaans', question:'Wat beteken "seun"?', options:['Girl','Boy','Mother','Father'], answer:1, explanation:'"Seun" beteken "boy" in Afrikaans.' },
  // Life Skills
  { grade:2, subject:'lifeskills', question:'What is a healthy breakfast?', options:['Chips and soda','Cereal and milk','Sweets and juice','Cake and tea'], answer:1, explanation:'Cereal and milk give you energy and nutrients to start the day.' },
  { grade:2, subject:'lifeskills', question:'What does a traffic light mean when it is RED?', options:['Go fast','Slow down','Stop','Turn left'], answer:2, explanation:'Red means STOP — always wait for green.' },
  { grade:2, subject:'lifeskills', question:'Which of these is a form of exercise?', options:['Watching TV','Eating lunch','Playing soccer','Reading'], answer:2, explanation:'Exercise like playing soccer keeps your body healthy and strong.' },
  { grade:2, subject:'lifeskills', question:'How should you treat someone who is sad?', options:['Laugh at them','Ignore them','Be kind and listen','Walk away'], answer:2, explanation:'Being kind and listening helps people feel better.' },
  { grade:2, subject:'lifeskills', question:'What does the word "community" mean?', options:['A school subject','The people in your area','A type of food','A sport'], answer:1, explanation:'A community is the group of people who live in the same area and help each other.' },
  { grade:2, subject:'lifeskills', question:'Why is it important to wash your hands?', options:['To make them white','To remove germs','To make them cold','To make them smell nice'], answer:1, explanation:'Washing hands removes germs and stops you from getting sick.' },

  // ── Grade 3 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:3, subject:'maths', question:'What is 45 + 37?', options:['72','82','83','73'], answer:1, explanation:'45 + 37 = 82. Add the ones: 5+7=12, carry 1. Tens: 4+3+1=8.' },
  { grade:3, subject:'maths', question:'What is 100 - 54?', options:['44','46','56','34'], answer:1, explanation:'100 - 54 = 46.' },
  { grade:3, subject:'maths', question:'What is 6 × 7?', options:['36','42','48','56'], answer:1, explanation:'6 × 7 = 42. The 6 times table: 6,12,18,24,30,36,42.' },
  { grade:3, subject:'maths', question:'What is 56 ÷ 8?', options:['6','7','8','9'], answer:1, explanation:'56 ÷ 8 = 7 because 8 × 7 = 56.' },
  { grade:3, subject:'maths', question:'What fraction of this shape is shaded if 2 of 4 parts are shaded?', options:['1/4','1/3','1/2','3/4'], answer:2, explanation:'2 out of 4 parts = 2/4 = 1/2 (one half).' },
  { grade:3, subject:'maths', question:'What is the perimeter of a square with side 5 cm?', options:['15 cm','20 cm','25 cm','10 cm'], answer:1, explanation:'Perimeter = 4 × side = 4 × 5 = 20 cm.' },
  // English
  { grade:3, subject:'english', question:'Which word is an adjective?', options:['jump','slowly','beautiful','sing'], answer:2, explanation:'Adjectives describe nouns. "Beautiful" describes what something looks like.' },
  { grade:3, subject:'english', question:'What is the past tense of "run"?', options:['runned','running','runs','ran'], answer:3, explanation:'"Run" is irregular — its past tense is "ran".' },
  { grade:3, subject:'english', question:'Which word is a synonym for "happy"?', options:['sad','angry','joyful','tired'], answer:2, explanation:'"Joyful" means the same as "happy" — both show a positive feeling.' },
  { grade:3, subject:'english', question:'What does a dictionary help you find?', options:['Math answers','Meanings of words','Addresses','Recipes'], answer:1, explanation:'A dictionary gives you the definition and spelling of words.' },
  { grade:3, subject:'english', question:'Which sentence uses "their" correctly?', options:['Their going home.','The dog wagged their tail.','The children brought their books.','Their is a park nearby.'], answer:2, explanation:'"Their" is possessive — it shows something belongs to them.' },
  { grade:3, subject:'english', question:'What type of text is a recipe?', options:['Narrative','Poem','Instructional','Report'], answer:2, explanation:'A recipe gives instructions on how to make food, so it is instructional.' },
  // Science
  { grade:3, subject:'science', question:'What are the three states of matter?', options:['Hot, cold, warm','Solid, liquid, gas','Big, small, medium','Hard, soft, sticky'], answer:1, explanation:'Matter exists as a solid, liquid, or gas depending on temperature.' },
  { grade:3, subject:'science', question:'What is the function of roots in a plant?', options:['Make food','Absorb water and nutrients','Produce seeds','Catch sunlight'], answer:1, explanation:'Roots anchor the plant and absorb water and minerals from the soil.' },
  { grade:3, subject:'science', question:'Which planet is closest to the Sun?', options:['Venus','Earth','Mercury','Mars'], answer:2, explanation:'Mercury is the first planet and closest to the Sun.' },
  { grade:3, subject:'science', question:'What type of animal is a whale?', options:['Fish','Reptile','Mammal','Bird'], answer:2, explanation:'Whales are mammals — they breathe air, are warm-blooded, and feed their babies milk.' },
  { grade:3, subject:'science', question:'What happens to water when it is heated to 100°C?', options:['It freezes','It evaporates (boils)','It stays the same','It becomes ice'], answer:1, explanation:'Water boils at 100°C and turns into steam (gas).' },
  { grade:3, subject:'science', question:'Why do we need the Sun?', options:['For rain','For light and energy','For wind','For soil'], answer:1, explanation:'The Sun gives us light, warmth, and energy that all living things depend on.' },
  // Afrikaans
  { grade:3, subject:'afrikaans', question:'Wat is die teenoorgestelde van "groot"?', options:['vinnig','mooi','klein','lank'], answer:2, explanation:'Die teenoorgestelde (antoniem) van "groot" is "klein".' },
  { grade:3, subject:'afrikaans', question:'Watter woord is \'n selfstandige naamwoord?', options:['hardloop','mooi','tafel','vinnig'], answer:2, explanation:'Selfstandige naamwoorde is name van dinge. "Tafel" is \'n ding.' },
  { grade:3, subject:'afrikaans', question:'Hoe sê jy "I am hungry" in Afrikaans?', options:['Ek is bly.','Ek is honger.','Ek is moeg.','Ek is siek.'], answer:1, explanation:'"Ek is honger" beteken "I am hungry".' },
  { grade:3, subject:'afrikaans', question:'Wat is die meervoud van "boom"?', options:['boomte','bome','booms','boom'], answer:1, explanation:'"Boom" se meervoud is "bome" (trees).' },
  { grade:3, subject:'afrikaans', question:'Watter sin gebruik "het" korrek?', options:['Ek het gister gespeel.','Ek het môre speel.','Ek het nou speel.','Ek het leer.'], answer:0, explanation:'"Het" word gebruik vir die verlede tyd: "Ek het gister gespeel."' },
  { grade:3, subject:'afrikaans', question:'Wat beteken "reën"?', options:['Sun','Snow','Rain','Wind'], answer:2, explanation:'"Reën" beteken "rain" in Afrikaans.' },
  // Life Skills
  { grade:3, subject:'lifeskills', question:'What is a budget?', options:['A type of food','A plan for spending money','A school subject','A game'], answer:1, explanation:'A budget is a plan that shows how much money you have and how you will spend it.' },
  { grade:3, subject:'lifeskills', question:'What does "responsibility" mean?', options:['Being fast','Doing your duties and being reliable','Being smart','Playing games'], answer:1, explanation:'Responsibility means doing what you are supposed to do and being dependable.' },
  { grade:3, subject:'lifeskills', question:'Which of these is a natural disaster?', options:['A party','A flood','A birthday','A holiday'], answer:1, explanation:'A flood is a natural disaster caused by too much water.' },
  { grade:3, subject:'lifeskills', question:'What is bullying?', options:['Playing with friends','Helping someone','Hurting or being mean to someone repeatedly','Sharing food'], answer:2, explanation:'Bullying is when someone is mean or hurtful to another person again and again.' },
  { grade:3, subject:'lifeskills', question:'Why is it important to vote in elections?', options:['To win money','To choose leaders for our country','To get time off school','To meet friends'], answer:1, explanation:'Voting lets citizens choose who will lead and make decisions for their community.' },
  { grade:3, subject:'lifeskills', question:'What is the South African flag known for?', options:['Having one colour','Its many bright colours and the Y-shape','Being all green','Having only stars'], answer:1, explanation:'The South African flag has 6 colours and a unique Y-shape, representing unity in diversity.' },

  // ── Grade 4 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:4, subject:'maths', question:'What is 234 × 4?', options:['836','926','936','846'], answer:2, explanation:'234 × 4: 4×4=16, write 6 carry 1; 4×3+1=13, write 3 carry 1; 4×2+1=9. Answer: 936.' },
  { grade:4, subject:'maths', question:'What is the value of 7 in 4 735?', options:['7','70','700','7000'], answer:2, explanation:'In 4 735, the 7 is in the hundreds position, so its value is 700.' },
  { grade:4, subject:'maths', question:'What is 3/4 of 40?', options:['10','20','30','15'], answer:2, explanation:'1/4 of 40 = 10, so 3/4 = 3 × 10 = 30.' },
  { grade:4, subject:'maths', question:'Which is a prime number?', options:['9','15','7','21'], answer:2, explanation:'7 is prime because it is only divisible by 1 and 7.' },
  { grade:4, subject:'maths', question:'What is the area of a rectangle 6 cm × 4 cm?', options:['10 cm²','20 cm²','24 cm²','24 cm'], answer:2, explanation:'Area = length × width = 6 × 4 = 24 cm².' },
  { grade:4, subject:'maths', question:'What is 0.5 as a fraction?', options:['1/4','1/3','1/5','1/2'], answer:3, explanation:'0.5 = 5/10 = 1/2 (one half).' },
  // English
  { grade:4, subject:'english', question:'What is a metaphor?', options:['A comparison using like or as','A direct comparison saying something IS something else','A type of punctuation','A kind of noun'], answer:1, explanation:'A metaphor says something IS something else, e.g. "Life is a journey."' },
  { grade:4, subject:'english', question:'Which word is a verb?', options:['beautiful','happiness','quickly','dance'], answer:3, explanation:'Verbs are action or being words. "Dance" is an action.' },
  { grade:4, subject:'english', question:'What is the correct plural of "wolf"?', options:['wolfs','wolves','wolfes','wolve'], answer:1, explanation:'"Wolf" → "wolves" (change f to v and add -es).' },
  { grade:4, subject:'english', question:'What does "prefix" mean?', options:['Letters added at the end of a word','Letters added at the start of a word','A type of sentence','A punctuation mark'], answer:1, explanation:'A prefix is added to the beginning of a word to change its meaning, e.g. "un-" in "unhappy".' },
  { grade:4, subject:'english', question:'Which text type would you use to persuade someone?', options:['Narrative','Recipe','Persuasive essay','Diary'], answer:2, explanation:'A persuasive essay uses arguments and evidence to convince the reader.' },
  { grade:4, subject:'english', question:'What is a simile?', options:['A comparison using "like" or "as"','A very long word','A type of verb','A punctuation mark'], answer:0, explanation:'A simile compares using "like" or "as", e.g. "As brave as a lion."' },
  // Science
  { grade:4, subject:'science', question:'What are living things that make their own food called?', options:['Consumers','Producers','Decomposers','Predators'], answer:1, explanation:'Producers (plants) make their own food through photosynthesis.' },
  { grade:4, subject:'science', question:'What is photosynthesis?', options:['How animals breathe','How plants make food using sunlight','How water evaporates','How rocks form'], answer:1, explanation:'Photosynthesis: plants use sunlight, water, and CO₂ to produce food and oxygen.' },
  { grade:4, subject:'science', question:'Which layer of the Earth is the hottest?', options:['Crust','Mantle','Outer core','Inner core'], answer:3, explanation:'The inner core is the hottest part of the Earth — made of solid iron and nickel.' },
  { grade:4, subject:'science', question:'What is the unit of electrical current?', options:['Watt','Volt','Ampere','Ohm'], answer:2, explanation:'Electrical current is measured in Amperes (Amps).' },
  { grade:4, subject:'science', question:'What is the food chain?', options:['A menu of food','The order in which living things eat each other','A type of recipe','How food is cooked'], answer:1, explanation:'A food chain shows what eats what in nature, e.g. plant → insect → frog → eagle.' },
  { grade:4, subject:'science', question:'What force pulls objects towards the Earth?', options:['Magnetism','Friction','Gravity','Electricity'], answer:2, explanation:'Gravity is the force that pulls all objects toward the centre of the Earth.' },
  // Afrikaans
  { grade:4, subject:'afrikaans', question:'Wat is die verlede tyd van "eet"?', options:['geëet','geeet','geeit','gegeet'], answer:0, explanation:'"Eet" se verlede tyd is "geëet" (the past tense of "eat").' },
  { grade:4, subject:'afrikaans', question:'Watter woord is \'n byvoeglike naamwoord?', options:['spring','rooi','tafel','lag'], answer:1, explanation:'Byvoeglike naamwoorde beskryf selfstandige naamwoorde. "Rooi" beskryf \'n kleur.' },
  { grade:4, subject:'afrikaans', question:'Wat is die meervoud van "vrou"?', options:['vroue','vrous','vrouens','vrowe'], answer:0, explanation:'"Vrou" se meervoud is "vroue" (women).' },
  { grade:4, subject:'afrikaans', question:'Hoe sê jy "We are going to school" in Afrikaans?', options:['Ons gaan na skool.','Ons was by skool.','Ons bly by skool.','Ons speel op skool.'], answer:0, explanation:'"Ons gaan na skool" beteken "We are going to school".' },
  { grade:4, subject:'afrikaans', question:'Wat is \'n werkwoord?', options:['\'n Woord wat \'n ding beskryf','\'n Aksiewoord','\'n Naam van \'n plek','\'n Kleurwoord'], answer:1, explanation:'\'n Werkwoord is \'n aksiewoord, soos "loop", "eet", of "speel".' },
  { grade:4, subject:'afrikaans', question:'Wat beteken "nagmerrie"?', options:['A sweet dream','A nightmare','A bedtime story','A lullaby'], answer:1, explanation:'"Nagmerrie" beteken "nightmare" in Afrikaans.' },
  // Life Skills
  { grade:4, subject:'lifeskills', question:'What does HIV stand for?', options:['Human Incredible Virus','Human Immunodeficiency Virus','Healthy Immune Virus','High Internal Virus'], answer:1, explanation:'HIV stands for Human Immunodeficiency Virus — it weakens the immune system.' },
  { grade:4, subject:'lifeskills', question:'What is peer pressure?', options:['Pressure from parents','Influence from friends to do something','School work pressure','Physical pressure'], answer:1, explanation:'Peer pressure is when friends influence you to do things you might not want to do.' },
  { grade:4, subject:'lifeskills', question:'What does "democracy" mean?', options:['Rule by one person','Government by the people','Rule by the army','No government'], answer:1, explanation:'Democracy means the people have the power and choose their leaders by voting.' },
  { grade:4, subject:'lifeskills', question:'What is the name of South Africa\'s constitution?', options:['The Charter','The Freedom Bill','The Constitution of the Republic of South Africa','The National Act'], answer:2, explanation:'South Africa\'s Constitution came into effect in 1996 and protects everyone\'s rights.' },
  { grade:4, subject:'lifeskills', question:'Which vitamin do we get from sunlight?', options:['Vitamin A','Vitamin B','Vitamin C','Vitamin D'], answer:3, explanation:'Our skin makes Vitamin D when exposed to sunlight — important for strong bones.' },
  { grade:4, subject:'lifeskills', question:'What is stereotyping?', options:['Making art','Assuming things about all people in a group','A type of music','Learning a language'], answer:1, explanation:'Stereotyping is making unfair, fixed assumptions about a whole group of people.' },

  // ── Grade 5 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:5, subject:'maths', question:'What is 25% of 200?', options:['25','50','75','100'], answer:1, explanation:'25% = 1/4. A quarter of 200 is 50.' },
  { grade:5, subject:'maths', question:'Simplify: 12/16', options:['2/3','3/4','4/5','1/2'], answer:1, explanation:'Divide both by 4: 12÷4=3, 16÷4=4. So 12/16 = 3/4.' },
  { grade:5, subject:'maths', question:'What is 2.4 × 3?', options:['6.2','7.2','7.4','6.4'], answer:1, explanation:'2.4 × 3 = 7.2. Think: 24 × 3 = 72, then divide by 10.' },
  { grade:5, subject:'maths', question:'What is the volume of a cube with side 3 cm?', options:['9 cm³','18 cm³','27 cm³','12 cm³'], answer:2, explanation:'Volume of cube = side³ = 3×3×3 = 27 cm³.' },
  { grade:5, subject:'maths', question:'What is the LCM of 4 and 6?', options:['2','8','12','24'], answer:2, explanation:'Multiples of 4: 4,8,12... Multiples of 6: 6,12... First common is 12.' },
  { grade:5, subject:'maths', question:'If a bag of rice costs R35 and you buy 4 bags, how much change do you get from R200?', options:['R50','R60','R65','R40'], answer:1, explanation:'4×35=R140. Change = R200 - R140 = R60.' },
  // English
  { grade:5, subject:'english', question:'What is an idiom?', options:['A type of poem','A phrase with a non-literal meaning','A grammar rule','A type of verb'], answer:1, explanation:'Idioms are expressions whose meaning differs from the literal words, e.g. "It\'s raining cats and dogs."' },
  { grade:5, subject:'english', question:'What is the subject of: "The fast car zoomed past"?', options:['fast','car','zoomed','past'], answer:1, explanation:'The subject is who or what the sentence is about — "The fast car".' },
  { grade:5, subject:'english', question:'Which word correctly completes: "She __ to school every day"?', options:['walk','walks','walking','walked'], answer:1, explanation:'With "she" (third person singular) in present tense, add -s: "walks".' },
  { grade:5, subject:'english', question:'What is the purpose of a heading?', options:['To end a paragraph','To tell you what a text is about','To list items','To describe a character'], answer:1, explanation:'A heading tells you the topic or main idea of the text that follows.' },
  { grade:5, subject:'english', question:'What is an antonym?', options:['A word with a similar meaning','A word with the opposite meaning','A made-up word','A very long word'], answer:1, explanation:'Antonyms are words with opposite meanings, e.g. "hot" and "cold".' },
  { grade:5, subject:'english', question:'What type of sentence is "What time does the film start?"', options:['Statement','Question','Exclamation','Command'], answer:1, explanation:'This is a question because it asks for information and ends with a question mark.' },
  // Science
  { grade:5, subject:'science', question:'What is the chemical formula for water?', options:['CO₂','H₂O','O₂','NaCl'], answer:1, explanation:'Water is made of 2 hydrogen atoms and 1 oxygen atom: H₂O.' },
  { grade:5, subject:'science', question:'What is the function of chlorophyll?', options:['Absorbs water','Gives plants their green colour and absorbs sunlight','Produces seeds','Breaks down soil'], answer:1, explanation:'Chlorophyll is the green pigment in plants that captures sunlight for photosynthesis.' },
  { grade:5, subject:'science', question:'What is an ecosystem?', options:['A type of animal','A community of living things and their environment','A scientific instrument','A type of soil'], answer:1, explanation:'An ecosystem includes all the living organisms and their physical environment in an area.' },
  { grade:5, subject:'science', question:'What causes day and night?', options:['The Moon moving around Earth','Earth rotating on its axis','The Sun moving around Earth','Clouds blocking sunlight'], answer:1, explanation:'Earth rotates (spins) on its axis every 24 hours, causing day and night.' },
  { grade:5, subject:'science', question:'Which organ pumps blood around the body?', options:['Lungs','Liver','Heart','Kidney'], answer:2, explanation:'The heart is a muscle that pumps blood through the body\'s blood vessels.' },
  { grade:5, subject:'science', question:'What is a renewable energy source?', options:['Coal','Petrol','Solar energy','Natural gas'], answer:2, explanation:'Solar energy comes from the Sun and is renewable — it will not run out.' },
  // Afrikaans
  { grade:5, subject:'afrikaans', question:'Wat is \'n idioom?', options:['\'n Versie','\'n Uitdrukking met \'n figuurlike betekenis','\'n Lang woord','\'n Grammatikareël'], answer:1, explanation:'\'n Idioom is \'n uitdrukking waarvan die betekenis verskil van die letterlike woorde.' },
  { grade:5, subject:'afrikaans', question:'Wat is die lydende vorm van "Die seun gooi die bal"?', options:['Die bal is gegooi deur die seun','Die seun het die bal gegooi','Die bal gooi die seun','Die seun gooi na die bal'], answer:0, explanation:'Lydende vorm: "Die bal is gegooi deur die seun" (passive voice).' },
  { grade:5, subject:'afrikaans', question:'Watter woord is \'n bywoord?', options:['skool','vinnig','tafel','rooi'], answer:1, explanation:'\'n Bywoord beskryf hoe iets gedoen word. "Vinnig" beskryf die manier van handeling.' },
  { grade:5, subject:'afrikaans', question:'Wat beteken "omgewing"?', options:['A building','A person','The environment/surroundings','A type of food'], answer:2, explanation:'"Omgewing" beteken "environment" of "surroundings" in Afrikaans.' },
  { grade:5, subject:'afrikaans', question:'Hoe skryf jy 456 in Afrikaans?', options:['vierhonderd ses-en-vyftig','vyfhonderd vier-en-ses','vierduisend vyftig-ses','vierhonderd vyftig-ses'], answer:0, explanation:'456 in Afrikaans: vierhonderd ses-en-vyftig.' },
  { grade:5, subject:'afrikaans', question:'Wat is die verkleiningsvorm van "kat"?', options:['kattie','katjie','katje','katke'], answer:1, explanation:'Die verkleinwoord van "kat" is "katjie" (a small cat / kitten).' },
  // Life Skills
  { grade:5, subject:'lifeskills', question:'What is puberty?', options:['A type of sport','The physical changes the body goes through growing from child to adult','A school subject','A cultural celebration'], answer:1, explanation:'Puberty is the time when the body changes and develops from a child\'s body to an adult\'s body.' },
  { grade:5, subject:'lifeskills', question:'What does it mean to have good self-esteem?', options:['Being angry often','Feeling confident and positive about yourself','Avoiding others','Being the best at sport'], answer:1, explanation:'Good self-esteem means you value yourself, feel confident, and believe in your own worth.' },
  { grade:5, subject:'lifeskills', question:'What is the importance of the Bill of Rights in South Africa?', options:['It lists sports teams','It protects the rights of all people in South Africa','It describes SA food','It lists school rules'], answer:1, explanation:'The Bill of Rights (Chapter 2 of the Constitution) guarantees rights like equality, dignity, and freedom for everyone.' },
  { grade:5, subject:'lifeskills', question:'What is substance abuse?', options:['Using medicines correctly','Using drugs or alcohol in harmful ways','Eating too much sugar','Not exercising'], answer:1, explanation:'Substance abuse is the harmful use of drugs, alcohol, or other substances that damage health.' },
  { grade:5, subject:'lifeskills', question:'What is the difference between a want and a need?', options:['There is no difference','A need is essential to survive; a want is something extra','A want is more important','Needs are things you buy'], answer:1, explanation:'Needs are essential (food, water, shelter). Wants are extras that we would like but can live without.' },
  { grade:5, subject:'lifeskills', question:'What is xenophobia?', options:['A fear of animals','A fear or hatred of foreigners or people from other countries','A type of sport','A school subject'], answer:1, explanation:'Xenophobia is prejudice or hostility towards people from other countries — it goes against human rights.' },

  // ── Grade 6 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:6, subject:'maths', question:'What is 15% of 360?', options:['42','54','45','36'], answer:1, explanation:'15% of 360 = 0.15 × 360 = 54.' },
  { grade:6, subject:'maths', question:'Solve for x: 3x + 7 = 22', options:['x=4','x=5','x=6','x=3'], answer:1, explanation:'3x = 22-7 = 15, so x = 15÷3 = 5.' },
  { grade:6, subject:'maths', question:'What is the mean of: 4, 8, 6, 10, 12?', options:['6','8','10','9'], answer:1, explanation:'Mean = sum ÷ count = (4+8+6+10+12)÷5 = 40÷5 = 8.' },
  { grade:6, subject:'maths', question:'What is 2³?', options:['5','6','8','9'], answer:2, explanation:'2³ = 2×2×2 = 8.' },
  { grade:6, subject:'maths', question:'Convert 3/8 to a decimal.', options:['0.25','0.375','0.38','0.3'], answer:1, explanation:'3 ÷ 8 = 0.375.' },
  { grade:6, subject:'maths', question:'A shop gives 20% discount on R250. What is the sale price?', options:['R180','R200','R210','R220'], answer:1, explanation:'Discount = 20% of 250 = 50. Sale price = 250 - 50 = R200.' },
  // English
  { grade:6, subject:'english', question:'What is the passive voice?', options:['When the subject performs the action','When the action is performed on the subject','A type of adjective','A tense'], answer:1, explanation:'Passive voice: "The book was read by Maria" (the subject receives the action).' },
  { grade:6, subject:'english', question:'What is a clause?', options:['A type of punctuation','A group of words with a subject and verb','A paragraph','A type of adjective'], answer:1, explanation:'A clause has a subject and a verb. "When she sang" is a clause.' },
  { grade:6, subject:'english', question:'Identify the literary device: "The wind whispered secrets"', options:['Simile','Metaphor','Personification','Alliteration'], answer:2, explanation:'Personification gives human qualities to non-human things. Wind cannot really whisper.' },
  { grade:6, subject:'english', question:'What is the difference between denotation and connotation?', options:['No difference','Denotation is literal meaning; connotation is associated feelings','Connotation is always negative','Denotation is old-fashioned'], answer:1, explanation:'Denotation = the dictionary meaning. Connotation = the emotional associations of a word.' },
  { grade:6, subject:'english', question:'Which sentence contains a subordinate clause?', options:['She ran fast.','Although it was raining, they played outside.','The dog barked.','I ate lunch.'], answer:1, explanation:'"Although it was raining" is a subordinate clause — it cannot stand alone.' },
  { grade:6, subject:'english', question:'What is irony?', options:['Saying what you mean directly','When words are used to mean the opposite of what is said','A type of rhyme','A comparison'], answer:1, explanation:'Irony is when words mean the opposite, or when events turn out the opposite of what is expected.' },
  // Science
  { grade:6, subject:'science', question:'What is Newton\'s First Law of Motion?', options:['Every action has an equal and opposite reaction','An object stays at rest or moves in a straight line unless acted on by a force','Force equals mass times acceleration','Objects attract each other'], answer:1, explanation:'Newton\'s 1st Law (Inertia): an object will not change its motion unless a force acts on it.' },
  { grade:6, subject:'science', question:'What is the difference between a mixture and a compound?', options:['No difference','A mixture can be separated easily; a compound cannot be separated easily','A compound is always liquid','A mixture has only one substance'], answer:1, explanation:'In a mixture, substances keep their properties and can be separated. Compounds are chemically bonded and harder to separate.' },
  { grade:6, subject:'science', question:'What is the water cycle?', options:['How fish swim','The continuous movement of water through evaporation, condensation and precipitation','How we drink water','How plants grow'], answer:1, explanation:'The water cycle: evaporation → water vapour rises → condensation forms clouds → precipitation (rain/snow).' },
  { grade:6, subject:'science', question:'What is the function of the nervous system?', options:['To pump blood','To digest food','To carry messages between the brain and body','To make bones'], answer:2, explanation:'The nervous system sends electrical signals between the brain and all parts of the body.' },
  { grade:6, subject:'science', question:'What is a fossil?', options:['A type of rock only','Preserved remains or traces of ancient living things','A type of plant','A type of metal'], answer:1, explanation:'Fossils are preserved remains, imprints, or traces of organisms from the distant past.' },
  { grade:6, subject:'science', question:'What is biodiversity?', options:['A type of experiment','The variety of all life forms in an ecosystem','A single species of animal','A weather pattern'], answer:1, explanation:'Biodiversity refers to the variety of living organisms in a given area — the more variety, the healthier the ecosystem.' },
  // Afrikaans
  { grade:6, subject:'afrikaans', question:'Wat is \'n beknopte bysin?', options:['\'n Selfstandige sin','\'n Afhanklike sin','\'n Lang sin','\'n Vraagsin'], answer:1, explanation:'\'n Beknopte bysin is \'n afhanklike sin wat op \'n hoofsin staatmaak.' },
  { grade:6, subject:'afrikaans', question:'Wat is die lydende vorm van "Hy eet die brood"?', options:['Die brood is deur hom geëet.','Hy het die brood geëet.','Die brood eet hom.','Hy eet die brood gou.'], answer:0, explanation:'Lydende vorm: "Die brood is deur hom geëet." (Passive: the bread was eaten by him.)' },
  { grade:6, subject:'afrikaans', question:'Watter taal het Afrikaans geword?', options:['Dutch (Nederlands)','French','German','Portuguese'], answer:0, explanation:'Afrikaans het hoofsaaklik ontwikkel uit Nederlands (Dutch) wat deur setlaars na Suid-Afrika gebring is.' },
  { grade:6, subject:'afrikaans', question:'Wat beteken "beskawing"?', options:['A river','Civilisation','A mountain','A type of food'], answer:1, explanation:'"Beskawing" beteken "civilisation" in Afrikaans.' },
  { grade:6, subject:'afrikaans', question:'Identifiseer die figuurlike taal: "Die wind sing in die bome."', options:['Vergelyking','Personifikasie','Alliterasie','Metafoor'], answer:1, explanation:'Personifikasie gee menslike eienskappe aan iets nie-menslik. Wind kan nie werklik sing nie.' },
  { grade:6, subject:'afrikaans', question:'Wat is die meervoude van "mens" in formele Afrikaans?', options:['mensens','mense','menses','mensers'], answer:1, explanation:'Die meervoud van "mens" is "mense" (people/humans).' },
  // Life Skills
  { grade:6, subject:'lifeskills', question:'What is the difference between aerobic and anaerobic exercise?', options:['No difference','Aerobic uses oxygen for sustained activity; anaerobic is short intense bursts','Anaerobic is safer','Aerobic is only for adults'], answer:1, explanation:'Aerobic exercise (running, cycling) uses oxygen. Anaerobic (sprinting, lifting) does not use oxygen and burns stored energy.' },
  { grade:6, subject:'lifeskills', question:'What is gender-based violence (GBV)?', options:['Violence in sport','Violence directed at someone because of their gender','Homework problems','A school subject'], answer:1, explanation:'GBV is violence or harm directed at a person because of their gender — it is a serious human rights violation.' },
  { grade:6, subject:'lifeskills', question:'What are human rights?', options:['Rules only for adults','Rights that every person is born with, regardless of race or gender','Rights only for South Africans','School rules'], answer:1, explanation:'Human rights are universal — every person on Earth has them by virtue of being human.' },
  { grade:6, subject:'lifeskills', question:'What does "reconciliation" mean in South Africa\'s context?', options:['Winning a competition','Healing divisions and building peace after apartheid','A type of maths calculation','Forming a sports team'], answer:1, explanation:'Reconciliation means different groups come together, heal past wounds, and build a peaceful future.' },
  { grade:6, subject:'lifeskills', question:'What is a balanced diet?', options:['Eating only fruit','Eating the right amounts of all food groups','Eating very little','Eating only protein'], answer:1, explanation:'A balanced diet includes carbohydrates, proteins, fats, vitamins, minerals, and water in the right proportions.' },
  { grade:6, subject:'lifeskills', question:'What is first aid?', options:['A school subject','Immediate care given to an injured or ill person before professional help arrives','A type of medicine','A sporting event'], answer:1, explanation:'First aid is immediate basic treatment given to someone who is hurt or ill until proper medical help is available.' },

  // ── Grade 7 ────────────────────────────────────────────────────────────────
  // Maths
  { grade:7, subject:'maths', question:'Solve: 2x - 5 = 11', options:['x=6','x=7','x=8','x=9'], answer:2, explanation:'2x = 11+5 = 16, x = 16÷2 = 8.' },
  { grade:7, subject:'maths', question:'What is the gradient of a line passing through (0,0) and (3,6)?', options:['1','2','3','6'], answer:1, explanation:'Gradient = rise/run = (6-0)/(3-0) = 6/3 = 2.' },
  { grade:7, subject:'maths', question:'Simplify: 5a + 3b - 2a + b', options:['3a+4b','7a+4b','3a+2b','7a+2b'], answer:0, explanation:'Combine like terms: 5a-2a=3a, 3b+b=4b. Answer: 3a+4b.' },
  { grade:7, subject:'maths', question:'What is the probability of rolling a 4 on a standard die?', options:['1/4','1/5','1/6','1/3'], answer:2, explanation:'A die has 6 equal faces. Probability of rolling 4 = 1/6.' },
  { grade:7, subject:'maths', question:'What is the Pythagorean theorem?', options:['a+b=c','a²+b²=c²','a×b=c','a²-b²=c²'], answer:1, explanation:'In a right triangle: a²+b²=c² where c is the hypotenuse (longest side).' },
  { grade:7, subject:'maths', question:'What is -8 + 3?', options:['-11','-5','5','11'], answer:1, explanation:'-8 + 3 = -5. Starting at -8, move 3 steps right on the number line.' },
  // English
  { grade:7, subject:'english', question:'What is the theme of a text?', options:['The setting','The central message or idea of the text','The characters','The plot'], answer:1, explanation:'The theme is the underlying message or lesson the author conveys throughout the text.' },
  { grade:7, subject:'english', question:'What is a rhetorical question?', options:['A question asked to get information','A question asked for effect, not expecting an answer','A type of punctuation','An interview question'], answer:1, explanation:'Rhetorical questions are asked for effect or emphasis, not to get a reply: "Isn\'t it obvious?"' },
  { grade:7, subject:'english', question:'What is the difference between formal and informal language?', options:['Formal is used with friends; informal at work','Formal is professional/structured; informal is casual/relaxed','No difference','Formal uses slang'], answer:1, explanation:'Formal language follows standard rules and is used in professional settings. Informal is relaxed, used with friends.' },
  { grade:7, subject:'english', question:'What is alliteration?', options:['Words that rhyme','Repetition of the same consonant sound at the start of nearby words','A type of comparison','The opposite of a word'], answer:1, explanation:'Alliteration: "Peter Piper picked a peck of pickled peppers" — the P sound repeats.' },
  { grade:7, subject:'english', question:'What is the plot of a story?', options:['Who the characters are','Where the story takes place','The sequence of events','The lesson of the story'], answer:2, explanation:'The plot is the sequence of events that make up the story.' },
  { grade:7, subject:'english', question:'What does "infer" mean in reading?', options:['To look up a word','To read aloud','To use clues in the text to figure out what is not stated directly','To copy a sentence'], answer:2, explanation:'Inferring means "reading between the lines" — using evidence and reasoning to understand what the author implies.' },
  // Science
  { grade:7, subject:'science', question:'What is the difference between speed and velocity?', options:['No difference','Speed is how fast; velocity is speed WITH direction','Velocity is faster than speed','Speed includes direction'], answer:1, explanation:'Speed = how fast (scalar). Velocity = speed in a specific direction (vector).' },
  { grade:7, subject:'science', question:'What is an atom?', options:['The smallest living thing','The basic unit of matter that makes up all substances','A type of cell','A type of energy'], answer:1, explanation:'An atom is the smallest unit of an element that retains the chemical properties of that element.' },
  { grade:7, subject:'science', question:'What does DNA stand for?', options:['Deoxyribonucleic Acid','Digital Nucleic Arrangement','Dynamic Natural Acid','Dense Nuclei Assembly'], answer:0, explanation:'DNA stands for Deoxyribonucleic Acid — it carries the genetic instructions for all living organisms.' },
  { grade:7, subject:'science', question:'What is the greenhouse effect?', options:['Growing plants in a glass house','The trapping of heat in Earth\'s atmosphere by gases like CO₂','A type of experiment','Making glass'], answer:1, explanation:'The greenhouse effect: greenhouse gases trap heat from the Sun in Earth\'s atmosphere, warming the planet.' },
  { grade:7, subject:'science', question:'What is a cell?', options:['A prison room','The basic unit of life in all living organisms','A type of battery','A computer part'], answer:1, explanation:'The cell is the basic structural and functional unit of all living organisms.' },
  { grade:7, subject:'science', question:'What is the difference between inherited and acquired traits?', options:['No difference','Inherited traits come from parents via genes; acquired traits develop during your life','Acquired traits are genetic','Inherited traits change over time'], answer:1, explanation:'Inherited traits (eye colour, blood type) come from your genes. Acquired traits (a scar, a skill) develop from life experiences.' },
  // Afrikaans
  { grade:7, subject:'afrikaans', question:'Wat is \'n toutologisme?', options:['\'n Kort sin','Die onnodige herhaling van dieselfde betekenis','\'n Persoonlike verwysing','\'n Vraagsin'], answer:1, explanation:'\'n Toutologisme is wanneer dieselfde idee onnodig herhaal word, bv. "gratis geskenk".' },
  { grade:7, subject:'afrikaans', question:'Wat beteken "polemiek"?', options:['A type of food','A serious debate or argument','A type of dance','A school subject'], answer:1, explanation:'"Polemiek" beteken \'n hewige debat of argument, veral oor \'n kontroversiële onderwerp.' },
  { grade:7, subject:'afrikaans', question:'Wat is \'n statiese werkwoord?', options:['\'n Aksiewerkwoord','\'n Werkwoord wat \'n toestand beskryf (nie \'n aksie)','\'n Verlede tyd','\'n Vraagwoord'], answer:1, explanation:'Statiese werkwoorde beskryf toestande: "weet", "het", "is" — nie fisieke aksies nie.' },
  { grade:7, subject:'afrikaans', question:'Identifiseer die retoriese vraag: ', options:['Wat is jou naam?','Hoe laat is dit?','Is dit nie pragtig nie?','Waar bly jy?'], answer:2, explanation:'"Is dit nie pragtig nie?" is \'n retoriese vraag — dit word vir effek gevra, nie vir \'n antwoord nie.' },
  { grade:7, subject:'afrikaans', question:'Wat is die verskil tussen denotatiewe en konnotatiewe betekenis?', options:['Geen verskil','Denotatief = letterlike betekenis; konnotatief = gevoelswaarde','Konnotatief is altyd negatief','Denotatief is verouderd'], answer:1, explanation:'Denotatiewe betekenis is die woordeboekbetekenis. Konnotatiewe betekenis sluit gevoelens en assosiasies in.' },
  { grade:7, subject:'afrikaans', question:'Wat is \'n eufemisme?', options:['\'n Sterk belediging','\'n Sagter woord of frase vir iets onaangenaam','\'n Tipe rym','\'n Metafoor'], answer:1, explanation:'\'n Eufemisme is \'n sagter of beleefder uitdrukking, bv. "hy het heengegaan" in plaas van "hy het gesterf".' },
  // Life Skills
  { grade:7, subject:'lifeskills', question:'What is the meaning of "ubuntu"?', options:['A computer system','I am because we are — a philosophy of human interconnectedness','A type of food','A South African sport'], answer:1, explanation:'Ubuntu is an African philosophy meaning "I am because we are" — emphasising community, compassion, and shared humanity.' },
  { grade:7, subject:'lifeskills', question:'What is emotional intelligence?', options:['Being very smart in Maths','The ability to understand and manage your own and others\' emotions','A type of test','Physical fitness'], answer:1, explanation:'Emotional intelligence (EQ) is the ability to identify, understand, manage, and use emotions effectively.' },
  { grade:7, subject:'lifeskills', question:'What does "sustainable development" mean?', options:['Building more factories','Development that meets current needs without compromising future generations','Developing software','Growing more food'], answer:1, explanation:'Sustainable development meets today\'s needs without harming the ability of future generations to meet their own needs.' },
  { grade:7, subject:'lifeskills', question:'What is the role of the National Prosecuting Authority (NPA) in South Africa?', options:['To make laws','To prosecute criminal cases on behalf of the state','To collect taxes','To build roads'], answer:1, explanation:'The NPA prosecutes people accused of crimes in South Africa\'s courts in the name of the state.' },
  { grade:7, subject:'lifeskills', question:'What is the meaning of "integrity"?', options:['Physical strength','Being honest and having strong moral principles','Being popular','Being smart'], answer:1, explanation:'Integrity means being honest, trustworthy, and standing by your moral principles even when it\'s difficult.' },
  { grade:7, subject:'lifeskills', question:'What does the Constitution say about education?', options:['Education is only for citizens','Everyone has the right to a basic education','Education ends at Grade 7','Only boys can go to school'], answer:1, explanation:'Section 29 of the Constitution states that everyone has the right to a basic education, including adult basic education.' },
]

// ─── LESSONS ───────────────────────────────────────────────────────────────────
export const LESSONS = [
  // Grade 1 Maths
  { grade:1, subject:'maths', title:'Counting to 20', emoji:'🔢',
    content:'Let\'s count from 1 to 20! Say each number out loud: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ... 11, 12, 13, 14, 15, 16, 17, 18, 19, 20! Great job! 🎉',
    keyPoints:['Numbers go in order from 1 to 20','After 10 comes 11, 12, 13...','We use numbers every day — to count toys, sweets, and friends!'] },
  { grade:1, subject:'english', title:'The Alphabet Song', emoji:'🔤',
    content:'The alphabet has 26 letters! A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. The vowels are special: A, E, I, O, U. All the other letters are consonants.',
    keyPoints:['There are 26 letters in the alphabet','A, E, I, O, U are vowels','Every word needs at least one vowel'] },
  { grade:1, subject:'science', title:'Living and Non-Living Things', emoji:'🌱',
    content:'Some things are ALIVE (living) and some are NOT alive (non-living). Living things grow, eat, breathe, and can have babies. Plants and animals are living things. Rocks, chairs, and cars are non-living.',
    keyPoints:['Living things grow and change','Living things need food and water','Non-living things do not grow or breathe'] },
  { grade:1, subject:'afrikaans', title:'Kleure / Colours', emoji:'🎨',
    content:'In Afrikaans, colours are: Rooi (Red) 🔴, Blou (Blue) 🔵, Geel (Yellow) 🟡, Groen (Green) 🟢, Oranje (Orange) 🟠, Pers (Purple), Pienk (Pink), Wit (White), Swart (Black).',
    keyPoints:['"Rooi" = Red, "Blou" = Blue, "Geel" = Yellow','Practise saying each colour out loud','Look around and name the colours you see in Afrikaans!'] },
  { grade:1, subject:'lifeskills', title:'My Body', emoji:'🧍',
    content:'Our bodies are amazing! We have: a HEAD with eyes, ears, nose, and mouth. A BODY with arms and hands. LEGS with feet and toes. We must look after our bodies by eating healthy food, drinking water, exercising, and sleeping enough.',
    keyPoints:['Your body has many parts, each with a job','Eating healthy keeps your body strong','Sleep, exercise, and water are very important'] },

  // Grade 4 Maths
  { grade:4, subject:'maths', title:'Understanding Fractions', emoji:'🍕',
    content:'A fraction shows part of a whole. If you cut a pizza into 4 equal slices and eat 1, you have eaten 1/4 (one quarter). The bottom number (denominator) shows how many equal parts. The top number (numerator) shows how many parts you have.',
    keyPoints:['The denominator (bottom) = total equal parts','The numerator (top) = parts you have','1/2 = half, 1/4 = quarter, 3/4 = three quarters'] },
  { grade:4, subject:'science', title:'Food Chains', emoji:'🦁',
    content:'A food chain shows what eats what in nature. It always starts with a plant (producer). Then comes a plant-eater (herbivore), then a meat-eater (carnivore). Example: Grass → Grasshopper → Frog → Eagle. Energy passes along the chain.',
    keyPoints:['Food chains start with producers (plants)','Herbivores eat plants; carnivores eat animals','Energy flows from one organism to the next'] },

  // Grade 4 Afrikaans (CAPS-aligned)
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

  // Grade 7 Maths
  { grade:7, subject:'maths', title:'Introduction to Algebra', emoji:'🔣',
    content:'Algebra uses letters (like x and y) to represent unknown numbers. Example: If x + 5 = 12, what is x? We solve by doing the opposite operation: x = 12 - 5 = 7. Always do the same thing to BOTH sides of the equation.',
    keyPoints:['Letters (variables) represent unknown numbers','Solve equations by doing inverse operations','Always balance both sides of the equation'] },
  { grade:7, subject:'science', title:'Structure of the Atom', emoji:'⚛️',
    content:'An atom has three types of particles: PROTONS (positive charge, in the nucleus), NEUTRONS (no charge, in the nucleus), and ELECTRONS (negative charge, orbiting the nucleus). The atomic number = number of protons. Different elements have different numbers of protons.',
    keyPoints:['Atoms have protons, neutrons, and electrons','Protons and neutrons are in the nucleus','Electrons orbit the nucleus and have negative charge'] },
]

// ─── FLASHCARDS ────────────────────────────────────────────────────────────────
export const FLASHCARDS = [
  // Grade 1
  { grade:1, subject:'maths', front:'2 + 2 = ?', back:'4', emoji:'🔢' },
  { grade:1, subject:'maths', front:'5 - 3 = ?', back:'2', emoji:'🔢' },
  { grade:1, subject:'maths', front:'How many fingers on one hand?', back:'5', emoji:'✋' },
  { grade:1, subject:'maths', front:'1 + 1 + 1 = ?', back:'3', emoji:'🔢' },
  { grade:1, subject:'maths', front:'10 - 5 = ?', back:'5', emoji:'🔢' },
  { grade:1, subject:'english', front:'What is the opposite of BIG?', back:'Small / Little', emoji:'📏' },
  { grade:1, subject:'english', front:'Name a VOWEL', back:'A, E, I, O or U', emoji:'🔤' },
  { grade:1, subject:'english', front:'How do you spell the number 3?', back:'T-H-R-E-E', emoji:'3️⃣' },
  { grade:1, subject:'english', front:'What is a noun?', back:'A person, place, or thing', emoji:'📚' },
  { grade:1, subject:'english', front:'What does a sentence always start with?', back:'A capital letter', emoji:'🆙' },
  { grade:1, subject:'science', front:'What do plants need to grow?', back:'Sunlight, water, soil', emoji:'🌱' },
  { grade:1, subject:'science', front:'What is the largest animal on land?', back:'African Elephant 🐘', emoji:'🐘' },
  { grade:1, subject:'science', front:'What colour is a healthy leaf?', back:'Green 🍃', emoji:'🍃' },
  { grade:1, subject:'science', front:'How many legs does an insect have?', back:'6 legs', emoji:'🐛' },
  { grade:1, subject:'science', front:'What planet do we live on?', back:'Earth 🌍', emoji:'🌍' },
  { grade:1, subject:'afrikaans', front:'Hond', back:'Dog 🐶', emoji:'🐶' },
  { grade:1, subject:'afrikaans', front:'Kat', back:'Cat 🐱', emoji:'🐱' },
  { grade:1, subject:'afrikaans', front:'Skool', back:'School 🏫', emoji:'🏫' },
  { grade:1, subject:'afrikaans', front:'Dankie', back:'Thank you 🙏', emoji:'🙏' },
  { grade:1, subject:'afrikaans', front:'Rooi', back:'Red 🔴', emoji:'🔴' },
  { grade:1, subject:'lifeskills', front:'Name 3 healthy foods', back:'Fruit, vegetables, bread 🥦', emoji:'🥗' },
  { grade:1, subject:'lifeskills', front:'What do you say when you want something?', back:'"Please" 😊', emoji:'😊' },
  { grade:1, subject:'lifeskills', front:'When should you wash your hands?', back:'Before eating & after the toilet', emoji:'🧼' },
  { grade:1, subject:'lifeskills', front:'What colour is a STOP sign?', back:'Red 🛑', emoji:'🛑' },
  { grade:1, subject:'lifeskills', front:'Name a trusted adult you can talk to', back:'Parent, teacher, or guardian', emoji:'👨‍👩‍👧' },

  // Grade 4
  { grade:4, subject:'maths', front:'What is 7 × 8?', back:'56', emoji:'🔢' },
  { grade:4, subject:'maths', front:'What is 1/2 + 1/4?', back:'3/4', emoji:'🍕' },
  { grade:4, subject:'maths', front:'Area formula for a rectangle?', back:'A = length × width', emoji:'📐' },
  { grade:4, subject:'maths', front:'What is 144 ÷ 12?', back:'12', emoji:'🔢' },
  { grade:4, subject:'maths', front:'What is a factor of 12?', back:'1, 2, 3, 4, 6, or 12', emoji:'🔢' },
  { grade:4, subject:'science', front:'What is photosynthesis?', back:'Plants make food using sunlight, CO₂ & water', emoji:'🌿' },
  { grade:4, subject:'science', front:'What is a producer in a food chain?', back:'A plant (makes its own food)', emoji:'🌱' },
  { grade:4, subject:'science', front:'What is the chemical symbol for water?', back:'H₂O', emoji:'💧' },
  { grade:4, subject:'science', front:'How many planets in our solar system?', back:'8 planets', emoji:'🪐' },
  { grade:4, subject:'science', front:'What force keeps us on the ground?', back:'Gravity', emoji:'🌍' },

  // Grade 4 Afrikaans (CAPS-aligned)
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

  // Grade 7
  { grade:7, subject:'maths', front:'What is the Pythagorean theorem?', back:'a² + b² = c²', emoji:'📐' },
  { grade:7, subject:'maths', front:'Solve: 3x = 24', back:'x = 8', emoji:'🔣' },
  { grade:7, subject:'maths', front:'What is the gradient formula?', back:'m = (y₂-y₁)/(x₂-x₁)', emoji:'📈' },
  { grade:7, subject:'maths', front:'What is a rational number?', back:'Any number that can be written as a fraction (p/q)', emoji:'🔢' },
  { grade:7, subject:'maths', front:'What is the median?', back:'The middle value when data is ordered', emoji:'📊' },
  { grade:7, subject:'science', front:'What does DNA stand for?', back:'Deoxyribonucleic Acid', emoji:'🧬' },
  { grade:7, subject:'science', front:'What is a cell membrane?', back:'The thin layer surrounding a cell, controlling what enters and exits', emoji:'🔬' },
  { grade:7, subject:'science', front:'What is Newton\'s 2nd Law?', back:'F = ma (Force = mass × acceleration)', emoji:'⚡' },
  { grade:7, subject:'science', front:'What is the atomic number?', back:'The number of protons in the nucleus of an atom', emoji:'⚛️' },
  { grade:7, subject:'science', front:'What is the greenhouse effect?', back:'Greenhouse gases trap heat in Earth\'s atmosphere', emoji:'🌡️' },
]
