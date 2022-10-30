import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { SliderComponent } from './Home/slider/slider.component';
import { PedidosComponent } from './Form/pedidos/pedidos.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Home/footer/footer.component';
import { SobreComponent } from './Sobre/sobre.component';
import { CardapioComponent } from './Cardapio/cardapio.component';
import { ContatoComponent } from './Contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    PedidosComponent,
    FooterComponent,
    SobreComponent,
    CardapioComponent,
    ContatoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
