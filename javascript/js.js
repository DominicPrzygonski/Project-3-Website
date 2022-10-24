/*---Menu Show Y Hidden---*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*---Menu Show---*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*---Menu Hidden---*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*---Remove Menu Mobile---*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav-link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
 navLink.forEach(n => n.addEventListener('click', linkAction))   


/*---Change Background Header---*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*---Dark and Light Themes---*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon =  () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*---JSON---*/ 
const dogData = [{
    Breed: "African Wild Dog",
    Description: "An African wild dog is a wild and untamed dog common in central Africa",
    Identifier: "Brown, grey, red, black, white, gold, tan",
    Weight: "17 - 36",
    Lifespan: "10 - 13",
    Temperament: "African wild dogs live in packs that are usually dominated by a monogamous breeding pair.",
    FunFact: "Also known as the painted dog!",
    photo: "../Resources/AfricanWildDog.jpg",
    tags: "1",

},
{
    Breed: "Boerboel",
    Identifier: "Cream, reddish brownm brindlem tawny",
    Description: "Steadfast, calm, highly intelligent, and incredibly loyal. Boerboels must be with their people and will not thrive unless kept as an integral part of their human family.",
    Weight: "68 - 90",
    Lifespan: "10 - 12",
    Temperament: "Smart, Confident, Obedient, Territorial",
    FunFact: "Boerboels love their human families and are especially known for being protectors of their children.",
    photo: "../Resources/Boerboel.jpg",
    tags: "2",

},
{
    Breed: "American Pit Bull Terrier",
    Identifier: "Brown, black, white, tan, brindle",
    Description: "American pit bull terriers generally have a friendly and affectionate personality. They also usually have a very playful temperament and love to engage in games and dog sports with their humans. They also tend to take well to training.",
    Weight: "14 - 27",
    Lifespan: "8 - 15",
    Temperament: "Friendly, loyal, playful, affectionate, and slightly stubborn sometimes",
    FunFact: "These dogs are very energetic and would be up for a game at any given point of time",
    photo: "../Resources/American Pitbull.jpg",
    tags: "3",

},
{
    Breed: "Boston Terrier",
    Identifier: "Brown, grey, red, black, white, tan",
    Description: "Bostons tend to be good-natured, playful dogs. For people who want a cheerful companion, the Boston can be great choice. Bostons generally get along well with other pets, even cats, especially if they are raised together.",
    Weight: "4,5 -11",
    Lifespan: "13 - 15",
    Temperament: "Strong, friendly and devoted",
    FunFact: "The Boston Terrier is people-oriented, always preferring to be with you.",
    photo: "../Resources/Boston.jpg",
    tags: "4",

},
{
    Breed: "Bull Terrier",
    Identifier: "Brown, black, white, tan",
    Description: "Bull terriers are gentle, affectionate and playful with family members. They also are loyal pets that will guard the family.",
    Weight: "22 - 38",
    Lifespan: "10 - 14",
    Temperament: "Friendly and alert but stubborn",
    FunFact: "Bull terriers are extremely powerful dogs.",
    photo: "../Resources/Bull Terrier.jpg",
    tags: "5",

},
{
    Breed: "Bulldog",
    Identifier: "Brown, fawn, black, white, tan",
    Description: "Sweet, gentle disposition. Dependable and predictable, the bulldog is a wonderful family pet and loving to most children.",
    Weight: "18 - 23",
    Lifespan: "8 - 10",
    Temperament: "Gentle, calm and affectionate",
    FunFact: "They were bred to fight bulls",
    photo: "../Resources/Bulldog.jpg",
    tags: "6",

},
{
    Breed: "Doberman",
    Identifier: "Rust and Blue, Red, Tan, Brown, White Black",
    Description: "Dobermans are very intelligent, learn easily, respond quickly, and make loving and fun companions. However, they are very strong dogs and can become pushy, destructive, and unmanageable if not raised properly.",
    Weight: "32,2 - 44,9",
    Lifespan: "10 - 12",
    Temperament: "Energetic, Obedient",
    FunFact: "The Doberman is one of the only dog breeds that has kept the name of its founder.",
    photo: "../Resources/Doberman.jpg",
    tags: "7",

},
{
    Breed: "German Shepherd",
    Identifier: "Black, Black & Tan, Sable, Red & Black, Black & Silver, Grey",
    Description: "Gentle and loving with their families. Their affectionate and dedicated personalities are a bonus of the breed, and they can be particularly fond of children.",
    Weight: "43-50",
    Lifespan: "10-12",
    Temperament: "Highly active and fearless dogs!",
    FunFact: "German Shepherds were tasked with watching over flocks of sheep and herding them from field to field.",
    photo: "../Resources/German Shepard.jpg",
    tags: "8",

},
{
    Breed: "Golden Retriever",
    Identifier: "Dark Golden, Light Golden, Cream, Golden",
    Description: "The golden retriever is even-tempered, intelligent and affectionate. Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers.",
    Weight: "34-36",
    Lifespan: "12-13",
    Temperament: "Trusting, kind and gentle!",
    FunFact: "Golden Retrievers trace their history back to Scotland.",
    photo: "../Resources/Golden Retriever.jpg",
    tags: "9",

},
{
    Breed: "Pug",
    Identifier: "Black, Fawn, Apricot, Silver Fawn",
    Description: "Pugs can be stubborn but normally want to please. These are fairly laid-back dogs, not usually given to extensive barking, digging or chewing. Pugs tend to get along well with other dogs and are sturdy enough to get along with children.",
    Weight: "8-10",
    Lifespan: "11-14",
    Temperament: "Charming, Clever, Playful, Mischievous, Stubborn, Docile, Sociable, Affectionate, Attentive, Loving, Quiet, Calm.",
    FunFact: "They were bred to be lap dogs.",
    photo: "../Resources/Pug.jpg",
    tags: "10",

},
{
    Breed: "Rottweiler",
    Identifier: "Black, tan",
    Description: "The ideal Rottweiler is calm, confident, and courageous, never shy. He has a self-assured aloofness and doesn't make friends with people immediately or indiscriminately. With his family, he's affectionate, often following them around the house.",
    Weight: "59,9",
    Lifespan: "12",
    Temperament: "Loyal, affectionate, calm, quiet, sensitive and protective",
    FunFact: "The Rottweiler is thought to be one of the oldest breeds of dog in the world, dating back to Ancient Rome.",
    photo: "../Resources/Rottweiler.jpg",
    tags: "11",

}
];

