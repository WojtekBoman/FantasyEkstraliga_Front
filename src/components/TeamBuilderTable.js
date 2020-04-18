import React from 'react';

class TeamBuilderTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container bg-light border rounded border-dark" id="tableWindow">
                <header>
                  <h2>Potężne byki</h2>
                  <hr className="my-4"/>
                </header>
                <table class="table table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th scope='col'>L.p</th>
                      <th scope="col">Kraj</th>
                      <th scope="col">Zawodnik</th>
                      <th scope="col">Wartość</th>
                      <th scope="col">Klub</th>
                      <th scope="col">Punkty</th>
                      <th scope="col">Akcje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>POL</td>
                      <td>Piotr Pawlicki</td>
                      <td>2 mln</td>
                      <td>Unia Leszno / X-Demon</td>
                      <td>13</td>
                      <td><button className="btn btn-primary">Sprzedaj</button></td>
                    </tr>
                
                    <tr>
                      <th scope="row">1</th>
                      <td>POL</td>
                      <td>Piotr Pawlicki</td>
                      <td>2 mln</td>
                      <td>Unia Leszno / X-Demon</td>
                      <td>13</td>
                      <td><button className="btn btn-primary">Sprzedaj</button></td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>POL</td>
                      <td>Piotr Pawlicki</td>
                      <td>2 mln</td>
                      <td>Unia Leszno / X-Demon</td>
                      <td>13</td>
                      <td><button className="btn btn-primary">Sprzedaj</button></td>
                    </tr>
                  </tbody>
                 
                </table>

                <h3>Rezerwowi</h3>

                <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                      <th scope='col'>L.p</th>
                      <th scope="col">Kraj</th>
                      <th scope="col">Zawodnik</th>
                      <th scope="col">Wartość</th>
                      <th scope="col">Klub</th>
                      <th scope="col">Punkty</th>
                      <th scope="col">Akcje</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>POL</td>
                      <td>Piotr Pawlicki</td>
                      <td>2 mln</td>
                      <td>Unia Leszno / X-Demon</td>
                      <td>13</td>
                      <td><button className="btn btn-primary">Sprzedaj</button></td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>POL</td>
                      <td>Piotr Pawlicki</td>
                      <td>2 mln</td>
                      <td>Unia Leszno / X-Demon</td>
                      <td>13</td>
                      <td><button className="btn btn-primary">Sprzedaj</button></td>
                    </tr>
                    </tbody>
                </table>

                
            </div>
        )
    } 
}

export default TeamBuilderTable;