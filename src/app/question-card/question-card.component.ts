import { QuestionsService } from './questions.service';
import { Question1 } from './questions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  questions: Question1[] = [];
  currentQuestion: Question1 = null;
  selectedAnswers: string[] = [];
  questionNumber: number = 0;
  selectedAnswerString: string;
  resultCounter: number;

  constructor(private _questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.resultCounter = 0;
    this._questionsService.getQuestions().subscribe((questions) => {
      this.questions = Object.keys(questions[0]).map((key) => {
        return questions[0][key];
      });
      this.currentQuestion = this.questions[0];
    });
  }

  selectedAnswer(answer: string) {
    this.selectedAnswerString = answer;
  }

  submit() {
    this.selectedAnswers.push(this.selectedAnswerString);
    if (this.questionNumber + 1 >= this.questions.length) {
      for (let i = 0; i < this.questions.length; i++) {
        this.resultCounter =
          this.resultCounter +
          Number(
            this.questions[i].correct_answers[0] == this.selectedAnswers[i]
          );
      }
    } else {
      this.questionNumber++;
      this.currentQuestion = this.questions[this.questionNumber];
    }
  }
}
