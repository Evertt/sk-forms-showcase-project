import { Tooltip as TooltipPrimitive } from "radix-svelte";
import { default as Content } from "./TooltipContent.svelte";

const { Root, Provider, Trigger } = TooltipPrimitive;

export const Tooltip = Object.assign(Root, { Provider, Content, Trigger })
