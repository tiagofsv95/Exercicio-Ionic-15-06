import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAluno } from '../interface/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  aluno: IAluno;
  allAlunos: IAluno[];

  constructor(
    public httpClient: HttpClient,
  ) { }

  async getAllAluno() {
    this.allAlunos = await this.httpClient.get<IAluno[]>('./assets/data.json').toPromise();
  }

  getOneAluno(id) {
    this.aluno = this.allAlunos.find(aluno => aluno.id === id);
  }
}
