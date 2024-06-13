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
        <a class="btn bg-black text-white" href="#" role="button">Modifier un événement</a>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card">
      <div class="card-header bg-warning">
        <h5 class="card-title text-center">Ajout d'un événement</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label class="form-label" for="date">Date</label>
            <input type="date" class="form-control" id="inputDate01">
          </div>
          <div class="mb-3">
            <label class="form-label" for="category">Catégorie</label>
            <select class="form-select" id="validationCategory01" required>
              <option selected disabled value="">Sélectionnez une catégorie</option>
              <option>Courses</option>
              <option>Lessive</option>
              <option>Ménage</option>
              <option>Vaiselle</option>
              <option>Cuisine</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label" for="description">Description</label>
            <textarea class="form-control" id="inputDescription01" required></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label" for="head">Responsable</label>
            <input type="text" class="form-control" id="inputHead01">
          </div>
          <div class="mb-3">
            <label class="form-label" for="priority">Priorité</label>
            <select class="form-select" id="validationPriority01" required>
              <option selected disabled value="">Sélectionnez un niveau de priorité</option>
              <option>Faible</option>
              <option>Moyenne</option>
              <option>Forte</option>
            </select>
          </div>
        </form>
      </div>
      <div class="card-footer bg-warning text-center">
        <button type="button" class="createTaskButton btn bg-black text-white">Ajouter un événement</button>
      </div>
    </div>
  </div>
    `);
