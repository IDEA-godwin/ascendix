import * as Yup from "yup";

export const CreateQuestSchema = Yup.object().shape({
  title: Yup.string().required("title is required").default(""),
  description: Yup.string().required("description is required").default(""),
  topic: Yup.string().required("topic is required").default(""),
  funds_to_disburse: Yup.string()
    .required("funds to disburse is required")
    .default(""),
  num_of_winners: Yup.string()
    .required("number of winners is required")
    .default(""),
  reward_spec: Yup.string().required("reward is required").default(""),
  quest_admin: Yup.string().required("quest admin is required").default(""),
});

export type CreateQuestType = Yup.InferType<typeof CreateQuestSchema>;