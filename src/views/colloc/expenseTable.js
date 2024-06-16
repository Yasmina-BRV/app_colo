export default (data) => {
  const {
    category,
    paid_by: paidBy,
    amount,
    date,
    participant,
    amount_per_person: amountPerPerson,
    status
  } = data;

  return `
  <tr class="bg-warning">
    <td>${category}</td>
    <td>${paidBy}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${participant}</td>
    <td>${amountPerPerson}</td>
    <td>${status}</td>
  </tr>
  `;
};
