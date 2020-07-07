export interface RootObject {
  question_1: Question1;
  question_2: Question1;
  question_3: Question1;
  question_4: Question1;
  question_5: Question1;
}

export interface Question1 {
  question: string;
  answers: string[];
  correct_answers: string[];
}
