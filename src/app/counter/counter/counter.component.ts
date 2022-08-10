import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent{
    public title:string = "Componente Contador"
    public counter:number = 0
    public historial:number[] = []

    modificar = (cantidad: number) => {
        this.counter += cantidad
        this.historial.push(this.counter)
    }
}