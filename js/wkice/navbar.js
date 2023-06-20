 
    var links = document.querySelectorAll('.navbar a');
    var linksTop = document.querySelectorAll('.footer-iconTop a');
    var linksHeader = document.querySelectorAll('.logo');
    var sections = document.querySelectorAll('section');

links.forEach(function(link) {
    link.addEventListener('click', function() {
        var selectedSectionsId = this.getAttribute('href').substring(1); // Obtém o ID da seção correspondente ao link clicado
        if (selectedSectionsId !== '.navbar a') {
            var homeLink = document.querySelector('a[href="#home"]');
            homeLink.classList.add('ativado');
          }
        // Resetar a cor de todos os links        
        links.forEach(function(link) {
            link.style.color = ''; // Utiliza a cor padrão (herdada)
        });

        // Alterar a cor do link clicado
         this.style.color = 'var(--main-color)';
    });

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            links.forEach(function(link) {
                link.classList.remove('ativado');
             });
         });
    });
});


// voltar a cor para o home quando clicar no icone de ir para o início da página
linksTop.forEach(function(linkTop) {
    linkTop.addEventListener('click', function() {
        var selectedSectionsId = this.getAttribute('href'); // Obtém o ID da seção correspondente ao link clicado
        if (selectedSectionsId !== '.footer-iconTop a') {
            var homeLink = document.querySelector('.navbar a[href="#home"]');//seleciona o link home da navbar para adicionar a classe 'ativado'
            homeLink.classList.add('ativado');
          }
        // Resetar a cor de todos os links        
        links.forEach(function(link) {
            link.style.color = ''; // Utiliza a cor padrão (herdada)
        });
    });
});


// voltar a cor para o home quando clicar no icone Wkice
linksHeader.forEach(function(link) {
    link.addEventListener('click', function() {
        var selectedSectionsId = this.getAttribute('href').substring(1); // Obtém o ID da seção correspondente ao link clicado
        if (selectedSectionsId !== '#home') {
            var homeLink = document.querySelector('.navbar a[href="#home"]');
            homeLink.classList.add('ativado');

        }else if(homeLink1.classList('ativado')){
            var homeLink1 = document.querySelector('.header a[href="#home"]');
            homeLink1.classList.remove('ativado');
        }
        // Resetar a cor de todos os links        
        links.forEach(function(link) {
            link.style.color = ''; // Utiliza a cor padrão (herdada)
        });
        // Alterar a cor do link clicado
         this.classList.add('ativado');
    });
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            links.forEach(function(link) {
                link.classList.remove('ativado');
             });
         });
    });
});