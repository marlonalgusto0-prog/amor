let fotos = [null, null, null];
let indexAtual = 0;

// Função para abrir o seletor de arquivos
function triggerInput(index) {
    document.getElementById(`file${index}`).click();
}

// Lógica para carregar as fotos e mostrar no carrossel
for (let i = 0; i < 3; i++) {
    document.getElementById(`file${i}`).addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function() {
            fotos[i] = reader.result;
            mostrarFoto(i);
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    });
}

function mostrarFoto(index) {
    const imgElement = document.getElementById('displayImg');
    const legenda = document.getElementById('fotoLegenda');
    
    if (fotos[index]) {
        imgElement.src = fotos[index];
    } else {
        imgElement.src = "https://via.placeholder.com/300x200?text=Sem+Foto";
    }
    legenda.innerText = `Foto ${index + 1}`;
    indexAtual = index;
}

// Botões do Carrossel
document.getElementById('prevBtn').addEventListener('click', () => {
    indexAtual = (indexAtual === 0) ? 2 : indexAtual - 1;
    mostrarFoto(indexAtual);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    indexAtual = (indexAtual === 2) ? 0 : indexAtual + 1;
    mostrarFoto(indexAtual);
});

// Botão Final
document.getElementById('btnGerar').addEventListener('click', () => {
    const data = document.getElementById('dataInicio').value;
    const msg = document.getElementById('mensagem').value;

    if (!data || !msg) {
        alert("Ops! Preencha a data e a mensagem primeiro. 💕");
        return;
    }

    alert("Pronto! As informações foram salvas localmente. Em um site real, agora geraríamos um link único!");
    console.log("Dados salvos:", { data, msg, fotos });
});
