import React from 'react'
import authHeader from '../services/auth-header'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { Tab, Nav, Col, Row } from 'react-bootstrap'
import '../styles/squadTable.css';

class StatsPast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            message: '',
            riders: []
        }
    }

    render() {

        console.log("riders", this.props.riders)

        return (



            <div className="mt-5 table-responsive">

			<table _ngcontent-c5="" className="table w-90">
				<thead className="thead-dark">
					<tr _ngcontent-c5="">
						<th _ngcontent-c5="" >
							Msc
						</th>
						<th _ngcontent-c5="">
							Zawodnik
        				</th>
        				<th _ngcontent-c5="">
							Klub
						</th>
						<th _ngcontent-c5="">
							Średnia
        				</th>
        				<th _ngcontent-c5="">
							Punkty
						</th>
						<th _ngcontent-c5="">
							Bonusy
        				</th>
        				<th _ngcontent-c5="">
							Biegi
						</th>
			
					</tr>
				</thead>
				<tbody _ngcontent-c5="">
					<tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> Bartosz Zmarzlik </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 2,574 </td>
						<td _ngcontent-c5=""> 237 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 94 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 2 </td>
						<td _ngcontent-c5=""> Leon Madsen </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 2,443 </td>
						<td _ngcontent-c5=""> 227 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 97 </td>
			
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> Nicki Pedersen </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 2,432 </td>
						<td _ngcontent-c5=""> 170 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 74 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 4 </td>
						<td _ngcontent-c5=""> Artem Łaguta </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 2,390 </td>
						<td _ngcontent-c5=""> 180 </td>
						<td _ngcontent-c5=""> 4 </td>
						<td _ngcontent-c5=""> 77 </td>
		
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> Tai Woffinden </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 2,232 </td>
						<td _ngcontent-c5=""> 195 </td>
						<td _ngcontent-c5=""> 17 </td>
						<td _ngcontent-c5=""> 95 </td>
			
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 6 </td>
						<td _ngcontent-c5=""> Emil Sajfutdinow </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 2,216 </td>
						<td _ngcontent-c5=""> 182 </td>
						<td _ngcontent-c5=""> 13 </td>
						<td _ngcontent-c5=""> 88 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> Krzysztof Kasprzak </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 2,215 </td>
						<td _ngcontent-c5=""> 192 </td>
						<td _ngcontent-c5=""> 14 </td>
						<td _ngcontent-c5=""> 93 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 8 </td>
						<td _ngcontent-c5=""> Maciej Janowski </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 2,191 </td>
						<td _ngcontent-c5=""> 188 </td>
						<td _ngcontent-c5=""> 18 </td>
						<td _ngcontent-c5=""> 94 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 9 </td>
						<td _ngcontent-c5=""> Patryk Dudek </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 2,173 </td>
						<td _ngcontent-c5=""> 154 </td>
						<td _ngcontent-c5=""> 9 </td>
						<td _ngcontent-c5=""> 75 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> Fredrik Lindgren </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 2,146 </td>
						<td _ngcontent-c5=""> 183 </td>
						<td _ngcontent-c5=""> 8 </td>
						<td _ngcontent-c5=""> 89 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 11 </td>
						<td _ngcontent-c5=""> Martin Vaculik </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 2,093 </td>
						<td _ngcontent-c5=""> 106 </td>
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> 54 </td>
	
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 12 </td>
						<td _ngcontent-c5=""> Jason Doyle </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 2,048 </td>
						<td _ngcontent-c5=""> 119 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 63 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 13 </td>
						<td _ngcontent-c5=""> Piotr Pawlicki </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 2,043 </td>
						<td _ngcontent-c5=""> 133 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 70 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 14 </td>
						<td _ngcontent-c5=""> Maksym Drabik </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 2,034 </td>
						<td _ngcontent-c5=""> 166 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 89 </td>
		
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> Janusz Kołodziej </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 2,013 </td>
						<td _ngcontent-c5=""> 144 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 79 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 16 </td>
						<td _ngcontent-c5=""> Michael Jepsen Jensen </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,918 </td>
						<td _ngcontent-c5=""> 128 </td>
						<td _ngcontent-c5=""> 12 </td>
						<td _ngcontent-c5=""> 73 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 17 </td>
						<td _ngcontent-c5=""> Kenneth Bjerre </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 1,914 </td>
						<td _ngcontent-c5=""> 127 </td>
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> 70 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 18 </td>
						<td _ngcontent-c5=""> Bartosz Smektała </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 1,889 </td>
						<td _ngcontent-c5=""> 121 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 72 </td>
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 19 </td>
						<td _ngcontent-c5=""> Jarosław Hampel </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 1,847 </td>
						<td _ngcontent-c5=""> 147 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 85 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 20 </td>
						<td _ngcontent-c5=""> Przemysław Pawlicki </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 1,831 </td>
						<td _ngcontent-c5=""> 132 </td>
						<td _ngcontent-c5=""> 9 </td>
						<td _ngcontent-c5=""> 77 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 21 </td>
						<td _ngcontent-c5=""> Niels Kristian Iversen </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 1,810 </td>
						<td _ngcontent-c5=""> 106 </td>
						<td _ngcontent-c5=""> 8 </td>
						<td _ngcontent-c5=""> 63 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 22 </td>
						<td _ngcontent-c5=""> Antonio Lindback </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 1,758 </td>
						<td _ngcontent-c5=""> 99 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 62 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 23 </td>
						<td _ngcontent-c5=""> Jakub Jamróg </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 1,742 </td>
						<td _ngcontent-c5=""> 100 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 66 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 24 </td>
						<td _ngcontent-c5=""> Chris Holder </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 1,733 </td>
						<td _ngcontent-c5=""> 92 </td>
						<td _ngcontent-c5=""> 12 </td>
						<td _ngcontent-c5=""> 60 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 25 </td>
						<td _ngcontent-c5=""> Matej Zagar </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 1,731 </td>
						<td _ngcontent-c5=""> 121 </td>
						<td _ngcontent-c5=""> 14 </td>
						<td _ngcontent-c5=""> 78 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 26 </td>
						<td _ngcontent-c5=""> Jack Holder </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 1,708 </td>
						<td _ngcontent-c5=""> 76 </td>
						<td _ngcontent-c5=""> 6 </td>
						<td _ngcontent-c5=""> 48 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 27 </td>
						<td _ngcontent-c5=""> Rune Holta </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 1,673 </td>
						<td _ngcontent-c5=""> 77 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 49 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 28 </td>
						<td _ngcontent-c5=""> Adrian Miedziński </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 1,663 </td>
						<td _ngcontent-c5=""> 126 </td>
						<td _ngcontent-c5=""> 22 </td>
						<td _ngcontent-c5=""> 89 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 29 </td>
						<td _ngcontent-c5=""> Szymon Woźniak </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 1,638 </td>
						<td _ngcontent-c5=""> 117 </td>
						<td _ngcontent-c5=""> 14 </td>
						<td _ngcontent-c5=""> 80 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 30 </td>
						<td _ngcontent-c5=""> Dominik Kubera </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 1,619 </td>
						<td _ngcontent-c5=""> 83 </td>
						<td _ngcontent-c5=""> 19 </td>
						<td _ngcontent-c5=""> 63 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 31 </td>
						<td _ngcontent-c5=""> Grzegorz Zengota </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,576 </td>
						<td _ngcontent-c5=""> 95 </td>
						<td _ngcontent-c5=""> 9 </td>
						<td _ngcontent-c5=""> 66 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 32 </td>
						<td _ngcontent-c5=""> Max Fricke </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 1,568 </td>
						<td _ngcontent-c5=""> 117 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 81 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 33 </td>
						<td _ngcontent-c5=""> Piotr Protasiewicz </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,556 </td>
						<td _ngcontent-c5=""> 89 </td>
						<td _ngcontent-c5=""> 9 </td>
						<td _ngcontent-c5=""> 63 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 34 </td>
						<td _ngcontent-c5=""> Daniel Kaczmarek </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 1,543 </td>
						<td _ngcontent-c5=""> 66 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 46 </td>
						
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 35 </td>
						<td _ngcontent-c5=""> Krzysztof Buczkowski </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 1,537 </td>
						<td _ngcontent-c5=""> 89 </td>
						<td _ngcontent-c5=""> 14 </td>
						<td _ngcontent-c5=""> 67 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 36 </td>
						<td _ngcontent-c5=""> Paweł Przedpełski </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 1,478 </td>
						<td _ngcontent-c5=""> 57 </td>
						<td _ngcontent-c5=""> 11 </td>
						<td _ngcontent-c5=""> 46 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 37 </td>
						<td _ngcontent-c5=""> Brady Kurtz </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 1,423 </td>
						<td _ngcontent-c5=""> 90 </td>
						<td _ngcontent-c5=""> 21 </td>
						<td _ngcontent-c5=""> 78 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 38 </td>
						<td _ngcontent-c5=""> Vaclav Milik </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 1,403 </td>
						<td _ngcontent-c5=""> 101 </td>
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> 77 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 39 </td>
						<td _ngcontent-c5=""> Rafał Karczmarz </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 1,378 </td>
						<td _ngcontent-c5=""> 50 </td>
						<td _ngcontent-c5=""> 12 </td>
						<td _ngcontent-c5=""> 45 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 40 </td>
						<td _ngcontent-c5=""> Peter Kildemand </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 1,346 </td>
						<td _ngcontent-c5=""> 63 </td>
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> 52 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 41 </td>
						<td _ngcontent-c5=""> Grzegorz Walasek </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 1,275 </td>
						<td _ngcontent-c5=""> 69 </td>
						<td _ngcontent-c5=""> 19 </td>
						<td _ngcontent-c5=""> 69 </td>
	
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 42 </td>
						<td _ngcontent-c5=""> Linus Sundstroem </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 1,200 </td>
						<td _ngcontent-c5=""> 37 </td>
						<td _ngcontent-c5=""> 11 </td>
						<td _ngcontent-c5=""> 40 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 43 </td>
						<td _ngcontent-c5=""> Michał Gruchalski </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 1,185 </td>
						<td _ngcontent-c5=""> 71 </td>
						<td _ngcontent-c5=""> 6 </td>
						<td _ngcontent-c5=""> 65 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 44 </td>
						<td _ngcontent-c5=""> Jacob Thorssell </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,184 </td>
						<td _ngcontent-c5=""> 39 </td>
						<td _ngcontent-c5=""> 6 </td>
						<td _ngcontent-c5=""> 38 </td>
				
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 45 </td>
						<td _ngcontent-c5=""> Artur Mroczka </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 1,136 </td>
						<td _ngcontent-c5=""> 58 </td>
                        <td _ngcontent-c5=""> 9 </td>
                        <td _ngcontent-c5=""> 59 </td>
			
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 46 </td>
						<td _ngcontent-c5=""> Tobiasz Musielak </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 1,109 </td>
						<td _ngcontent-c5=""> 54 </td>
						<td _ngcontent-c5=""> 17 </td>
						<td _ngcontent-c5=""> 64 </td>
			
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 47 </td>
						<td _ngcontent-c5=""> Sebastian Niedźwiedź </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,000 </td>
						<td _ngcontent-c5=""> 28 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 31 </td>
		
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 48 </td>
						<td _ngcontent-c5=""> Patryk Rolnicki </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 0,900 </td>
						<td _ngcontent-c5=""> 42 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 50 </td>
			
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 49 </td>
						<td _ngcontent-c5=""> Igor Kopeć-Sobczyński </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 0,853 </td>
						<td _ngcontent-c5=""> 22 </td>
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> 34 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 50 </td>
						<td _ngcontent-c5=""> Kamil Wieczorek </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 0,750 </td>
						<td _ngcontent-c5=""> 29 </td>
						<td _ngcontent-c5=""> 4 </td>
						<td _ngcontent-c5=""> 44 </td>
					
					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 51 </td>
						<td _ngcontent-c5=""> Dawid Wawrzyniak </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 0,441 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 34 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 52 </td>
						<td _ngcontent-c5=""> Gleb Czugunow </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 1,208 </td>
						<td _ngcontent-c5=""> 27 </td>
						<td _ngcontent-c5=""> 2 </td>
						<td _ngcontent-c5=""> 24 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 53 </td>
						<td _ngcontent-c5=""> Alex Zgardziński </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,154 </td>
						<td _ngcontent-c5=""> 27 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 26 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 54 </td>
						<td _ngcontent-c5=""> Wiktor Kułakow </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 1,133 </td>
						<td _ngcontent-c5=""> 16 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 15 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 55 </td>
						<td _ngcontent-c5=""> Kacper Gomólski </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 1,111 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 18 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 56 </td>
						<td _ngcontent-c5=""> Kai Huckenbeck </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 1,000 </td>
						<td _ngcontent-c5=""> 23 </td>
						<td _ngcontent-c5=""> 4 </td>
						<td _ngcontent-c5=""> 27 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 57 </td>
						<td _ngcontent-c5=""> Krystian Pieszczek </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 0,923 </td>
						<td _ngcontent-c5=""> 20 </td>
						<td _ngcontent-c5=""> 4 </td>
						<td _ngcontent-c5=""> 26 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 58 </td>
						<td _ngcontent-c5=""> Damian Pawliczak </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 0,875 </td>
						<td _ngcontent-c5=""> 7 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 8 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 59 </td>
						<td _ngcontent-c5=""> Szymon Szlauderbach </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 0,833 </td>
						<td _ngcontent-c5=""> 4 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 6 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 60 </td>
						<td _ngcontent-c5=""> Przemysław Liszka </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 0,684 </td>
						<td _ngcontent-c5=""> 10 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 19 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 61 </td>
						<td _ngcontent-c5=""> Andrzej Lebiediew </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 0,667 </td>
						<td _ngcontent-c5=""> 8 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 12 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 62 </td>
						<td _ngcontent-c5=""> Patryk Wojdyło </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 0,636 </td>
						<td _ngcontent-c5=""> 16 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 33 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 63 </td>
						<td _ngcontent-c5=""> Mateusz Tonder </td>
						<td _ngcontent-c5=""> Zielona Góra </td>
						<td _ngcontent-c5=""> 0,619 </td>
						<td _ngcontent-c5=""> 13 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 21 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 64 </td>
						<td _ngcontent-c5=""> Alan Szczotka </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 0,545 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 33 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 65 </td>
						<td _ngcontent-c5=""> Hubert Czerniawski </td>
						<td _ngcontent-c5=""> Gorzów </td>
						<td _ngcontent-c5=""> 0,516 </td>
						<td _ngcontent-c5=""> 15 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 31 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 66 </td>
						<td _ngcontent-c5=""> Andreas Lyager </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 0,500 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 10 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 67 </td>
						<td _ngcontent-c5=""> Dawid Knapik </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 0,400 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 10 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 68 </td>
						<td _ngcontent-c5=""> Bartosz Świącik </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 0,387 </td>
						<td _ngcontent-c5=""> 9 </td>
						<td _ngcontent-c5=""> 3 </td>
						<td _ngcontent-c5=""> 31 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 69 </td>
						<td _ngcontent-c5=""> Damian Dróżdż </td>
						<td _ngcontent-c5=""> Wrocław </td>
						<td _ngcontent-c5=""> 0,353 </td>
						<td _ngcontent-c5=""> 5 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 17 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 70 </td>
						<td _ngcontent-c5=""> Marcin Kościelski </td>
						<td _ngcontent-c5=""> Toruń </td>
						<td _ngcontent-c5=""> 0,286 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 7 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 71 </td>
						<td _ngcontent-c5=""> Adrian Woźniak </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 0,222 </td>
						<td _ngcontent-c5=""> 2 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 9 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 72 </td>
						<td _ngcontent-c5=""> Mateusz Świdnicki </td>
						<td _ngcontent-c5=""> Częstochowa </td>
						<td _ngcontent-c5=""> 0,125 </td>
						<td _ngcontent-c5=""> 1 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 8 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 73 </td>
						<td _ngcontent-c5=""> Kacper Konieczny </td>
						<td _ngcontent-c5=""> Tarnów </td>
						<td _ngcontent-c5=""> 0,080 </td>
						<td _ngcontent-c5=""> 2 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 25 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 74 </td>
						<td _ngcontent-c5=""> Damian Lotarski </td>
						<td _ngcontent-c5=""> Grudziądz </td>
						<td _ngcontent-c5=""> 0,000 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 6 </td>

					</tr><tr _ngcontent-c5="">
						<td _ngcontent-c5=""> 75 </td>
						<td _ngcontent-c5=""> Jaimon Lidsey </td>
						<td _ngcontent-c5=""> Leszno </td>
						<td _ngcontent-c5=""> 0,000 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 0 </td>
						<td _ngcontent-c5=""> 1 </td>

					</tr>
				</tbody>
			</table>
               
            </div>




        )
    }
}

export default StatsPast;