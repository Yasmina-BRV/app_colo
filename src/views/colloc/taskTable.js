export default (data) => {
  const {
    category,
    head,
    description,
    limit_date: date,
    priority,
    status
  } = data;

  return `
  <tr class="bg-warning">
    <td>${category}</td>
    <td>${head}</td>
    <td>${description}</td>
    <td>${date}</td>
    <td>${priority}</td>
    <td>${status}</td>
  </tr>
  `;
};
