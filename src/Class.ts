import classNames from "classnames";

export const section = classNames(["mb-8"]);

export const title = {
  main: classNames(["text-3xl", "font-bold", "text-blue-800", "my-5"]),
  sub: classNames(["text-2xl", "font-bold", "my-2"]),
};

export const input = {
  text: classNames([
    "mr-3",
    "py-2",
    "pl-3",
    "border-solid",
    "border",
    "border-blue-700",
    "rounded",
  ]),
};

export const btn = {
  blue: classNames([
    "mr-3",
    "py-2",
    "px-3",
    "border-solid",
    "border",
    "border-blue-700",
    "rounded",
  ]),
};
