const brands = [
    { name: "Hill's", img: "img/hills.png" },
    { name: "Royal Canin", img: "img/royalcanin.png" }, 
    { name: "Purina Pro Plan", img:"img/Purina.png" }, 
    { name: "Edgard Cooper", img:"img/edgard.png" },
    { name: "Virbac", img: "img/virbac.png" },
    { name: "Orijen", img: "img/orijen.png" },
    { name: "Ultra Premium Direct", img: "img/ultra.png" },
    { name: "Ultima", img: "img/ultima.png" }
  ];


const category = "Nourriture pour animaux"


const attributes = ["Liberté","Découverte","Esprit de combat","Non-conformisme","Dynamique","Résilience","Audace","Vigueur","Transformation","Unicité","Fierté","Perfection","Sophistication","Donner le meilleur de moi-même","Confiance","Optimisation","Force","Aspiration","Croissance","Supériorité","Puissance","Contrôle","Efficacité","Précision","Simplicité","Expertise","Éprouvé","Scientifique","Proactif","Fiable","Bienveillance","Esprit de communauté","Sentiment d’harmonie","Protection","Tranquillité d’esprit","Dévouement","Longévité","Compagnie","Restauration","Compréhension","Joie","Insouciance","Plaisir","Optimisme","Naturel","Bonheur","Espoir","Amour","Bien-être","Calme","Enthousiasme","Joie de vivre","Vitalité","Esprit ludique","Individualité","Énergie","Proactif","Épanouissement","Extraordinaire"];

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


const survey_name = "Royal-Canin-Survey-France"

