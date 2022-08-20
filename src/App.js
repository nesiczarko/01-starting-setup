import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 94.12,
      date: new Date(2022, 7, 15),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 7, 16) },
    {
      id: 'e3',
      title: 'Car insurance',
      amount: 294.67,
      date: new Date(202, 9, 16),
    },
    {
      id: 'e4',
      title: 'New desk (wooden)',
      amount: 450,
      date: new Date(2022, 7, 23),
    },
  ];

 const addExpenseHandler = expense => {

 };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