const catData = [{
    Breed: "Balinese",
    Identifier: "Brown, red, blue, black, cream, chocolate, lilac, caramel",
    Description:"Balinese are known for their intelligence, their friendly, inquisitive and playful nature, and their striking beauty. They are also often vocal and rather demanding.",
    Weight: "2,7 - 4,5",
    Lifespan: "13 - 15",
    Temperament: "Intelligent and curious",
    FunFact: "The oldest breed of cat in the world!",
    photo: "../Resources/Balinese.jpg",
    tags: "",
},
{
    Breed: "Birman",
    Description:"The typical Birman cat personality is affectionate, friendly, gentle, and curious.",
    Identifier: "Brown, red, black, chocolate, lilac, caramel",
    Weight: "4-5",
    Lifespan: "12 - 16",
    Temperament: "Intelligent, sweet and affectionate",
    FunFact: "Also known as the Sacred Cat of Burma!",
    photo: "../Resources/Birman.jpg",
    tags: "",
},
{
    Breed: "Burmese",
    Description:"The Burmese is highly intelligent, affectionate and extremely loyal. They love being with people, but also gets along well with other cats and even dogs.",
    Identifier: "Brown, blue, black, cream, lilac, ginger",
    Weight: "2,7 - 5,4",
    Lifespan: "13",
    Temperament: "Intelligent, friendly and affectionate",
    FunFact: "Adoring, elegant and affectionate!",
    photo: "../Resources/Burmese.jpg",
    tags: "",
},
{
    Breed: "Javanese",
    Description:"This is a cat with a strong desire to spend time with his people and involve himself in everything they are doing.",
    Identifier: "Brown, fawn, red,blue, white, cream, lilac",
    Weight: "2,3 - 4,1",
    Lifespan: "8 - 12",
    Temperament: "Loving, gentle and affectionate",
    FunFact: "The Javanese loves to talk to you, and they will use different voices to indicate their needs.",
    photo: "../Resources/Javanese.jpg",
    tags: "",
},
{
    Breed: "Maine Coon",
    Description:"Maine Coons are known for being friendly, affectionate and goofy they to be around its family and sometimes acts like a pack animal.",
    Identifier: "Brown, red, blue, black, white, gold, cream, silver",
    Weight: "3,6 - 5,4",
    Lifespan: "9 - 13",
    Temperament: "Intelligent, loving and affectionate",
    FunFact: "Folklore says it's half cat, half raccoon!",
    photo: "../Resources/Maine Coon.jpg",
    tags: "",
},
{
    Breed: "Norwegian Forest",
    Description:"The Norwegian Forest cat's personality is friendly, calm and gentle. They are intelligent and friendly and some have described the character as “dog-like”.",
    Identifier: "Brown, red, blue, white, gold, cream, silver",
    Weight: "3,6 - 9,1",
    Lifespan: "14 - 16",
    Temperament: "Intelligent, loving and affectionate",
    FunFact: "Has a long, thick double coat of fur!",
    photo: "../Resources/Norwegian Forest.jpg",
    tags: "",
},
{
    Breed: "Persian",
    Description:"The dignified and docile Persian cat is known for being quiet and sweet. Although Persians tend to be relaxed and easygoing, they also command an air of royalty. ",
    Identifier: "Red, blue, black, cream, orange, chocolate, lilac, white-brown",
    Weight: "3,2 - 5,4",
    Lifespan: "10 - 17",
    Temperament: "Intelligent, loving and affectionate",
    FunFact: "The Persian cat is a famous breed with an instantly recognizable appearance.",
    photo: "../Resources/Persian.jpg",
    tags: "",
},
{
    Breed: "Ragdoll",
    Description:"Ragdoll cats are known to be gentle, calm and sociable. Affectionate without being demanding, Ragdolls have an almost dog-like devotion to their owners.",
    Identifier: "Brown, fawn, blue, black, white, cream, chocolate, lilac, golden",
    Weight: "6,8 - 9,1",
    Lifespan: "15",
    Temperament: "Affectionate, calm and friendly",
    FunFact: "Ragdoll kittens are born entirely white. They start developing color patterns some days after their birth.",
    photo: "../Resources/Ragdoll.jpg",
    tags: "",
},
{
    Breed: "Siamese",
    Description:"The Siamese cat's personality is friendly, affectionate, outgoing, and social. This beautiful breed is also one of the most intelligent around. The Siamese is loving and trusting with humans, and he thrives with lots of positive human interaction.",
    Identifier: "Brown, grey, blue, black, white, cream, lilac",
    Weight: "2,7 - 5,4",
    Lifespan: "12 - 20",
    Temperament: "Intelligent, calm and sociable",
    FunFact: "Originated from temple cats in Thailand!",
    photo: "../Resources/Siamese.jpg",
    tags: "",
},
{
    Breed: "Turkish Angora",
    Description:"A sweet, quiet cat, the Turkish angora is loyal and affectionate but can also become upset by sudden changes in her environment. The Turkish Angora loves to play and appreciates a selection of toys.",
    Identifier: "Brown, grey, red, black, white",
    Weight: "3,6 - 6,8",
    Lifespan: "9 - 14",
    Temperament: "Affectionate, loving and playful",
    FunFact: "A breed that originated in central Turkey!",
    photo: "../Resources/Turkish Angora.jpg",
    tags: "",
},

];

