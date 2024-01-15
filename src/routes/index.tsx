import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { WelcomePage } from "~/pages/exports";

export default component$(() => {
  return (
    <WelcomePage />
  );
});

export const head: DocumentHead = {
  title: "Welcome to my Portfolio",
  meta: [
    {
      name: "description",
      content: "Portfolio site description",
    },
  ],
};
