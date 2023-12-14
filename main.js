import { Card } from './card.js';

const OK = 'ok';
const OVERLOAD = 'overload';
const UNDERLOAD = 'underload';

const data = [
  {
    department: 'IT',
    employees: 3,
    status: OK,
  },
  {
    department: 'HR',
    employees: 1,
    status: OVERLOAD,
  },
  {
    department: 'Sales',
    employees: 2,
    status: UNDERLOAD,
  },
  {
    department: 'Marketing',
    employees: 1,
    status: OK,
  },
];

class App {
  root = document.getElementById('root');

  render() {
    this.root.innerHTML = data
      .map((card) =>
        new Card(card.department, card.employees, card.status).render(),
      )
      .join('');
  }
}

new App().render();