const birdData = [{
    Breed: "African Grey Parrot",
    Description:"African grey parrots with its high intellectual capacity and ability to mimic humans have made it one of the most popular birds bred in captivity.",
    Identifier: "Grey color on the head and wings is generally darker than its body. The head and body feathers have slight white edges. The tail feathers are red. ",
    WingSpan: "45,7 - 52",
    Length:"33",
    Weight: "418,2 - 524,5",
    Lifespan: "23 - 60",
    Habitat:"Equatorial Africa",
    FunFact: "When a grey parrot named Yosuke got lost, it was reunited with its owner after giving the owner's name and address.",
    photo: "../Resources/African Grey Parrot.jpg",
    tags: "",
},
{
    Breed: "Amazon Parrots",
    Description:"Amazon parrots are highly intelligent birds, very outgoing and renowned talkers. They require a great deal of mental stimulation. ",
    Identifier: "Yellow, red, blue, green, purple",
    WingSpan: "20,3 - 28",
    Length:"25,4 - 50,8",
    Weight: "215,5 - 907",
    Lifespan: "100",
    Habitat:"South America, the Caribbean, Mexico, South Africa, Europe",
    FunFact: "These parrots can be trained to be talking birds that mimic human speech",
    photo: "../Resources/Amazon Parrots.jpg",
    tags: "",
},
{
    Breed: "Budgerigar",
    Description:"Budgies are gentle and docile birds. They are also very easy to tame, especially if acquired at a young age.",
    Identifier: "Grey, yellow, blue, black, white, green",
    WingSpan: "25,4 - 35,5",
    Length:"17,7",
    Weight: "28,3 - 39,7",
    Lifespan: "3 - 6",
    Habitat:"Oceania",
    FunFact: "Wild Budgerigars are easily tamed.",
    photo: "../Resources/Budgerigar.jpg",
    tags: "",
},
{
    Breed: "Cockatiel",
    Description:"The Cockatiel is small in size, and has a slender body and long pointed tail.",
    Identifier: "Grey, yellow, white, orange",
    WingSpan: "29,9 - 34,7",
    Length:"24,8 - 35",
    Weight: "89,9",
    Lifespan: "15 - 35",
    Habitat:"Oceania",
    FunFact: "They have crests that rise or fall depending on their emotions.",
    photo: "../Resources/Cockatiel.jpg",
    tags: "",
},
{
    Breed: "Cockatoo",
    Description:"The cockatoo is a brightly coloured bird with a beautiful crest of plumage on its head that is intelligent and talkative.",
    Identifier: "Black, grey, white with yellow/pink/red on crest/tail",
    WingSpan: "<102,8",
    Length:"30,4 - 76,2",
    Weight: "17 - 73,7",
    Lifespan: "20 - 70",
    Habitat:"Asia, Oceania",
    FunFact: "One of the noisiest birds in the world.",
    photo: "../Resources/Cockatoo.jpg",
    tags: "",
},
{
    Breed: "Hummingbird",
    Description:"Hummingbirds are not very social at all and live very solitary lives, only coming together to mate or grudging share a hummingbird feeder.",
    Identifier: "Brown, grey, red, white, tan, green",
    WingSpan: "7,6 - 12,7",
    Length:"7,6 - 12,7",
    Weight: "2 - 19,8",
    Lifespan: "3 - 5",
    Habitat:"Central-America, North-America, South-America",
    FunFact: "Hummingbird eggs are just half an inch big.",
    photo: "../Resources/Hummingbird.jpg",
    tags: "",
},
{
    Breed: "Macaw",
    Description:"Macaws are intelligent, social birds that often gather in flocks of 10 to 30 individuals. Their loud calls, squawks, and screams echo through the forest canopy.",
    Identifier: "Yellow, red, blue, white, green",
    WingSpan: "91,4 - 121,9",
    Length:"59,9 - 99,8",
    Weight: "898,7 - 1998,6",
    Lifespan: "50 - 60",
    Habitat:"Central-America, South-America",
    FunFact: "The military macaw is named for the green uniforms that many soldiers use in South America.",
    photo: "../Resources/Macaw.jpg",
    tags: "",
},
{
    Breed: "Parrotlet",
    Description:"Parrotlets in general are feisty, affectionate, and willful. If someone wants a great companion they should keep only one bird.",
    Identifier: "Grey, yellow, blue, white, green",
    WingSpan: "15,2",
    Length:"11,43 - 12,7",
    Weight: "28,3",
    Lifespan: "<30",
    Habitat:"Central-America, South-America",
    FunFact: "Parrotlets aren't the world's tiniest parrot — that would be the pygmy parrot of Australasia.",
    photo: "../Resources/Parrotlet.jpg",
    tags: "",
},
{
    Breed: "Senegal Parrot",
    Description:"Senegal parrots can be very sweet, wanting nothing more than to sit on your shoulder all day. They tend to become very attached to “their” humans, and don't really need another Senegal to keep them entertained.",
    Identifier: "Grey, yellow, green, orange",
    WingSpan: "15,2",
    Length:"22,8 - 25,4",
    Weight: "113,4 - 124,7",
    Lifespan: "25 - 30",
    Habitat:"Africa",
    FunFact: "As a pet, the Senegal parrot is capable of talking to its owner",
    photo: "../Resources/Senegal Parrot.jpg",
    tags: "",
},
{
    Breed: "Pesquets Parrot",
    Description:"Pesquet's Parrot is usually seen alone, in pairs or in small groups. They are noisy, often flying in small flocks above the canopy, or perched in the higher branches of tall trees.",
    Identifier: "Grey, red, black",
    WingSpan: "22,8 - 24,8 ",
    Length:"45,7",
    Weight: "680,3 - 793,8",
    Lifespan: "20 - 40",
    Habitat:"Oceania",
    FunFact: "It’s one of only three parrots with naked faces.",
    photo: "../Resources/Pesque.jpg",
    tags: "",
},

];

