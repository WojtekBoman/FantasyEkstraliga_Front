import React from 'react';
import ReactDOM from 'react-dom'
import {Container,Jumbotron} from 'react-bootstrap'
import "../styles/welcomeInfo.css"

const Manual = () => {
    return(
        <Container id="info">
            <Jumbotron>
                <h1>Zasady gry</h1>
                <br/>
                <h3>Kategorie zawodników</h3>
                    
                <p>
                Aby utworzyć drużynę gracz musi wybrać 10 zawodników. Gracz jest zobowiązany do
                wyboru dokładnie 3 juniorów oraz maksymalnie 4 obcokrajowców. Oznacza to że
                drużyna może się składać z :
                <ul>
                    <li>3 juniorów, 3 seniorów i 4 obcokrajowców</li>
                    <li>3 juniorów, 4 seniorów i 3 obcokrajowców</li>
                    <li>3 juniorów, 5 seniorów i 2 obcokrajowców</li>
                    <li>3 juniorów, 6 seniorów i 1 obcokrajowca</li>
                    <li>3 juniorów, 7 seniorów i 0 obcokrajowców</li>
                </ul>
                Drużyna składa się z 7 zawodników pierwszego składu oraz 3 zawodników
                rezerwowych. W pierwszym składzie musi się znaleźć dokładnie 2 juniorów i
                maksymalnie 3 obcokrajowców.
                Każdy gracz może posiadać tylko jedną drużynę.
                </p>
                <hr className="my-4" />
                 <h3>Budżet</h3>
                <p>
                Każdy z graczy ma do wykorzystania 8 milionów wirtualnej waluty. Przy zakupie
                danego zawodnika do drużyny, budżet jest zmniejszany o wartość zawodnika. Ceny
                zawodników są ustalane na podstawie ich wyników z poprzednich sezonów.
                Jeśli gracz sprzeda zawodnika, otrzymuje z powrotem pieniądze, które może
                wykorzystać na zakup innego zawodnika.
                </p>
                <hr className="my-4" />
                 <h3>Punktacja</h3>
                <p>
                Punkty są przyznawane za zawodników znajdujących się w pierwszym składzie. Ilość
                punktów w grze odpowiada realnym wynikom zawodników w meczach i jest równa
                sumie punktów biegowych oraz bonusów. Dla przykładu: Piotr Pawlicki zdobywa
                11pkt i 2 bonusy w meczu ze Spartą Wrocław. Oznacza to że zdobywa 13 pkt w grze
                za tą kolejkę spotkań, w której rozgrywany był mecz. 
                </p>
                <br/>
                <p>Wszystkie punkty zdobyte przez zawodników pierwszego składu w danej kolejce są
                sumowane do punktacji drużyny gracza. </p>
                <hr className="my-4" />
                 <h3>Kapitan</h3>
                <p>
                Każdy gracz wybiera kapitana i vice kapitana swojej drużyny. W każdej kolejce punkty
                które zdobył kapitan są liczone razy dwa. Jeśli kapitan nie pojechał w danej kolejce
                podwójne punkty zdobywa vice kapitan. Jeśli on również nie pojechał, żaden
                zawodnik nie dostaje podwójnych punktów.
                </p>
                <hr className="my-4" />
                 <h3>Rezerwowi</h3>
                <p>
                Jeśli w danej kolejce któryś z zawodników pierwszego składu nie pojedzie w meczu,
                na jego miejsce automatycznie wchodzi rezerwowy (jeśli rezerwowy pojechał).
                Zasady rezerwowych:
                <ul>
                    <li>za juniora może wejść tylko junior</li>
                    <li>za obcokrajowca lub seniora może wejść obcokrajowiec lub senior, z
                        zachowaniem zasady że w pierwszym składzie może być maksymalnie 3
                        obcokrajowców</li>
                    <li>rezerwowi obcokrajowcy i seniorzy wchodzą w kolejności takiej jakiej są na
                        ławce rezerwowych (najpierw wchodzi rezerwowy oznaczony numerem 1,
                        potem numerem 2, numer 3 jest zarezerwowany dla juniora).</li>
                </ul>

                </p>
                
                </Jumbotron>
        </Container>
    )
}

export default Manual;