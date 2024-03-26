export default (messages) => {
  const {
    author,
    avatar,
    type,
    date,
    text
  } = messages.user;

  return `
    <div class="col-3">
      <div class="card">
        <img src="${avatar}" class="card-img-top" alt="Future Fremen's queen">
        <div class="card-body">
          <h5 class="card-title">${type} ${author}</h5>
          <p class="card-date">${date}</p>
          <p class="card-text">${text}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `;
};
