export default () => (`
  <div class="row">
    <div class="col">
      <div class="container my-5">
        <div class="card">
          <div class="card-header bg-warning">
            <h5 class="card-title text-center">Inscription</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-2">
                <label class="form-label" for="lastName">Nom *</label>
                <input type="text" class="form-control" id="inputLastName" aria-describedby="lastName">
              </div>
              <div class="mb-2">
                <label class="form-label" for="firstName">Prénom *</label>
                <input type="text" class="form-control" id="inputFirstName" aria-describedby="firstName">
              </div>
              <div class="mb-2">
                <label class="form-label" for="email">Adresse email *</label>
                <input type="email" class="form-control" id="inputEmail1" aria-describedby="email">
              </div>
              <div class="mb-2">
                <label class="form-label" for="password">Mot de passe *</label>
                <input type="password" class="form-control" id="inputPassword1" aria-describedby="password">
              </div>
            </form>
          </div>
          <div class="card-footer bg-warning text-center">
          <button type="button" class="registerButton btn bg-black text-white">S'inscrire</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="container my-5">
        <div class="card">
          <div class="card-header bg-warning">
            <h5 class="card-title text-center">Connexion</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label class="form-label" for="email">Addresse email *</label>
                <input type="email" class="form-control" id="inputEmail2" aria-describedby="email">
              </div>
              <div class="mb-3">
                <label class="form-label" for="password">Mot de passe *</label>
                <input type="password" class="form-control" id="inputPassword2">
              </div>
            </form>
          </div>
          <div class="card-footer bg-warning text-center">
            <button type="button" class="loginButton btn bg-black text-white">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
