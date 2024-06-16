export default () => (`
  <div class="container my-5">
    <div class="card text-center">
      <div class="card-header bg-warning">
        <h5 class="card-title">Tâches</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered text-center m-0">
        <div class="tasks"></div>
          <thead>
            <tr class="bg-black text-white">
              <th scope="col">Catégorie</th>
              <th scope="col">Responsable</th>
              <th scope="col">Description</th>
              <th scope="col">Date limite</th>
              <th scope="col">Priorité</th>
              <th scope="col">Statut</th>
            </tr>
          </thead>
          <tbody class="table-group-divider"></tbody>
        </table>
      </div>
      <div class="card-footer bg-warning">
        <a class="btn bg-black text-white" href="#" role="button">Modifier une tâche</a>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="card">
      <div class="card-header bg-warning">
        <h5 class="card-title text-center">Création de tâche</h5>
      </div>
      <div class="card-body">
        <form>
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
            <label class="form-label" for="head">Responsable</label>
            <input type="text" class="form-control" id="inputHead01">
          </div>
          <div class="mb-3">
            <label class="form-label" for="description">Description</label>
            <textarea class="form-control" id="inputDescription01" required></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label" for="date">Date limite</label>
            <input type="date" class="form-control" id="inputDate01">
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
          <div class="mb-3">
            <label class="form-label" for="status">Statut</label>
            <select class="form-select" id="validationStatus01" required>
              <option selected disabled value="">Sélectionnez un statut</option>
              <option>A Faire</option>
              <option>En cours</option>
              <option>Terminé</option>
            </select>
          </div>
        </form>
      </div>
      <div class="card-footer bg-warning text-center">
        <button type="button" class="createTaskButton btn bg-black text-white">Créer une tâche</button>
      </div>
    </div>
  </div>
`);
