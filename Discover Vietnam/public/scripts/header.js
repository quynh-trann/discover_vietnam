const header = document.querySelector('header')
if (header) {
header.innerHTML = `
  <nav>
    <a class="site-logo" href="/">
      <img src="/img/vehicles.png" alt="Discover Vietnam Logo">
      <span>Discover Vietnam</span>
    </a>

    <a class="home-button" href="/">Home</a>
  </nav>
`
}