const respostasCorretas = {
  q1: "B",
  q2: "C",
  q3: "C",
  q4: "B",
  q5: "A",
};

function verificarRespostas() {
  const form = document.getElementById("quizForm");
  const resultado = document.getElementById("resultado");
  let pontos = 0;
  let algumaResposta = false;
    
  for(let i = 1; i <= 5; i++){
        const pergunta = document.querySelector(`input[name = "q${i}"]:checked`);
        if(pergunta){
            algumaResposta = true;
            break;
        }
    
    if(!pergunta){
        alert("Por favor responda a pelo menos uma pergunta antes de verificar");
        return;
    }
}

  for (let i = 1; i <= 5; i++) {
    const pergunta = document.querySelector(`input[name = "q${i}"]:checked`);
    const alternativas = document.getElementsByName(`q${i}`);

    alternativas.forEach((alt) => {
      alt.disabled = true;
      const label = alt.parentElement;
      label.classList.remove("correct", "wrong");
      label.querySelector(".icon")?.remove();
    })

    if (pergunta) {
      const resposta = pergunta.value;
      const label = pergunta.parentElement;


      if (resposta === respostasCorretas[`q${i}`]) {
        label.classList.add("correct"), pontos++;
        label.insertAdjacentHTML("beforeend",`<i class="fas fa-check icon"></i>`);
      } else {
        label.classList.add("wrong");
        label.insertAdjacentHTML("beforeend", `<i class="fas fa-times icon"></i>`);
      }
      // Mostra a alternativa correta se o aluno errou
      if (resposta !== respostasCorretas[`q${i}`]) {
        const correta = Array.from(alternativas).find((a) => a.value === respostasCorretas[`q${i}`]);
        correta.parentElement.classList.add("correct");
        correta.parentElement.insertAdjacentHTML("beforeend", `<i class="fas fa-check icon"></i>`);
      }
    }
  }
  resultado.textContent = `Você acertou ${pontos} de 5 questões!`;
}
