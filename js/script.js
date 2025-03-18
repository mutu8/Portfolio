/* typing animation */
var typed = new Typed(".typing", {
    strings: ["", ".NET Developer", "Web Developer", "Bacend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* Aside */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i =0; i < totalNavList; i++)
      { 
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j < totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {  
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
      }

      function removeBackSection()
      {
        for(let i = 0; i < totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
      }

      function addBackSection(num)
      {
         allSection[num].classList.add("back-section");
      }

      function showSection(element)
      {
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
      }

      function updateNav(element)
      {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active"); 
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active"); 
            }
        }
      }

      document.querySelector(".hire-me").addEventListener("click", function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      })

      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })

            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }

    // CV
    document.getElementById('downloadLink').addEventListener('click', function(event) {
        event.preventDefault();  // Evitar el comportamiento predeterminado del enlace

        var link = document.createElement('a');
        link.href = '/docs/CV.pdf';  // Reemplaza con la ruta correcta de tu archivo
        link.download = 'CV.pdf';  // Reemplaza con el nombre deseado para el archivo descargado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Gif
    document.addEventListener("DOMContentLoaded", function() {
        let images = document.querySelectorAll(".hover-img"); // Selecciona todos los elementos con la clase hover-img

        images.forEach(img => {
            img.addEventListener("mouseenter", () => img.src = img.dataset.gif);
            img.addEventListener("mouseleave", () => img.src = img.dataset.static);
        });
    });

    // EmailJS
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita la recarga de la página
        console.log("Form submitted"); // Verifica que el evento se ejecuta
    
        const btn = document.getElementById('button');
        btn.innerText = 'Sending...';
    
        const serviceID = 'default_service';
        const templateID = 'template_0hnkndd';
    
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.innerText = 'Send message';
            alert('Sent!');
    
            // LIMPIAR FORMULARIO DESPUÉS DE ENVIAR
            document.getElementById('form').reset();
    
          }, (err) => {
            btn.innerText = 'Send message';
            console.error("Error sending email:", err);
            alert(JSON.stringify(err));
          });
    });
    