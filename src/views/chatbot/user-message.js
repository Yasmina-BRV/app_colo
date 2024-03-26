export default (data) => {
  const {
    name: { firstName, lastName },
    promo,
    school
  } = data.user;

  return `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${firstName} ${lastName}</h5>
          <p class="card-promo">${promo}</p>
          <p class="card-text">${school}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `;
};
