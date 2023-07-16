import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css'

export const TransactionsHistory = ({ items }) => {
    return (
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th className={css.type_item}>Type</th>
            <th className={css.type_item}>Amount</th>
            <th className={css.type_item}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.list_item}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.id}>
              <td className={css.block_item}>{type}</td>
              <td className={css.block_item}>{amount}</td>
              <td className={css.block_item}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default TransactionsHistory;

  TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