const rodentData = [{
    Breed: "Chinchillas",
    Description:"Chinchillas' behavior depends on their age, personality and past experiences. When they're frightened or in pain, chinchillas may change their behaviour or develop unwanted habits, such as aggression or hiding.",
    Identifier: "Brown, grey, beige",
    Length:"25,4 - 35,6",
    Weight: "396,9 - 510,3",
    Lifespan: "10 - 18",
    Habitat:"Dry and mountainous regions",
    FunFact: "Chinchillas are solitary animals",
    photo: "../Resources/Chinchillas.jpg",
    tags: "",
},
{
    Breed: "Gerbils",
    Description:"Gerbils are very social animals, and it is not a good idea to keep them singly. Pair-bonded or family units of gerbils are usually quite affectionate with each other.",
    Identifier: "Brown, grey, red, white, orange, pink, olive",
    Length:"15,24 - 40,6",
    Weight: "9,9 - 226,8",
    Lifespan: "8",
    Habitat:"Deserts and other arid places, though some gerbils are found in pastures, woodlands, scrub forests and mountain valleys.",
    FunFact: "Gerbils were named after jerboas, which are also rodents. Jerboas look like gerbils but are not closely related to them.",
    photo: "../Resources/Gerbils.jpg",
    tags: "",
},
{
    Breed: "Guinea Pig",
    Description:"Guinea pigs are usually very expressive, vocal animals that will whistle or grunt when they're excited, and squeak with delight when they see their favorite people enter the room.",
    Identifier: "Brown, grey, black, white, orange",
    Length:"20,3 - 40,6",
    Weight: "453,6 - 1587,6",
    Lifespan: "3 - 8",
    Habitat:"Grassland and mountain slopes",
    FunFact: "Communicate using chirps, squeaks and burbles!",
    photo: "../Resources/Guinea Pig.jpg",
    tags: "",
},
{
    Breed: "Hamster",
    Description:"They're inquisitive, gentle-natured and very energetic. They're also crepuscular, most active at dusk, so they'll spend most of the day sleeping.",
    Identifier: "Brown, black, white, tan",
    Length:"5 - 35,6",
    Weight: "99,2 - 907,2",
    Lifespan: "2 - 3",
    Habitat:"Dry deserts and sand dunes",
    FunFact: "Able to run as quickly backwards as forwards!",
    photo: "../Resources/Hamster.jpg",
    tags: "",
},
{
    Breed: "Hedgehog",
    Description:"Hedgehogs are noisy animals, snuffling loudly as they shuffle through the undergrowth. They have poor eyesight but an acute sense of smell, touch and hearing.",
    Identifier: "Brown, grey, tan",
    Length:"10,2 - 30,5",
    Weight: "997,9 - 1995,8",
    Lifespan: "3 - 6",
    Habitat:"Dense vegetation and woodland",
    FunFact: "Thought to be one of the oldest mammals on Earth!",
    photo: "../Resources/Hedgehog.jpg",
    tags: "",
},
{
    Breed: "Mouse",
    Description:"Domestic mice are very friendly toward humans and can make good pets for older children and adults.",
    Identifier: "Brown, grey, black",
    Length:"12,7 - 20,3",
    Weight: "90,7 - 181,4",
    Lifespan: "2 - 5",
    Habitat:"Open fields and woodland areas",
    FunFact: "Found on every continent on Earth!",
    photo: "../Resources/Mouse.jpg",
    tags: "",
},
{
    Breed: "Rabbits",
    Description:"Rabbits might nudge, push, or toss things around as a form of play, to solicit attention from you, or as a territorial behavior meaning “mine!” or “get out of the way!” Rabbits can be very territorial and particular. They like their things arranged a certain way, and can become upset when their things are moved.",
    Identifier: "Brown, grey, black, white, tan",
    Length:"39,9 - 46",
    Weight: "500 - 3000",
    Lifespan: "4 - 9",
    Habitat:"Forest thickets, meadows and woodland",
    FunFact: "A rabbit's teeth never stop growing!",
    photo: "../Resources/Rabbits.jpg",
    tags: "",
},
{
    Breed: "Rat",
    Description:"Rats exhibit aggressive behavior when threatened. They may fight, chase, bite and box. Rats also display some behaviors such as sidling and belly-up defensive postures.",
    Identifier: "Brown, grey, black, white",
    Length:"26,2 - 49,3",
    Weight: "200 - 900",
    Lifespan: "2 - 5",
    Habitat:"Underground close to human settlements",
    FunFact: "Rats whiskers are more sensitive than human fingertips",
    photo: "../Resources/Rat.jpg",
    tags: "",
},
{
    Breed: "Sugar Gliders",
    Description:"Wild gliders live in groups of up to seven adults and are highly social. They live in trees, practice social grooming and protect their territory",
    Identifier: "Grey, black, white",
    Length:"15,2 - 22,9",
    Weight: "113,4 - 226,8",
    Lifespan: "10",
    Habitat:"Forest, woodlands",
    FunFact: "Can glide for over 100 feet before touching the ground",
    photo: "../Resources/Sugar Gliders.jpg",
    tags: "",
},
{
    Breed: "Weasel",
    Description:"As nocturnal animals, weasels sleep during the day and are active at night. Most of a weasel's time awake consists of hunting, storing excess food and eating. Their bodies don't store fat, so they need a constant supply of food to provide enough energy.",
    Identifier: "Black, white, tan",
    Length:"21,8 - 38,1",
    Weight: "119,1 - 198,4",
    Lifespan: "1 - 3",
    Habitat:"Forest and open woodland",
    FunFact: "The smallest carnivorous mammal in the world!",
    photo: "../Resources/Weasel.jpg",
    tags: "",
},

];

