import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { FeedItemComponent } from './pages/dashboard/feed/feed-item/feed-item.component';
import { PlayerComponent } from './components/player/player.component';
import { NavNotificacoesComponent } from './components/navbar/nav-notificacoes/nav-notificacoes.component';
import { FeedModalComponent } from './pages/dashboard/feed/feed-modal/feed-modal.component';
import { FollowModalComponent } from './components/perfil-header/follow-modal/follow-modal.component';
import { CalendarioVideosComponent } from './pages/dashboard/calendario/calendario-videos/calendario-videos.component';
import { CalendarioModalComponent } from './pages/dashboard/calendario/calendario-modal/calendario-modal.component';
import { AceitarSeguidoresModalComponent } from './components/navbar/aceitar-seguidores-modal/aceitar-seguidores-modal.component';

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
    FeedModalComponent,
    FollowModalComponent,
    CalendarioVideosComponent,
    CalendarioModalComponent,
    AceitarSeguidoresModalComponent
  ],
  imports: [
    AppRouting,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    FollowModalComponent,
    CalendarioModalComponent,
    AceitarSeguidoresModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
