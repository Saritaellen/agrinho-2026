function gerarClima() {
  const cidade = document.getElementById("cidade").value;
  const resultado = document.getElementById("resultadoClima");

  if (cidade === "") {
    resultado.innerHTML = "Digite uma cidade primeiro!";
    return;
  }

  const climas = [
    "☀️ Sol forte - ideal para plantio",
    "🌧️ Chuva leve - cuidado com o solo",
    "⛈️ Tempestade - evite ir ao campo",
    "⛅ Nublado - condições estáveis"
  ];

  const climaAleatorio = climas[Math.floor(Math.random() * climas.length)];

  resultado.innerHTML = `Em ${cidade}: ${climaAleatorio}`;
}

function dicaPlantio(cultura) {
  const dica = document.getElementById("dica");

  if (cultura === "soja") {
    dica.innerHTML = "🌱 Soja: melhor plantio entre setembro e dezembro.";
  } else {
    dica.innerHTML = "🌽 Milho: ideal em épocas de chuva controlada.";
  }
}

function calcularProducao() {
  const h = document.getElementById("hectares").value;
  const resultado = document.getElementById("resultadoProducao");

  if (h <= 0) {
    resultado.innerHTML = "Digite um valor válido.";
    return;
  }

  const produtividadePorHectare = 60; // média fictícia

  const total = h * produtividadePorHectare;

  resultado.innerHTML = `Produção estimada: ${total} sacas.`;
}

// alerta automático simples
setTimeout(() => {
  document.getElementById("alerta").innerHTML =
    "⚠️ Possibilidade de chuva forte nos próximos dias!";
}, 5000);
