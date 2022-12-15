document.querySelector("#btn").addEventListener("click", () => {

    let input = document.querySelector("#searchInput").value;

    if(input !== "") {
        clearInfo();
        showWarning("Não encontramos essa pessoa na família.")

        let informacao = informacoes;

        for(let i = 0; i < informacao.length; i++) {

            if(input == informacao[i].nome) {    
                let iInfo = informacao[i]
                display({
                    name: informacao[i].nome,
                    lastname: informacao[i].sobrenome,
                    age: informacao[i].idade,
                    sons: informacao[i].filhos,
                    job: informacao[i].trabalho,
                    animals: informacao[i].animais,
                    photo: informacao[i].fotos.url
                });
            };
        };
    } else {
        clearInfo();
    };
});

// Função para exibir a mensagem de carregando
function showWarning(msg) {
    document.querySelector("#warning").innerHTML = msg;
};

// Função que mostra as informações
function display(json) {
    showWarning("");

    document.querySelector("#titulo").style.display = "none";
    
    document.querySelector("#photos img").setAttribute("src", `./images/${json.photo}`);

    document.querySelector("#name span").innerHTML = `${json.name}`;
    document.querySelector("#lastname span").innerHTML = `${json.lastname}`;
    document.querySelector("#age span").innerHTML = `${json.age}`;
    document.querySelector("#sons span").innerHTML = `${json.sons}`;
    document.querySelector("#job span").innerHTML = `${json.job}`;
    document.querySelector("#animals span").innerHTML = `${json.animals}`;

    document.querySelector("#container").style.display = "block";
};

// Função para limpar as informações
function clearInfo() {
    showWarning("");
    document.querySelector("#container").style.display = "none";
};