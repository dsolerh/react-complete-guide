
import { ValueChangeHandler } from '../../types/ValueChangeHandler';
import './ExpensesFilter.css';

interface ExpensesFilterProps {
  onValueChange: ValueChangeHandler<string>
  value: string
}

function ExpensesFilter({ onValueChange, value }: ExpensesFilterProps): JSX.Element {

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={e => onValueChange(e.target.value)} value={value}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;