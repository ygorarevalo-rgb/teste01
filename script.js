/* ==========================================
            SCROLL SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
        ANIMAÇÃO DOS CARDS
========================================== */

const elementos = document.querySelectorAll(

".card, .bi-card, .experiencia-card, .projeto, .contato-card"

);

function aparecer(){

    elementos.forEach(el=>{

        const topo = el.getBoundingClientRect().top;

        const altura = window.innerHeight - 100;

        if(topo < altura){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", aparecer);

aparecer();


/* ==========================================
      MENU ATIVO CONFORME A SEÇÃO
========================================== */

const secoes = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", ()=>{

    let atual = "";

    secoes.forEach(sec=>{

        const top = window.scrollY;

        const offset = sec.offsetTop - 180;

        const altura = sec.offsetHeight;

        if(top >= offset){

            atual = sec.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("ativo");

        if(link.getAttribute("href") == "#" + atual){

            link.classList.add("ativo");

        }

    });

});


/* ==========================================
      NAVBAR AO ROLAR
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.padding="18px 10%";

        header.style.background="rgba(11,17,32,.97)";

    }

    else{

        header.style.padding="25px 10%";

        header.style.background="rgba(11,17,32,.90)";

    }

});


/* ==========================================
     BARRAS DE HABILIDADES
========================================== */

const barras = document.querySelectorAll(".skill-progress");

function animarSkills(){

    barras.forEach(bar=>{

        const largura = bar.dataset.width;

        const topo = bar.getBoundingClientRect().top;

        if(topo < window.innerHeight - 120){

            bar.style.width = largura;

        }

    });

}

window.addEventListener("scroll", animarSkills);

animarSkills();


/* ==========================================
        EFEITO DE DIGITAÇÃO
========================================== */

const texto = "Business Intelligence • Power BI • Análise de Dados";

const titulo = document.querySelector(".hero h2");

if(titulo){

    titulo.innerHTML = "";

    let i = 0;

    function escrever(){

        if(i < texto.length){

            titulo.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escrever,45);

        }

    }

    escrever();

}