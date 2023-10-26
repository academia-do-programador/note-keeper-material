import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';

@NgModule({
  declarations: [
    ListarNotasComponent
  ],
  imports: [NotasRoutingModule, SharedModule],
  providers: [NotasService]
})
export class NotasModule {}
