import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export declare class LambdaResponse {
  readonly statusCode?: number | null;
  readonly body?: string | null;
  constructor(init: ModelInit<LambdaResponse>);
}

type FeedbackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Feedback {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Feedback, FeedbackMetaData>);
  static copyOf(source: Feedback, mutator: (draft: MutableModel<Feedback, FeedbackMetaData>) => MutableModel<Feedback, FeedbackMetaData> | void): Feedback;
}