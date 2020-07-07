import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Привіт! Хочеш дізнатися наскільки ти киберспортивний? Прийди опитування!';

  constructor() { }

  ngOnInit(): void {
  }

}
