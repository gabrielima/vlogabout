import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
import { FeedItemComponent } from './pages/dashboard/feed/feed-item/feed-item.component';
import { PlayerComponent } from './components/player/player.component';
import { NavNotificacoesComponent } from './components/navbar/nav-notificacoes/nav-notificacoes.component';
import { FollowModalComponent } from './components/perfil-header/follow-modal/follow-modal.component';
import { CalendarioVideosComponent } from './pages/dashboard/calendario/calendario-videos/calendario-videos.component';
import { CalendarioModalComponent } from './pages/dashboard/calendario/calendario-modal/calendario-modal.component';
import { AceitarSeguidoresModalComponent } from './components/navbar/aceitar-seguidores-modal/aceitar-seguidores-modal.component';
import { NavBuscaComponent } from './components/navbar/nav-busca/nav-busca.component';

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
    MenuSettingsComponent,
    FeedItemComponent,
    PlayerComponent,
    NavNotificacoesComponent,
    FollowModalComponent,
    CalendarioVideosComponent,
    CalendarioModalComponent,
    AceitarSeguidoresModalComponent,
    NavBuscaComponent
  ],
  imports: [
    AppRouting,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    FeedItemComponent,
    FollowModalComponent,
    CalendarioModalComponent,
    NavBuscaComponent,
    NavNotificacoesComponent,
    AceitarSeguidoresModalComponent
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
