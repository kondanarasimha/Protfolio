    const skills = document.querySelector('.js-skills');
    const experience = document.querySelector('.js-experience');
    const edcuation = document.querySelector('.js-edcuation');

    skills.addEventListener('click',()=> {
      openTab('skills');
    });

    experience.addEventListener('click',()=> {
      openTab('experience');
    })

    edcuation.addEventListener('click',()=> {
      openTab('edcuation');
    })

    function openTab(tabname) {
    //Selecting the all tablinks & tabcontents
    const tablinks = document.querySelectorAll('.tab-links');
    const tabcontents = document.querySelectorAll('.tab-contents');

    //loop through the tablinks & removing the all tablinks and tabcontent

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
      tabcontents[i].classList.remove("active-tab");
    }

    //By using this below method adding activelinks and tabcontent. tabname we passing through the function.

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    }

    const closeMenu = document.querySelector('.js-closemenu');
    const openMenu = document.querySelector('.js-openmenu');
    const sidemenu = document.querySelector(".js-sidemenu");

    closeMenu.addEventListener('click',()=> {
      closemenu();
    })

    openMenu.addEventListener('click',()=> {
      openmenu();
    })


    function openmenu() {
      sidemenu.style.right = "0";
    }

    function closemenu() {
      sidemenu.style.right = "-200px";
    }