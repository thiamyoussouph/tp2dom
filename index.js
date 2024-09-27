const tab = [];
const prenom = document.querySelector("#prenom");
const nom = document.querySelector("#Nom");
const adresse = document.querySelector("#adresse");
const tel = document.querySelector("#tel");
const message = document.querySelector(".message");
const divhtml = document.querySelector(".divcard");
const bouton = document.querySelector(".btnajout");

compteur = 0;

const btnajout = "btnajout" + Date.now();
const btnmod = "btnmod" + Date.now();
const btnsup = "btnsup" + Date.now();
console.log(btnmod);

console.log(btnajout);

bouton.addEventListener("click", function (e) {
  e.preventDefault();
  const newtab = {
    prenom: prenom.value,
    nom: nom.value,
    adresse: adresse.value,
    tel: tel.value,
    message: message.value,
  };
  console.log(newtab);

  divhtml.insertAdjacentHTML(
    "afterbegin",
    `<div class="card col-5 m-1" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${newtab.prenom}</h5>
    <p class="card-text">${newtab.nom}</p>
    <p class="card-text">${newtab.adresse}</p>
    <p class="card-text">${newtab.tel}</p>
    <p class="card-text">${newtab.message}</p>
    <a href="#" class="btn btn-warning ${btnmod}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></a>
 <a href="#" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg></a>
<a href="#" class="btn btn-danger ${btnsup}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></a>
<a href="#" class="btn btn-dark ${btnsup}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
  <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
</svg></a>
  </div>
</div>`
  );
  const btnmodif = document.querySelector(`.${btnmod}`);
  btnmodif.addEventListener("click", function (e) {
    e.preventDefault();
    prenom.value = newtab.prenom;
    nom.value = newtab.nom;
    adresse.value = newtab.adresse;
    tel.value = newtab.tel;
    message.value = newtab.message;
    divhtml.removeChild(btnsupp.parentElement.parentElement);
  });
  const btnsupp = document.querySelector(`.${btnsup}`);

  btnsupp.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("etes  vous sur de voiloir  supprimer")) {
      divhtml.removeChild(btnsupp.parentElement.parentElement);
    }
  });

  tab.push(newtab);
  prenom.value = "";
  nom.value = "";
  adresse.value = "";
  tel.value = "";
  message.value = "";
});

// const elementdiv=document.createElement('div');
// const elementimg=document.createElement('img');
// const elementdivbody=document.createElement('div');
// const elmenth4=document.createElement('h4');
// const elmentp=document.createElement('p');
// const elementext=document.createTextNode('le tesxt a metre dans notre paragraphe p');
// const elementtitle=document.createTextNode('le titre de notre card');
// const elementbtn=document.createElement('a')
// const elementtextbtn=document.createTextNode('voir plus ');

// elmentp.appendChild(elementext);
// elmenth4.appendChild(elementtitle);
// elementdiv.appendChild(elementimg);
// elementdivbody.appendChild(elmenth4);
// elementdivbody.appendChild(elmentp);
// elementdivbody.appendChild(elementbtn);
// elementbtn.appendChild(elementtextbtn);
// elementdiv.appendChild(elementdivbody);
// divhtml.appendChild(elementdiv);
// console.log(elementdiv);

// elementdiv.classList.add('card');
// elementdiv.style.width='18rem';
// elementdiv.style.margin='10px';
// elementimg.src='https://via.placeholder.com/150';
// elementdivbody.classList.add('card-body');
// elmenth4.classList.add('card-title');
// elmentp.classList.add('card-text');
// elementbtn.classList.add('btn');
// elementbtn.classList.add('btn-primary');
