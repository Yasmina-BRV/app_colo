export default () => (`
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Calendrier partagé</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr class="bg-black text-white">
              <th scope="col">Date</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Description</th>
              <th scope="col">Responsable</th>
              <th scope="col">Priorité</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="bg-warning">
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-black text-white">
              <th scope="row">xx/xx/xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr class="bg-warning">
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
        <a class="btn bg-black text-white" href="#" role="button">Ajouter un événement</a>
        <a class="btn bg-black text-white" href="#" role="button">Modifier un événement</a>
      </div>
    </div>
  </div>
    `);
