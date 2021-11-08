import './ExpenseItem.css'
import './ExpenseDate'
import Card from'./Card'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  /* const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
      setTitle('update!');
  } */
    return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">€{props.amount}</div>
        </div>
      {/*   <button onClick={clickHandler}> UPDATE TITLE</button> */}
    </Card>);
}

export default ExpenseItem;