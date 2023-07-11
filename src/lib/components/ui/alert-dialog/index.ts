import { AlertDialog as AlertDialogPrimitive } from "radix-svelte";

import { default as Action } from "./AlertDialogAction.svelte";
import { default as Cancel } from "./AlertDialogCancel.svelte";
import { default as Content } from "./AlertDialogContent.svelte";
import { default as Description } from "./AlertDialogDescription.svelte";
import { default as Footer } from "./AlertDialogFooter.svelte";
import { default as Header } from "./AlertDialogHeader.svelte";
import { default as Title } from "./AlertDialogTitle.svelte";

const { Root, Trigger } = AlertDialogPrimitive;

export const AlertDialog = Object.assign(Root, {
  Action, Cancel, Content, Description, Footer, Header, Title, Trigger
});
