import { NgModule } from '@angular/core';
import { NameCheckDirective } from './name-check.directive';


@NgModule({
    exports: [NameCheckDirective],
    declarations: [NameCheckDirective],
})
export class NameCheckModule { }
