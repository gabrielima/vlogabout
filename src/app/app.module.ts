import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedComponent } from './pages/dashboard/feed/feed.component';
import { CalendarioComponent } from './pages/dashboard/calendario/calendario.component';
import { BuscaComponent } from './pages/dashboard/busca/busca.component';
import { ConfiguracoesComponent } from './pages/dashboard/configuracoes/configuracoes.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/dashboard/perfil/perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilHeaderComponent } from './components/perfil-header/perfil-header.component';
import { EditarPerfilComponent } from './pages/dashboard/configuracoes/editar-perfil/editar-perfil.component';
import { AlterarSenhaComponent } from './pages/dashboard/configuracoes/alterar-senha/alterar-senha.component';
import { NotificacoesComponent } from './pages/dashboard/configuracoes/notificacoes/notificacoes.component';
import { PrivacidadeSegurancaComponent } from './pages/dashboard/configuracoes/privacidade-seguranca/privacidade-seguranca.component';
import { MenuSettingsComponent } from './pages/dashboard/configuracoes/menu-settings/menu-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    CalendarioComponent,
    BuscaComponent,
    ConfiguracoesComponent,
    LoginComponent,
    PerfilComponent,
    DashboardComponent,
    FooterComponent,
    PerfilHeaderComponent,
    EditarPerfilComponent,
    AlterarSenhaComponent,
    NotificacoesComponent,
    PrivacidadeSegurancaComponent,
    MenuSettingsComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
