const mainContent = document.getElementById('main-content')

const renderPlace = async () => {
  const placeId = window.location.pathname.split('/').pop()
  const response = await fetch(`/api/places/${placeId}`)

  if (!response.ok) {
    mainContent.innerHTML = `
      <section class="detail-section">
        <article class="detail-panel">
          <div class="detail-info">
            <h1>Place Not Found</h1>
            <a href="/">ALL PLACES</a>
          </div>
        </article>
      </section>
    `
    return
  }

  const place = await response.json()

  mainContent.innerHTML = `
    <section class="detail-hero" style="background-image: url('${place.image}')">
      <a href="/" class="all-bosses-button">ALL PLACES</a>
    </section>

    <section class="detail-section">
      <article class="detail-panel">
        <div class="detail-image">
          <img src="${place.image}" alt="${place.name}">
        </div>

        <div class="detail-info">
          <h1>${place.name}</h1>

          <p><strong>ID:</strong> ${place.id}</p>
          <p><strong>Name:</strong> ${place.name}</p>
          <p><strong>Province:</strong> ${place.province}</p>
          <p><strong>Best Time:</strong> ${place.bestTime}</p>

          <p class="description">${place.description}</p>

          <p>
            <strong>Image:</strong>
            <a href="${place.image}" target="_blank">View image source</a>
          </p>
        </div>
      </article>
    </section>
  `
}

renderPlace()