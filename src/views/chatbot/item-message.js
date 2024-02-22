export default () => (`
  <div>
    <img src="https://cdn.pixabay.com/photo/2012/04/14/16/21/sun-34485_960_720.png" class="img-fluid rounded-start" alt="me" width=70>
    <h5 class="card-title">Me</h5>
    <p class="card-text"><small class="text-body-secondary">02-13-2024 3pm</small></p>
    <p class="card-text">Hello!</p>
  </div>
`);

/*
export default (data) => {
  const {
    name: { first, last },
    picture: { large },
    date: {date},
    hour: {hour},
    message: {message}
  } = data.user;
};
*/
