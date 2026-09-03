const brands = [
    { name: "Burger_king", img: "img/Burger_king.png" },
    { name: "Dominos", img: "img/Dominos.png" }, 
    { name: "KFC", img:"img/KFC.png" }, 
    { name: "MacD", img:"img/MacD.png" },
    { name: "O_tacos", img: "img/O_tacos.png" },
    { name: "Quick", img: "img/Quick.png" },
    { name: "Subway", img: "img/Subway.png" }
  ];

const category = "Restaurants à service rapide"

const attributes = ["Liberté","Impulsif","Découverte","Échappatoire","Non conformisme","Dynamique","Libération","Audace","Fierté","Perfection","Confiance","Autonomie","Optimisation","Indépendance","Contrôle","Raison","Efficacité","Pragmatique","Simple","Pratique","Valeur","Cohérence","Fiable","Accessibilité","Sécurité","Bienveillance","Proximité","Unité","Sérénité","Se sentir comme à la maison","Confort","Appartenance","Fiable","Nostalgie","Accompagnement","Engagement","Joie","Se faire plaisir","Insousiance","Plaisir","Soulagement","Optimisme","Ouverture","Être bien dans ma peau","Satisfaction","Excitation","Inspirant","Vivant","Fun","Ludique","Individualité","Exploration","Curiosité","Anticipation","Energie","Créativité","Surprise"];

const pretest_attributes = [
  "Chaud", 
  "Froid", 
  "Dangereux",
  "Rafraîchissant", 
  "Mignon",
  "Doux"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Mignon", "Doux"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangereux", "Chaud"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Froid", "Rafraîchissant"]}
]

const pretest_attributes_multiple = ["Chaud", "Froid", "Dangereux", "Rafraîchissant", "Mignon", "Doux", "Voyage", "Excitation", "Précis", "Temps", "Profond", "Mouillé"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Mignon", "Doux"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangereux", "Chaud"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Froid", "Rafraîchissant"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Voyage", "Excitation"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Profond", "Mouillé"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Précis", "Temps"]}
]


const survey_name = "McDonald's Survey"
