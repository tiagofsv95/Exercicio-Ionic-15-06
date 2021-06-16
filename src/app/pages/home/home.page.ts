import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../service/alunos.service';
import { Router } from '@angular/router';
import { IAluno } from '../../interface/aluno.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public alunoList: IAluno[];

  constructor(
    public alunosService: AlunosService,
    public router: Router,
  ) { }

  async ngOnInit() {
    await this.alunosService.getAllAluno();
    this.alunoList = this.alunosService.allAlunos;
    console.log(this.alunoList);
  }

  async goToAlunoPage(id) {
    this.alunosService.getOneAluno(id);
    this.router.navigate(['alunos']);
  }

}
