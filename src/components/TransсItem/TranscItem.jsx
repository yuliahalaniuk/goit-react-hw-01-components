import css from './TranscItem.module.css';
import PropTypes from 'prop-types';

const TranscItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.transactionType}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TranscItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TranscItem;
