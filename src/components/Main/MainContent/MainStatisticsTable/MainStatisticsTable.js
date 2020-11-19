import React from 'react';
import './MainStatisticsTable.scss';
// import increase from '../../../../images/settings/increase.png';
import tableList from './tableList.json';

const MainStatisticsTable = () => (
  <section className="main__statistics-table">
    <table className="main__table">
      <thead className="main__table-head">
        <tr className="main__table-row">
          <th className="main__table-heading">Referrer</th>
          <th className="main__table-heading">Views</th>
          <th className="main__table-heading">Sales</th>
          <th className="main__table-heading">Conversion</th>
          <th className="main__table-heading">Total</th>
        </tr>
      </thead>

      <tbody className="main__table-body">
        {tableList.map(item => (
          <tr className="main__table-row">
            <td className="main__table-data">{item.referrer}</td>
            <td className="main__table-data">{item.views}</td>
            <td className="main__table-data">{item.sales}</td>
            <td className="main__table-data">{item.conversion}</td>
            <td className="main__table-data">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default MainStatisticsTable;
