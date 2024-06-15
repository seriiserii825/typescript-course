export default {};

type TQuestionBase = {
  title: string;
};

type TQuestionSingleChoice = TQuestionBase & {
  option?: string;
  options?: never;
};

type TQuestionMultipleChoice = TQuestionBase & {
  option?: never;
  options?: string[];
};

type TQuestion = TQuestionSingleChoice | TQuestionMultipleChoice;

const question: TQuestion[] = [
  {
    title: "What is the capital of France?",
    option: "Paris",
  },
];

console.log(question, "question");

const question2: TQuestion[] = [
  {
    title: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
  },
];
console.log(question2, "question2");
