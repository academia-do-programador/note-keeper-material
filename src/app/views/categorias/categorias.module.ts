import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasService } from './services/categorias.service';

@NgModule({
  declarations: [ListarCategoriasComponent],
  imports: [CommonModule, CategoriasRoutingModule, SharedModule],
  providers: [CategoriasService],
})
export class CategoriasModule {}
