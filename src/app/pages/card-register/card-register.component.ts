import { Component, OnInit } from '@angular/core';
import { cardmodel } from 'src/app/models/cardmodel';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


card: cardmodel= new cardmodel();
datacard: cardmodel[]=[
  {
    cardtitul :"TITUL",
    descri: "descripcion",
    boton: "1",
    il: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png"
  },
  {
    cardtitul :"TITULO2",
    descri: "descripcion2",
    boton: "2",
    il: "https://cnnespanol.cnn.com/wp-content/uploads/2022/06/220616181614-mexico-azteca-stadium-deportes-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1"
  },
  {
    cardtitul :"TITULO3",
    descri: "descripcion3",
    boton: "3",
    il: "https://www.bakermckenzie.com/-/media/images/locations/mexico.jpg?sc_lang=es"
  },
  {
    cardtitul :"TITULO4",
    descri: "descripcion4",
    boton: "4",
    il: "https://images.ecestaticos.com/kaRXwWE2utowBNN87J18tgBKhLY=/0x0:2272x1406/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd2f%2F111%2Fcab%2Fd2f111cab586d774bb2e32c3cd1a2122.jpg"
  }
]


addcard(){
  console.log(this.card);
  this.datacard.push(this.card)
}
}

