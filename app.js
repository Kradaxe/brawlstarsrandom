const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const picpow = document.querySelector(".picpow");

const images = [
  { name : "SURGE",
    url: 'surge.png',
    desc: "The coolest brawler in the game that there is.\
     He can change his levels after every super.",
    attack: "Juice Of Justice",
    super: "PARTY TRICKS"
    
  },
  {name : "ASH",
    url: 'Ash.png',
    desc: "Gets very angry and will clean you up.",
    attack: "Clean-Up",
    super: "HELPERS"
  },
  {name : "BUSTER",
    url: 'Buster.png',
    desc: "be careful when you attack him, he can return it back to you",
    attack: "Lens Flare",
    super: "MONTAGE"
  },
  {name : "CROW",
    url: 'Crow.png',
    desc: "Is an assassin, is really fast, can reach you in a second even from a distance.",
    attack: "Switchblade",
    super: "SWOOP"
  },
  {name : "GRIFF",
    url: 'Griff.png',
    desc: "Has the best super, and will return every penny back you to you.",
    attack: "Coin Toss",
    super: "CASHBACK"
  }
];

btn.addEventListener("click", function() {

    container.innerHTML="";
    container.appendChild(picpow);
    picpow.innerHTML="";

  let rand = Math.floor(Math.random() * 5);

  const imgName = document.createElement('h1');
  const imgElement = document.createElement('img');
  const imgDesc = document.createElement('p');
  const imgPow = document.createElement('h2');
  const imgSup = document.createElement('h2');

  imgElement.src = images[rand].url;
  imgDesc.textContent = images[rand].desc;
  imgName.textContent = images[rand].name;
  imgPow.textContent = images[rand].attack;
  imgSup.textContent = images[rand].super;

  imgElement.style.height = '200px';
  imgElement.style.marginBottom = '20px';
  imgElement.style.borderRadius ='50%';
  imgName.style.marginBottom = "50px";
  imgDesc.style.marginTop = "20px";
  


  container.appendChild(imgName);
  picpow.appendChild(imgPow);
  picpow.appendChild(imgElement);
  picpow.appendChild(imgSup);
  container.appendChild(imgDesc);
});
