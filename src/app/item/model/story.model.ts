import {Priority} from './Priority.enum';

export interface Story {
  title: string;
  description: string;
  priority: Priority;
  deadLine: Date;
}
