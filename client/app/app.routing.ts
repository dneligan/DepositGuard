import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { ListingComponent } from './listings/index';
import { ManageComponent } from './manage/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add-listing', component: ListingComponent, canActivate: [AuthGuard] },
    { path: 'manage-listings', component: ManageComponent, canActivate: [AuthGuard] },

    // redirect logout link to login
    { path: 'logout', redirectTo: 'login'},
    //redirect all else to the default
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);