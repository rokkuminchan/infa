const { default: Base } = require("./common/base");

export default class ExecutedLesson extends Base {
  lessonId;
  status;
  scheduledDate;
  executedDate;
  startExecutingTime;
  finishExecutingTime;
  completedDate;
  reason;
}
