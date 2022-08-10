import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';

@NgModule({
    //Declaro los dos arrays con los que se van a trabajar.
    declarations: [CounterComponent],
    exports: [CounterComponent],
    imports: [CommonModule]
})
export class CounterModule{}