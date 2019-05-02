import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInscriptionComponent } from './user-inscription/user-inscription.component';

const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: UserInscriptionComponent, },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class UserRoutingModule { }