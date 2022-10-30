import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SliderComponent } from './Home/slider/slider.component';
import { SobreComponent } from './Sobre/sobre.component';
import { ContatoComponent } from './Contato/contato.component';
import { CardapioComponent } from './Cardapio/cardapio.component';
import { PedidosComponent } from './Form/pedidos/pedidos.component';

const routes: Routes = [
  { path: 'Slider', component: SliderComponent },
  { path: 'Sobre', component: SobreComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'Cardapio', component: CardapioComponent },
  { path: 'Pedidos', component: PedidosComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
