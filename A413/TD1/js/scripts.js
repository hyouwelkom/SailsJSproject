document.querySelector('body').onload = init;

const pageTitle = document.getElementsByTagName('title')[0];
const name = 'Virgile BESSIERE';
const horlogeNode = document.getElementById("horloge");

function hour() {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function init() {
    defTitre1();
    datemodif();
    horlogeNode.innerHTML = hour();
    majGrafH();
}

function defTitre1() {
    var title = document.getElementById('titre');
    pageTitle.innerHTML = title.innerHTML;
}

function defTitre2() {
    var title = document.getElementsByTagName('h2')[0].innerHTML;
    pageTitle.innerHTML = title;
}

function defTitre3() {
    var tags = document.getElementsByTagName('h2');
    var title = tags.length >= 2 ? tags[1].innerHTML : name;

    pageTitle.innerHTML = title;
}

function defTitre4() {
    var tags = document.querySelectorAll('.firstOfLast');

    if (tags.length === 0) {
        pageTitle.innerHTML = name;
    } else if (tags.length % 2 === 0) {
        // pair
        pageTitle.innerHTML = tags[0].innerHTML;
    } else {
        pageTitle.innerHTML = tags[tags.length - 1].innerHTML;
    }
}

function inverseTexte() {
    var ps = document.getElementsByTagName("p");
    if(ps.length > 1){
        var tmp;
        for(var i=0; i<ps.length/2; i++){
            tmp = ps[i].innerText;
            ps[i].innerText = ps[ps.length-(i+1)].innerText;
            ps[ps.length-(i+1)].innerText = tmp;
        }
    }
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

function majHorloge1() {
    horlogeNode.innerHTML = hour();
}
setInterval(majHorloge1, 200);

function majHorloge2() {
    horlogeNode.innerHTML = hour();
}
setTimeout(majHorloge2, 1000);

function majGrafH() {
    const node = document.getElementById("grafHorloge");
    let currHour = hour();
    const chars = currHour.split('');

    node.innerHTML = '';
    for (const c in chars) {
        if (chars[c] === ':') {
            node.innerHTML += ':';
        } else node.innerHTML = node.innerHTML
            .concat('<img src="images/' + chars[c] + '.gif" />');
    }
}

document.querySelector('input[name="nbInput"]').oninput = function(ev) {
    const val = ev.target.value;
    ev.target.classList.remove('blanc', 'rouge', 'vert');

    if (val.length === 0) {
        ev.target.classList.add('blanc');
    } else if ("NaN" === ""+parseInt(val)) {
        ev.target.classList.add('rouge');
    } else {
        ev.target.classList.add('vert');
    }
};

const trigger = {
    first: true,
    pageSave: '',
    recherche: function() {

    }
};