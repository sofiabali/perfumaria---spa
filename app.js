const pages = {
  home: `
    <h2>Bem-vindo à Perfumaria Aroma!</h2>
    <p>Descubra nossos perfumes exclusivos.</p>
  `,
  produtos: `
    <h2>Nossos Perfumes</h2>
    <ul>
      <li>Rosa Encantada</li>
      <li>Maré do Oriente</li>
      <li>Noite Estrelada</li>
    </ul>
  `,
  sobre: `
    <h2>Sobre a Perfumaria Aroma</h2>
    <p>Somos especializados em perfumes finos e exclusivos.</p>
  `,
  contato: `
    <h2>Contato</h2>
    <form>
      <label>Nome: <input type="text" /></label><br/>
      <label>Email: <input type="email" /></label><br/>
      <button type="submit">Enviar</button>
    </form>
  `
};

function showPage(page) {
  document.getElementById('content').innerHTML = pages[page];
}

// Mostrar home inicialmente
showPage('home');
