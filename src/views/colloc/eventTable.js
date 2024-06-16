export default (data) => {
  const {
    date,
    category,
    description,
    head,
    priority
  } = data;

  return `
  <tr class="bg-warning">
    <td>${date}</td>
    <td>${category}</td>
    <td>${description}</td>
    <td>${head}</td>
    <td>${priority}</td>
  </tr>
  `;
};
