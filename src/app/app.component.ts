import { QuestionsService } from './question-card/questions.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionsService]
})
export class AppComponent {
  title = 'QUESTIONARY';
}
