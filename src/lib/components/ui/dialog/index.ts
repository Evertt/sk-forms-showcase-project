import { Dialog as Primitive } from "radix-svelte";

import { default as Content } from "./DialogContent.svelte";
import { default as Description } from "./DialogDescription.svelte";
import { default as Footer } from "./DialogFooter.svelte";
import { default as Header } from "./DialogHeader.svelte";
import { default as Overlay } from "./DialogOverlay.svelte";
import { default as Portal } from "./DialogPortal.svelte";
import { default as Title } from "./DialogTitle.svelte";

const { Root, Trigger } = Primitive;

export const Dialog = Object.assign(Root, {
  Content, Description, Footer, Header, Overlay, Portal, Title, Trigger
});
