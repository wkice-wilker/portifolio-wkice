
    var links = document.querySelectorAll('.navbar a');
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
