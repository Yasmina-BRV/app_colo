export default () => (`
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Dépenses</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr class="bg-black text-white">
              <th scope="col">Catégorie</th>
              <th scope="col">Payé par</th>
              <th scope="col">Montant</th>
              <th scope="col">Le</th>
              <th scope="col">Participent à parts égales</th>
              <th scope="col">Montant par personne</th>
              <th scope="col">Statut</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer bg-warning">
        <a class="btn bg-black text-white" href="#" role="button">Saisir une dépense</a>
        <a class="btn bg-black text-white" href="#" role="button">Modifier une dépense</a>
        </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card">
      <div class="card-header bg-warning">
        <h5 class="card-title text-center">Saisie de dépense</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label class="form-label" for="category">Catégorie</label>
            <select class="form-select" id="inputCategory02" required>
              <option selected disabled value="">Sélectionnez une catégorie</option>
              <option>Courses</option>
              <option>Lessive</option>
              <option>Ménage</option>
              <option>Vaiselle</option>
              <option>Cuisine</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label" for="description">Payé par</label>
            <input type="text" class="form-control" id="inputPaidBy02">
          </div>
          <div class="mb-3">
            <label class="form-label" for="description">Montant</label>
            <input type="number" class="form-control" id="inputAmount02" placeholder="0.01" step="0.01" min="0" max="1000">
          </div>
          <div class="mb-3">
            <label class="form-label" for="date">Le</label>
            <input type="date" class="form-control" id="inputDate02">
          </div>
          <div class="mb-3">
            <label class="form-label" for="description">Participent à parts égales</label>
            <input type="text" class="form-control" id="inputPaidBy02">
          </div>
          <div class="mb-3">
            <label class="form-label" for="description">Montant par personne</label>
            <input type="number" class="form-control" id="inputAmount02" placeholder="0.01" step="0.01" min="0" max="1000">
          </div>
          <div class="mb-3">
            <label class="form-label" for="status">Statut</label>
            <select class="form-select" id="validationStatus02" required>
              <option selected disabled value="">Sélectionnez un statut</option>
              <option>A Faire</option>
              <option>En cours</option>
              <option>Terminé</option>
            </select>
          </div>
        </form>
      </div>
      <div class="card-footer bg-warning text-center">
        <button type="button" class="loginButton btn bg-black text-white">Saisir une dépense</button>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Suivi de paiements effectués</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr class="bg-black text-white">
              <th scope="col">Catégorie</th>
              <th scope="col">Montant</th>
              <th scope="col">Payé à</th>
              <th scope="col">Le</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Suivi de paiements reçus</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr class="bg-black text-white">
              <th scope="col">Catégorie</th>
              <th scope="col">Montant</th>
              <th scope="col">Reçu par</th>
              <th scope="col">Le</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Rappels de paiements en retard</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr class="bg-black text-white">
              <th scope="col">Catégorie</th>
              <th scope="col">Montant</th>
              <th scope="col">Dû à</th>
              <th scope="col">Depuis le</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
    `);
