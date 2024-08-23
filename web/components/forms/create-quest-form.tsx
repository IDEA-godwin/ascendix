"use client";

import React from "react";
import { useFormik } from "formik";
import { Input } from "../ui/input";
import { TypographyH4 } from "../personals/typography";
import { Button } from "../ui/button";
import { CloseIcon } from "../personals/modal";
import { CreateQuestSchema, CreateQuestType } from "./types/create-quest-form";

const _onSubmit = async (data: CreateQuestType) => {
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const CreateQuestForm = () => {
  const formik = useFormik({
    initialValues: CreateQuestSchema.getDefault(),
    validationSchema: CreateQuestSchema,
    onSubmit: (values) => {
      _onSubmit(values);
      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TypographyH4>Create a Quest</TypographyH4>
      <div className="mt-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-5">
          <Input
            placeholder="Title"
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
          />
          <Input
            placeholder="Description"
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
          />
        </div>

        <Input
          placeholder="Topic"
          type="text"
          name="topic"
          value={formik.values.topic}
          onChange={formik.handleChange}
          error={formik.errors.topic}
        />
        <Input
          placeholder="Admin"
          type="text"
          name="quest_admin"
          value={formik.values.quest_admin}
          onChange={formik.handleChange}
          className="col-span-2"
          error={formik.errors.quest_admin}
        />

        <Input
          placeholder="Funds to disburse"
          type="number"
          name="funds_to_disburse"
          value={formik.values.funds_to_disburse}
          onChange={formik.handleChange}
          error={formik.errors.funds_to_disburse}
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            placeholder="Number of winners"
            type="text"
            name="num_of_winners"
            value={formik.values.num_of_winners}
            onChange={formik.handleChange}
            error={formik.errors.num_of_winners}
          />

          <Input
            placeholder="Reward"
            type="text"
            name="reward_spec"
            value={formik.values.reward_spec}
            onChange={formik.handleChange}
            error={formik.errors.reward_spec}
          />
        </div>

        <CloseIcon>
          <Button
            type="submit"
            variant={"secondary"}
            size={"lg"}
            className="w-full"
          >
            Submit
          </Button>
        </CloseIcon>
      </div>
    </form>
  );
};