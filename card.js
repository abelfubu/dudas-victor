export class Card {
  constructor(departament, employees, status) {
    this.departament = departament;
    this.employees = employees;
    this.status = status;
  }

  render() {
    return `
      <div class="card ${this.status}">
        <h3>${this.departament}</h3>
        <p>Employees: ${this.employees}</p>
        <span>${this.status.toUpperCase()}</span>
      </div>
    `;
  }
}