const birdSicknessData = [{
    Disease: "Proventricular Dilatation Disease",
    Spreads:"Can be transmitted through faeces (the brown to green part of droppings), urinates (the white part of droppings), or passed from a parent to a chick through the egg.",
    Signs: "Weight loss / Vomiting /",
    Severity:"Severe",
    Treatment: "There is no treatment for affected birds except supportive care.",
},
{
    Disease: "Parrot Fever",
    Spreads:"Spread by inhaling dust from dried droppings from birdcages or by handling infected birds in slaughterhouses. Waste material in the birdcage may stay infectious for weeks.",
    Signs: " Breathing Difficulty / Depression / Diarrhea / Fever / Poor Appetite / Weight Loss /",
    Severity:"Mild",
    Treatment: "Treated with antibiotics",
},
{
    Disease: "Psittacine Beak and Feather Disease",
    Spreads:"It is spread from infected birds to healthy birds by direct contact, usually from the dust of feathers, dander or feces; the disease is sometimes transmitted from contact with an infected nest box. Infected birds can also pass on the virus to their young.",
    Signs: " Feather Loss / Abnormal feather development / Beak Abnormalities /",
    Severity:"Severe",
    Treatment: "There is no treatment for affected birds except supportive care.",
},
{
    Disease: "Polyomavirus",
    Spreads:"The polyomavirus is usually contracted through direct contact with other infected birds. It is also contracted from infected feces, dander, air, nest boxes, incubators, feather dust or from an infected parent passing it to chick.",
    Signs: " Anemia / Diarrhea / Feather Loss / Lethargy / Poor Appetite /",
    Severity:"Moderate",
    Treatment: "There is no treatment for affected birds except supportive care.",
},
{
    Disease: "Candida",
    Spreads:"It may be spread from an adult bird feeding a young one; from a contaminated environment or contaminated water; or hand-feeding formulas.",
    Signs: " Anemia / Lethargy / Poor Appetite / Vomiting / Weight Loss",
    Severity:"Mild",
    Treatment: "Recommended anti-fungal medication from veterinarian.",
},
];

