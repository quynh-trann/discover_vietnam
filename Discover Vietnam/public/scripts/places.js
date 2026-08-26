const mainContent = document.getElementById('main-content')

mainContent.innerHTML = `
  <section class="places-grid" id="places-grid">
    <h2 class="loading">Loading places...</h2>
  </section>
`

const renderPlaces = async () => {
  const placesGrid = document.getElementById('places-grid')

  try {
    const response = await fetch('/api/places')
    const places = await response.json()

    placesGrid.innerHTML = ''

    places.forEach(place => {
      const card = document.createElement('article')
      card.className = 'place-card'

      card.innerHTML = `
        <div class="card-left">
          <img src="${place.image}" alt="${place.name}">
          <a href="http://localhost:3001/places/${place.id}" class="info-button">INFO</a>        </div>

        <div class="card-right">
          <h2>${place.name}</h2>
          <p class="province">${place.province}</p>
          <p class="description">${place.description}</p>
          <p><strong>Best Time:</strong> ${place.best_time}</p>
        </div>
      `

      placesGrid.appendChild(card)
    })
  } catch (error) {
    console.error(error)

    placesGrid.innerHTML = `
      <h2 class="loading">Unable to load places</h2>
    `
  }
}

renderPlaces()