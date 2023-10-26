import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';
import { listarCategoriasResolver } from '../categorias/services/listar-categorias.resolver';

const listarNotasResolver = () => {
  return inject(NotasService).selecionarTodos();
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarNotasComponent,
    resolve: { notas: listarNotasResolver },
  },
  {
    path: 'inserir',
    component: InserirNotaComponent,
    resolve: { categorias: listarCategoriasResolver },
  },
  // {
  //   path: 'editar/:id',
  //   component: EditarCategoriaComponent,
  //   resolve: { categoria: formsCategoriaResolver },
  // },
  // {
  //   path: 'excluir/:id',
  //   component: ExcluirCategoriaComponent,
  //   resolve: { categoria: formsCategoriaResolver },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasRoutingModule {}
