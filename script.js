 // Contador de tempo
  const dataInicial = new Date("2025-05-10T19:00:00");
  const slide = document.getElementById('slide');

  setInterval(() => {
    const agora = new Date();
    const diff = agora - dataInicial;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('contador').textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }, 1000);

  // Corações caindo
  setInterval(() => {
    const heart = document.createElement('img');
    heart.src = 'coracao.png'; // Caminho da sua imagem de coração
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);

  setInterval(() => {
    const heartblue = window.document.createElement('img');
    heartblue.src = 'coracaoazul.png'; 
    heartblue.classList.add('heart');
    heartblue.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(heartblue);

    setTimeout(() => {
      heartblue.remove();
    }, 4000);
  }, 300)