import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juroscompostos',
  templateUrl: './juroscompostos.component.html',
  styleUrls: ['./juroscompostos.component.css']
})
export class JuroscompostosComponent implements OnInit {

  capital: number; taxa: number; tempo: number;

    calculaJuros (a,b,c){
      b = b / 100+1
      return a * Math.pow(b,c);
  }

  getTempo () {
    return this.tempo;
  }

  getCalculo () {
    let list: number[] = [];
    for(let i=1; i<=this.tempo; i++)
        list.push(this.getTempo());
        console.log(list);
        return list;    
  }

  constructor() { }

  ngOnInit() {
  }

}