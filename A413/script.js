 document.querySelector('body').onload = init;

 const pageTitle = document.getElementsByTagName('title')[0];
 const name = 'Mickael Lanier';
 const horlogeNode = document.getElementById("horloge");

 function init() {
     defTitre1();
     datemodif();
     horlogeNode.innerHTML = hour();
 }

 function defTitre1(){
  document.getElementById("titre").innerHTML = "Titre w/ js !";
 }

 function defTitre2(){
     document.getElementsByTagName('h2').innerHTML = "";
 }

 function defTitre3() {
     const tags = document.getElementsByTagName('h2');
     const title = tags.length >= 2 ? tags[1].innerHTML : name;

     pageTitle.innerHTML = title;
 }

 function defTitre4() {
     const tags = document.querySelectorAll('.firstOfLast');
     if (tags.length === 0) {
         pageTitle.innerHTML = name;
     } else if (tags.length % 2 === 0) {
         // pair
         pageTitle.innerHTML = tags[0].innerHTML;
     } else {
         pageTitle.innerHTML = tags[tags.length - 1].innerHTML;
     }


     function datemodif() {
         const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
         const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

         const authors = document.querySelectorAll('meta[name=author]');

         if (authors.length === 0) {
             return;
         }
         const author = authors[0];

         const text = 'Dernière modification le {date} par ' + author.content;

         const curDate = new Date();
         let dateStr = days[curDate.getDay()]
             + ' ' + curDate.getDate()
             + ' ' + months[curDate.getMonth()]
             + ' ' + curDate.getFullYear();

         const res = text.replace('{date}', dateStr);
         document.getElementById('date_modif').innerHTML = res;
     }

     document.getElementById("nbJours").addEventListener('click', function (ev) {
         const target = ev.target;
         const currDate = new Date();
         const oldDate = new Date('2015-07-19');

         const diff = oldDate.getTime() - currDate.getTime();
         target.innerHTML = target.innerHTML.replace("xxx", Math.round(diff / 1000 / 3600));
     });
 }