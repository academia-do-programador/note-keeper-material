import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CategoriasModule } from '../categorias/categorias.module';

@NgModule({
  declarations: [ListarNotasComponent, InserirNotaComponent],
  imports: [
    NotasRoutingModule,
    SharedModule,
    CategoriasModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [NotasService],
})
export class NotasModule {}
