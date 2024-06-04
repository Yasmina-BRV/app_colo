export default () => (`
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Tâches</h5>
      </div>
      <div class="card-body p-0">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Ménage</li>
          <li class="list-group-item">Courses</li>
          <li class="list-group-item">Cuisine</li>
          <li class="list-group-item">Lessive</li>
          <li class="list-group-item">Vaiselle</li>
        </ul>
      </div>
      <div class="card-footer bg-warning">
        <a class="btn bg-black text-white" href="tasks" role="button">Voir plus</a>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Dépenses</h5>
      </div>
      <div class="card-body p-0">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Loyer</li>
          <li class="list-group-item">Factures</li>
          <li class="list-group-item">Courses partagées</li>
          <li class="list-group-item">Suivi de paiement</li>
          <li class="list-group-item">Rappel de retard</li>
        </ul>
      </div>
      <div class="card-footer bg-warning">
        <a class="btn bg-black text-white" href="expenses" role="button">Voir plus</a>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Calendrier partagé</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Description</th>
              <th scope="col">Responsable</th>
              <th scope="col">Priorité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr>
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr>
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr>
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr>
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer bg-warning">
        <a class="btn bg-black text-white" href="calendar" role="button">Voir plus</a>
      </div>
    </div>
  </div>
`);
