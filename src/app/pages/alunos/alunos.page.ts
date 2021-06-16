import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../service/alunos.service';
import { IAluno } from '../../interface/aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  public aluno: IAluno = {
    id: null,
    nome: null,
    sobrenome: null,
    email: null,
    ra: null,
    idade: null,
  };

  constructor(
    public alunosService: AlunosService,
  ) { }

  ngOnInit() {
    if(this.alunosService.aluno && this.alunosService.aluno.id) {
      this.aluno = this.alunosService.aluno;
    }
  }

}