const rodentSicknessData = [{
    Disease: "Cryptosporidiosis",
    Spreads:"Crypto spreads through swallowing poop containing the germ after contact with an infected person or animal, or through poop in contaminated food or water.",
    Signs: "Bleeding / Diarrhea / Pain / Poor Appetite / Vomiting / Weight Loss /",
    Severity:"Mild",
    Treatment: "Increased fluid intake or antibiotics",
},
{
    Disease: "Flea tapeworm",
    Spreads:"The tapeworm spreads when a dog or person swallows an infected flea.",
    Signs: " Diarrhea / Flatulence / Obsessive Licking / Pain / Poor Appetite / Weight Loss /",
    Severity:"Moderate",
    Treatment: "Dewormer",
},
{
    Disease: "Giardiasis",
    Spreads:"'Giardia spreads through swallowing microscopic poop containing the parasite following contact with an infected person or animal or by drinking water or eating food that has been contaminated with poop from infected people or animals.",
    Signs: " Anemia / Diarrhea / Lethargy / Odor / Vomiting / Weight Loss /",
    Severity:"Mild",
    Treatment: "Treatment will be advised by qualifed professional",
},
{
    Disease: "Hookworms",
    Spreads:"Animals that are infected pass hookworm eggs in their stools. The eggs can hatch into larvae, and both eggs and larvae may be found in dirt where animals have been.",
    Signs: " Anemia / Lethargy / Pale Mucous Membranes / Tarry Stool / Weakness / Weight Loss / ",
    Severity:"Moderate",
    Treatment: "Anti-parasitic medicine or electrolyte mixture",
},
{
    Disease: "Salmonella",
    Spreads:"Animals become infected with Salmonella through their environment, by eating contaminated food, or from their mothers before they are even born or hatched. Salmonella is naturally in the intestines of many different animals.",
    Signs: " Anemia / Depression / Diarrhea / Fever / Lethargy / Vomiting",
    Severity:"Severe",
    Treatment: "Supportive care and constant hydration is recommended, but hospitalization is required if symptoms become severe",
},
];

const dogSicknessData = [{
    Disease: "Brucellosis",
    Spreads:"The most common way people get brucellosis is by eating or drinking unpasteurized/raw dairy products.",
    Signs: " / Coughing / Incontinence / Loud Breathing / Noisy Breathing / Painful Urination / Sneezing /",
    Severity:"Mild",
    Treatment: "Isolation for the animal and constant disinfection. Antibiotics may also be required",
},
{
    Disease: "Campylobacteriosis",
    Spreads:"Campylobacter most often spread to animals and people through the feces (poop) of infected animals, contaminated food or water, or the environment.",
    Signs: "Straining / Cramping / Lethargy / Fever /",
    Severity:"Severe",
    Treatment: "Antibiotics are required",
},
{
    Disease: "Capillariasis",
    Spreads:"Spread through contaminated food, water, or feces.",
    Signs: " Coughing / Incontinence / Loud Breathing / Painful Urination / Sneezing /",
    Severity:"Mild",
    Treatment: "Anti-parasitic medication is required",
},
{
    Disease: "Cryptosporidia",
    Spreads:"Crypto spreads through swallowing poop containing the germ after contact with an infected person or animal, or through food, water, or the environment contaminated with poop.",
    Signs: "Anemia / Diarrhea / Lethargy / Poor Appetite / Weakness / Weight Loss /",
    Severity:"Mild",
    Treatment: "Supportive care is required and anti-parasitic medication",
},
{
    Disease: "Flea tapeworm",
    Spreads:"The tapeworm spreads when a dog or person swallows an infected flea.",
    Signs: " Diarrhea / Flatulence / Obsessive Licking / Pain / Poor Appetite / Weight Loss",
    Severity:"Moderate",
    Treatment: "Dewormer",
},

];

const catSicknessData = [
    {
        Disease: "Campylobacteriosis",
        Spreads:"Cats commonly become infected by eating contaminated raw meat and shed the bacteria in their poop.",
        Signs: "Bloody diarrhea /",
        Severity:"Mild",
        Treatment: "Isolation and ample water consumption",
    },
    {
        Disease: "Cat Scratch Disease",
        Spreads:"Cats become infected through flea bites, fights with other infected cats, or blood transfusions. People can be exposed to the bacteria through the scratch or lick of an infected cat.",
        Signs: " Eye Redness / Fever / Fleas / Lethargy / Vomiting /",
        Severity:"Moderate",
        Treatment: "Anti-biotics are required and naturally overcoming the illness is recommended",
    },
    {
        Disease: "Cat Tapeworm",
        Spreads:"The tapeworm is spread when a cat or person swallows an infected flea. Cats may swallow fleas when self-grooming. Treating pets for fleas can help prevent infection.",
        Signs: " Anemia / Depression / Diarrhea / Obsessive Licking / Weakness / Weight Loss /",
        Severity:"Moderate",
        Treatment: "De-worming medication or fea medication",
    },
    {
        Disease: "Cryptosporidiosis",
        Spreads:"Crypto spreads through swallowing poop containing the germ after contact with an infected person or animal, or through poop in contaminated food or water.",
        Signs: " Bleeding / Diarrhea / Pain / Poor Appetite / Vomiting / Weight Loss /",
        Severity:"Moderate",
        Treatment: "Increased fluid intake plus antibiotics",
    },
    {
        Disease: "Giardiasis",
        Spreads:"Giardia spreads through swallowing microscopic poop containing the parasite following contact with an infected person or animal or by drinking water or eating food that has been contaminated with poop from infected people or animals.",
        Signs: " Anemia / Diarrhea / Lethargy / Odor / Vomiting / Weight Loss",
        Severity:"Moderate",
        Treatment: "Advised by trained professional",
    },
];

var symptonFilterArray = [];

//Adding filters to local storage
function saveFilters() {

    localStorage.setItem('symptonFilters', symptonFilterArray);

}

