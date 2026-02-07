// Defining the shape of a Task object
export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

// Defining the possible values for the filter
export enum FilterType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}