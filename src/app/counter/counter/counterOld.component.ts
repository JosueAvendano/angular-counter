import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>{{title}}</h3>

        <!-- <p>{{25*2}}</p> -->
        <!-- <button (click)="restar()">-</button>
        <span>{{counter}}</span>
        <button (click)="sumar()">+</button> -->
        <button (click)="modificar(-1)">-</button>
        <span>{{counter}}</span>
        <button (click)="modificar(1)">+</button>
    `
})
export class CounterComponent{
    public title:string = "Componente Contador"
    public counter:number = 0

    // restar(){
    //     this.counter--
    // }
    // sumar(){
    //     this.counter++
    // }

    modificar = (cantidad: number) => this.counter += cantidad
}