import { default as Root } from "./PageHeader.svelte";
import { default as Description } from "./PageHeaderDescription.svelte";
import { default as Heading } from "./PageHeaderHeading.svelte";

export const PageHeader = Object.assign(Root, { Description, Heading });