//Saving filers
function checkbox_changed(id) {

    if (document.getElementById(id).checked) {
        symptonFilterArray.push(id);
    } else {
        symptonFilterArray = symptonFilterArray.filter(e => e !== id)

    }
    
}

//Saves sickness picked
function sicknessPicked(sicknessName){
    localStorage.setItem('sicknessPicked', sicknessName);
}




//Creation of card divs function
function cardTemplate(card) {

    return `

    <div id="${card.Breed}" onclick="saveAnimalBreed(this.id)" id="${card.Breed}">
        <a href="../html/symptoms.html">
            <div class="breedCard">
                <img src="../Resources/${card.photo}"  alt="" class="breed_image" id="${card.Breed}">
                <div class="card_details" id="${card.Breed}">
                    <p class="breed__title">${card.Breed}</p>
                    <p class="breed__description">${card.Description}</p>
                </div>
            </div>
        </a>
    </div>
`

}


//Creation of card divs function for symptoms page
function symptomCardTemplate(card) {

    return `

        <div class="symptomCard">
            <div class="card_details">
                <p class="symptom__title">${card}</p>
                
            </div>
            <div class="checkbox__card">
                <label class="checkbox__container">
                    <input type="checkbox"  id="${card}" onchange="checkbox_changed(this.id)">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
`

}

//Creation of card divs function for symptoms page
function resultsCardTemplate(card) {

    return `

        <a class="fill-div" onclick="sicknessPicked('${card.Disease}')" href="illness.html">
        <div class="result__card grid">
            <div class="result__name">
                <h3 class="results__subtitle"><b><u>${card.Disease}</u></b></h3>

                
            </div>

            <div class="results__level">
                <h3 class="results__subtitle">Level</h3>
                <div class="level__container">
                    <div class="level ${card.Severity}">${card.Severity}</div>
                </div>
            </div>

            <div class="results__symptons">
                <h3 class="results__subtitle">Symptons</h3>
                <p class="results__description">${card.Signs}</p>
            </div>
        </div>
    </a>
`

}

//Creation of card divs function for illness page
function illnessCardTemplate(card) {

    return `

        <div class="illness__Card">
            <div class="illness__data">
                
                <h1 class="illness__title">${card.Disease}</h1>
                <div class="symptomBorder"> 
                <h3 class="illness__subtitle">Symptoms</h3>
                <p class="illness__description">&nbsp${card.Signs}</p>
                </div>
                <div class="symptomBorder"> 
                <h3 class="illness__subtitle">How it spreads</h3>
                <p class="illness__description">&nbsp${card.Spreads}</p>
                </div>
            </div>

            <div class="illness__data">
                <h1 class="illness__title">Treatment</h1>
                <div class="symptomBorder"> 
                <h3 class="illness__subtitle">Recommended</h3>
                <p class="illness__description">${card.Treatment}</p>
                </div>
            </div>
        </div>
`

}

//Goes through json storage for each animal type
var dataValue = localStorage.getItem('data');

var cardDataValue;
var sicknessDataValue;
var arrayOfSighn = null;
var stringSighn;
var uniq;

if(dataValue === "dogData"){
    cardDataValue = dogData;
    sicknessDataValue = dogSicknessData;

    sicknessDataValue.forEach(function(element, index) {
        
        stringSighn = stringSighn + element.Signs;
        arrayOfSighn = stringSighn.split(" /");
    })
    arrayOfSighn.shift();

     uniq = arrayOfSighn.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
     
}

if(dataValue === "catData"){
    cardDataValue = catData;
    sicknessDataValue = catSicknessData;

    sicknessDataValue.forEach(function(element, index) {
        
        stringSighn = stringSighn + element.Signs;
        arrayOfSighn = stringSighn.split(" /");
    })
    arrayOfSighn.shift();

     uniq = arrayOfSighn.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
}

if(dataValue === "birdData"){
    cardDataValue = birdData;
    sicknessDataValue = birdSicknessData;

    sicknessDataValue.forEach(function(element, index) {
        
        stringSighn = stringSighn + element.Signs;
        arrayOfSighn = stringSighn.split(" /");
    })
    arrayOfSighn.shift();

     uniq = arrayOfSighn.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
}

if(dataValue === "rodentData"){
    cardDataValue = rodentData;
    sicknessDataValue = rodentSicknessData;

    sicknessDataValue.forEach(function(element, index) {
        
        stringSighn = stringSighn + element.Signs;
        arrayOfSighn = stringSighn.split(" /");
    })
    arrayOfSighn.shift();

     uniq = arrayOfSighn.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects

var e = document.getElementById("cards").innerHTML = (`${cardDataValue.map(cardTemplate).join("")}`);

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects for sympton page
function loadSymptonCards(){
    var t = document.getElementById("symptomCards").innerHTML = `${uniq.map(symptomCardTemplate).join("")}`;
}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects for results page
function loadResultCards(){

    var filteredSicknessArray = [];

    var arrayOfFilters2 = localStorage.getItem('symptonFilters');
    arrayOfFilters = arrayOfFilters2.split(",");
    
    sicknessDataValue.forEach(function(element, index) {
        for(var i=0; i<arrayOfFilters.length; i++){
            if (element['Signs'].includes(arrayOfFilters[i])) {
                
                if(!filteredSicknessArray.includes(element)){
                    filteredSicknessArray.push(element) 
                }     
            }
        }
        
    })

    

    var t = document.getElementById("results__list").innerHTML = `${filteredSicknessArray.map(resultsCardTemplate).join("")}`;
}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects for illness page
function loadIllnessCards(){

    var illnessArray = [];
    var picked = localStorage.getItem('sicknessPicked');

    sicknessDataValue.forEach(function(element, index) {
        if(element['Disease'] == picked){
            illnessArray.push(element);
        }
    })

    

    var t = document.getElementById("illness__container").innerHTML = `${illnessArray.map(illnessCardTemplate).join("")}`;
    console.log(illnessArray);
}

//Saves Breed data
function saveAnimalBreed(breed){
    localStorage.setItem('animalBreedPicked', breed);
}




//Search bar keyup function that uses jquery
$("#SearchBar").keyup(function() {

    var filter = $(this).val(),
        count = 0;

    $('#cards div').each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).animate({ "opacity": "hide", top: "100" }, 200);
        } else {
            $(this).animate({ "opacity": "show", top: "100" }, 200);
            count++;
        }
    });
});

