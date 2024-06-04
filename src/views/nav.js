const nav = () => (`
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="homepage">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOa0gczIrilKd2QlLX-_Mt3jFkjx0_soENQ&s" class="img-fluid" alt="key image" width="50" height="50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="homepage">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tasks">Tâches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="expenses">Dépenses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="calendar">Calendrier</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login">Inscription/Connexion</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`);

export default nav;
