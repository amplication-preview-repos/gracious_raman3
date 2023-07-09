import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "name";

export const JobTitle = (record: TJob): string => {
  return record.name || String(record.id);
};