//Inserting data into sympton page
function addSStyling(){
    var element = document.getElementById("level");
    element.classList.add("severe");
}

//Inserting data into sympton page
function loadAnimalBreedData(){
    var animalBreedPicked = localStorage.getItem('animalBreedPicked');
    
    var animalArray = null;

    if(dataValue === "dogData" ){
        document.getElementById("breed__list").children[1].style.display = "none"
        document.getElementById("breed__list").children[2].style.display = "none"
        document.getElementById("breed__list").children[4].style.display = "none"
        animalArray = dogData;

    }

    if(dataValue === "catData"){
        document.getElementById("breed__list").children[1].style.display = "none"
        document.getElementById("breed__list").children[2].style.display = "none"
        document.getElementById("breed__list").children[4].style.display = "none"
        animalArray = catData;
    }
    
    
    if(dataValue === "birdData"){
        document.getElementById("temptitle1").style.display = "none"
        document.getElementById("temptitle2").style.display = "none"
        document.getElementById("breed__list").children[1].style.display = "block"
        document.getElementById("breed__list").children[2].style.display = "block"
        document.getElementById("breed__list").children[4].style.display = "block"
        animalArray = birdData;
    }
    
    if(dataValue === "rodentData"){
        document.getElementById("temptitle1").style.display = "none"
        document.getElementById("temptitle2").style.display = "none"
        document.getElementById("breed__list").children[1].style.display = "block"
        document.getElementById("breed__list").children[2].style.display = "none"
        document.getElementById("breed__list").children[4].style.display = "block"
        animalArray = rodentData;
    }


        var Title = "empty";
        var SubTitle = "empty";
        var Description = "empty";
        var Weight = "empty";
        var Length = "empty";
        var WingSpan = "empty";
        var Habitat = "empty";
        var Lifespan = "empty";
        var FunFact = "empty";
        var Identifier = "empty";
        var Image = "empty";


        animalArray.forEach(function(element, index) {
            if (element['Breed'] === animalBreedPicked) {
                Title = element.Breed;
                SubTitle = element.Temperament;
                Description = element.Description;
                Weight = element.Weight;
                Lifespan = element.Lifespan;
                Length = element.Length;
                Habitat = element.Habitat;
                WingSpan = element.WingSpan;
                FunFact = element.FunFact;
                Identifier = element.Identifier;
                Image = element.photo;
            }
        })

       var breed__title = document.getElementById("breed__title");
       breed__title.innerHTML = Title;

       var breed__subtitle = document.getElementById("breed__subtitle");
       breed__subtitle.innerHTML = SubTitle;

       var breed__description = document.getElementById("breed__description");
       breed__description.innerHTML = Description;
        
       var breed__image = document.getElementById("breed__image");
       breed__image.src = Image;

       var breed__weight = document.getElementById("breed__weight");
       breed__weight.innerHTML = "Weight:&nbsp&nbsp " + Weight + "&nbsp Kg";

       var breed__lifespan = document.getElementById("breed__lifespan");
       breed__lifespan.innerHTML = "Lifespan:&nbsp&nbsp " + Lifespan + "&nbsp years";

       var breed__habitat = document.getElementById("breed__habitat");
       breed__habitat.innerHTML = "Habitat:&nbsp&nbsp " + Habitat;

       var breed__length = document.getElementById("breed__length");
       breed__length.innerHTML = "Length(cm):&nbsp&nbsp " + Length;

       var breed__wingspan = document.getElementById("breed__wingspan");
       breed__wingspan.innerHTML = "Wingspan(cm):&nbsp&nbsp " + WingSpan;

       var breed__funfact = document.getElementById("breed__funfact");
       breed__funfact.innerHTML = "Fun fact:&nbsp&nbsp " + FunFact;

       var breed__identifier = document.getElementById("breed__identifier");
       breed__identifier.innerHTML = "Identifiers:&nbsp&nbsp " + Identifier;

    }

    //404 page not found particles
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 5,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fcfcfc"
          },
          "shape": {
            "type": "circle",
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.2,
              "sync": false
            }
          },
          "size": {
            "value": 140,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
          "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": false
            },
            "resize": true
          }
        },
        "retina_detect": true
      });



