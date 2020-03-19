import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {DatatableComponent} from './data/datatable/datatable.component';
import {UpdateoffreComponent} from './data/updateoffre/updateoffre.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';
import {FindoffrebycategorieComponent} from './findoffrebycategorie/findoffrebycategorie.component';
import {CameraComponent} from './camera/camera.component';
import {PropositionComponent} from './proposition/proposition.component';
import {TesttemplateComponent} from './testtemplate/testtemplate.component';
import {OffreformaterielComponent} from './offreformateriel/offreformateriel.component';
import {OffreforinformatiqueComponent} from './offreforinformatique/offreforinformatique.component';
import {OffreforeducationComponent} from './offreforeducation/offreforeducation.component';
import {OffreforfournitureComponent} from './offreforfourniture/offreforfourniture.component';
import {EntreprisebyeducationComponent} from './entreprisebyeducation/entreprisebyeducation.component';
import {EnreprisebyfournitureComponent} from './enreprisebyfourniture/enreprisebyfourniture.component';
import {EnreprisebyinformatiqueComponent} from './enreprisebyinformatique/enreprisebyinformatique.component';
import {EnreprisebymaterielComponent} from './enreprisebymateriel/enreprisebymateriel.component';
import {OffreFournisseurComponent} from './offre-fournisseur/offre-fournisseur.component';
import {AjouterentrepriseComponent} from './ajouterentreprise/ajouterentreprise.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'data', component: DatatableComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload', component: EntrepriseComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'test', component: TesttemplateComponent },
  {path: 'update/:id' , component : UpdateoffreComponent},
  {path: 'camera/:id' , component : CameraComponent},
  {path: 'offrebycat/:id' , component : FindoffrebycategorieComponent},
  { path: 'onlistpropo/:id', component: PropositionComponent },
  { path: 'offreforinfo', component: OffreforinformatiqueComponent },
  { path: 'offreformat', component: OffreformaterielComponent },
  { path: 'education', component: OffreforeducationComponent },
  { path: 'fourniture', component: OffreforfournitureComponent },
  { path: 'entrepriseeducation', component: EntreprisebyeducationComponent },
  { path: 'entreprisefourniture', component: EnreprisebyfournitureComponent },
  { path: 'entreprisemateriel', component: EnreprisebymaterielComponent },
  { path: 'entrepriseinformatique', component: EnreprisebyinformatiqueComponent },
  { path: 'offrefournisseur', component: OffreFournisseurComponent },
  { path: 'ajouterfournisseur', component: AjouterentrepriseComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
