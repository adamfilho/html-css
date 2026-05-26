async function buscarClima() {

    try {

        let cidade = document.getElementById("cidade").value;

        let chave = "7ae42294eec0307da401f57b6d357e77";

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`;

        let resposta = await fetch(url);

        let dados = await resposta.json();

        console.log(dados);

        // Verifica erro da API
        if (dados.cod != 200) {

            document.getElementById("resultado").innerHTML =
                `Erro: ${dados.message}`;

            return;
        }

        document.getElementById("resultado").innerHTML = `
            <h2>${dados.name}</h2>
            <p>Temperatura: ${dados.main.temp} °C</p>
            <p>Clima: ${dados.weather[0].description}</p>
        `;

    } catch (erro) {

        console.log(erro);

        document.getElementById("resultado").innerHTML =
            "Erro ao buscar clima";

    }
}