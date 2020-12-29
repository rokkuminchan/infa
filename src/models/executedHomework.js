const { default: Base } = require("./common/base");

export default class ExecutedHomework extends Base {
  homeworkId;
  participantId;
  submittedDate;
  status;
  evaluation;
  executedAnswers; // Answer:[]
}
