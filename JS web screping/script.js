
const btn = document.createElement('button');
btn.textContent = 'Click';
btn.addEventListener('click', populate());

const sec = document.querySelector('section');
sec.appendChild(btn);
async function populate(){
    const url= 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(url);
    const response = await fetch(request);
    const superHeroesT = await response.text();

    const superHeroes = JSON.parse(superHeroesT)
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

}

function populateHeader(obj){
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent=obj.squadName;
    header.appendChild(myH1);

    const myParam = document.createElement('p');
    myParam.textContent = `Hometown: ${obj.homeTown} ${obj.formed}`;
    header.appendChild(myParam);
}

function populateHeroes(obj){
    const section = document.querySelector('section');
    const heroes = obj.members;

    for (const hero of heroes){
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret Identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = `Superpowers:`;

        const superPowers = hero.powers;
        for (const power of superPowers){
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}