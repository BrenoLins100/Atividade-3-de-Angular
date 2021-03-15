import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurossimples',
  templateUrl: './jurossimples.component.html',
  styleUrls: ['./jurossimples.component.css']
})
export class JurossimplesComponent implements OnInit {

  capital: number;taxa: number;tempo: number;
  
  constructor() { }


  calculaJuros () {
    var juros = 0;
    var calculaTaxa = this.taxa / 100;
    juros = (this.capital * calculaTaxa * this.tempo);
    return juros + this.capital;
  }

  ngOnInit() {
  }

}

