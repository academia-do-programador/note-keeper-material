import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasService } from './services/categorias.service';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarCategoriasComponent, InserirCategoriaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [CategoriasService],
})
export class CategoriasModule {}
