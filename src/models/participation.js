const { default: Base } = require("./common/base");

// Absence or presence
export default class Paticipation extends Base {
  executedCourseId;
  participantId;
  scheduledDate;
  executedDate;
  status;
  reason;
  startTime;
  endTime;
}
