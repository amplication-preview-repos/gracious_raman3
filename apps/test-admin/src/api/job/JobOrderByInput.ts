import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  created_at?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
