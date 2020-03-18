import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { httpInterceptorProviders } from './_helpers/authinterceptor';
import { DatatableComponent } from './data/datatable/datatable.component';
import { UpdateoffreComponent } from './data/updateoffre/updateoffre.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleriaModule} from 'primeng/galleria';
import { FindoffrebycategorieComponent } from './findoffrebycategorie/findoffrebycategorie.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { CarouselModule } from 'ngx-bootstrap';
import { CameraComponent } from './camera/camera.component';
import {WebcamModule} from 'ngx-webcam';
import { PropositionComponent } from './proposition/proposition.component';
import { TesttemplateComponent } from './testtemplate/testtemplate.component';
import { OffreformaterielComponent } from './offreformateriel/offreformateriel.component';
import { OffreforinformatiqueComponent } from './offreforinformatique/offreforinformatique.component';
import { OffreforfournitureComponent } from './offreforfourniture/offreforfourniture.component';
import { OffreforeducationComponent } from './offreforeducation/offreforeducation.component';
import { EntreprisebyeducationComponent } from './entreprisebyeducation/entreprisebyeducation.component';
import { EnreprisebyfournitureComponent } from './enreprisebyfourniture/enreprisebyfourniture.component';
import { EnreprisebyinformatiqueComponent } from './enreprisebyinformatique/enreprisebyinformatique.component';
import { EnreprisebymaterielComponent } from './enreprisebymateriel/enreprisebymateriel.component';
import { OffreFournisseurComponent } from './offre-fournisseur/offre-fournisseur.component';
import { AjouterentrepriseComponent } from './ajouterentreprise/ajouterentreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SettingComponent,
    DashbordComponent,
    PagesComponent,
    DatatableComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardUserComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    ProfileComponent,
    UpdateoffreComponent,
    EntrepriseComponent,
    FindoffrebycategorieComponent,
    CameraComponent,
    PropositionComponent,
    TesttemplateComponent,
    OffreformaterielComponent,
    OffreforinformatiqueComponent,
    OffreforfournitureComponent,
    OffreforeducationComponent,
    EntreprisebyeducationComponent,
    EnreprisebyfournitureComponent,
    EnreprisebyinformatiqueComponent,
    EnreprisebymaterielComponent,
    OffreFournisseurComponent,
    AjouterentrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    TabViewModule,
    ButtonModule,
    BrowserAnimationsModule,
    GalleriaModule,
    ScrollPanelModule,
    WebcamModule,
    CarouselModule.forRoot()

  ],
  providers: [httpInterceptorProviders, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
