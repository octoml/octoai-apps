"use client";

import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";

interface PromptProps {
  /** Label that displays on top of form */
  formLabel?: string;
  /** Text inside of form button */
  btnText?: string;
  /** Initial prompt, used as a placeholder */
  initialPrompt: string;
  /** User defined prompt */
  inputValue: string;
  /** Set user defined prompt */
  setInputValue: Dispatch<SetStateAction<string>>;
  /** Function that runs on form submit */
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> | void;
}

const Prompt: FC<PromptProps> = ({
  formLabel = "Enter prompt",
  btnText = "Generate",
  initialPrompt,
  inputValue,
  setInputValue,
  handleSubmit,
}) => {
  return (
    <form id="prompt" onSubmit={handleSubmit}>
      <label>
        <p>{formLabel}</p>
        <input
          id="input-prompt"
          type="text"
          placeholder={initialPrompt}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button id="generate-btn">{btnText}</button>
    </form>
  );
};

export default Prompt;
