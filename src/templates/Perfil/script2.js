document.addEventListener('DOMContentLoaded', function () {
    const addNewItem = document.querySelector('.add-new');
    const addImageInput = document.getElementById('addImageInput');
    const carrosselContainer = document.querySelector('.carrossel-container');

    // Evento de clique no item "+" para abrir o seletor de arquivos
    addNewItem.addEventListener('click', function() {
        addImageInput.click(); // Simula o clique no input do tipo "file"
    });

    // Quando uma imagem for selecionada
    addImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Pega o primeiro arquivo selecionado

        if (file) {
            const reader = new FileReader(); // Cria um FileReader para ler a imagem

            // Quando a leitura do arquivo for concluída
            reader.onload = function(e) {
                const newItem = document.createElement('div');
                newItem.classList.add('item');
                
                // Cria a nova imagem e adiciona ao item
                const newImg = document.createElement('img');
                newImg.src = e.target.result; // Usa o resultado do FileReader como fonte da imagem
                newImg.alt = 'Nova Barbearia';

                const newText = document.createElement('p');
                newText.textContent = 'Nova Barbearia';

                const newStatus = document.createElement('span');
                newStatus.classList.add('status', 'ativa');
                newStatus.textContent = 'Ativa';

                // Adiciona a imagem, o texto e o status ao novo item
                newItem.appendChild(newImg);
                newItem.appendChild(newText);
                newItem.appendChild(newStatus);

                // Adiciona o novo item ao carrossel
                carrosselContainer.insertBefore(newItem, addNewItem);
            };

            // Lê o arquivo de imagem como URL
            reader.readAsDataURL(file);
        }
    });
});