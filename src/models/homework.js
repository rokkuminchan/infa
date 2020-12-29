const { default: Base } = require("./common/base");

export default class Homework extends Base {
  id;
  position;
  heading; // string
  description; //string
  questionElements; // QuestionElement:[]
  questions; //Question:[]
  questionGroups; // QuestionGroup:[]
  answers; //Answer[]
}
