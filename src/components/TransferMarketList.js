import React from 'react';
import athleteService from '../services/athlete-service';
import authHeader from '../services/auth-header';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TransferMarketListClick from './TransferMarketListClick';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}

const getClub = (club, tab) => {
  switch (club) {
    case tab[0].clubId:
      return tab[0].name
    case tab[1].clubId:
      return tab[1].name
    case tab[2].clubId:
      return tab[2].name
    case tab[3].clubId:
      return tab[3].name
    case tab[4].clubId:
      return tab[4].name
    case tab[5].clubId:
      return tab[5].name
    case tab[6].clubId:
      return tab[6].name
    case tab[7].clubId:
      return tab[7].name
    default:
      return 'Nie załadowano...';
  }
}



const TransferMarketList = (props) => {

  let i = 0;
  const data = props.rider_data;
  const clubs = props.all_clubs;

  const { items, requestSort, sortConfig } = useSortableData(props.rider_data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table class="table table-sortable">
      <thead class="thead-dark">


        <tr>
          <th scope='col'>L.p</th>
          <th scope="col" onClick={() => requestSort('nationality')} ClassName={getClassNamesFor('nationality')}>Kraj</th>
          <th scope="col" onClick={() => requestSort('surname')} ClassName={getClassNamesFor('surname')}>Zawodnik</th>
          <th scope="col" onClick={() => requestSort('club')} ClassName={getClassNamesFor('club')}>Klub</th>
          <th scope="col" onClick={() => requestSort('category')} ClassName={getClassNamesFor('category')}>Kategoria</th>
          <th scope="col" onClick={() => requestSort('value')} ClassName={getClassNamesFor('value')}>Wartość</th>
          <th scope="col" onClick={() => requestSort('points')} ClassName={getClassNamesFor('points')}>Punkty</th>
          <th scope="col">Kup</th>
          <th scope="col">Info</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map(item => (<tr key={item.athleteId}>
            <td className="align-middle text-center">{i = i + 1}</td>
            <td className="align-middle">{item.nationality}</td>
            <td className="align-middle"><span id="names">{item.firstName} {item.surname}</span></td>
            <td className="align-middle font-weight-light">{getClub(item.club, clubs)}</td>
            <td className="align-middle">{item.category}</td>
            <td className="align-middle">{item.value} mln</td>
            <td className="align-middle text-center">{item.points}</td>
            <td className=" d-flex align-items-center justify-content-center"><TransferMarketListClick rider_id={item.athleteId} getTeam={props.getTeam}/></td>
            <td className="align-middle"><Link to={"riderDetails/" + item.athleteId} >
                          <FontAwesomeIcon id={"infoIcon"+item.athleteId} color="black" size="2x" icon={faInfoCircle} /></Link>
                        </td>

          </tr>

          ))
        }

      </tbody>

    </table>
  )

}

export default TransferMarketList;