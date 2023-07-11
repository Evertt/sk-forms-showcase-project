import { Tabs as Primitive } from "radix-svelte";

import { default as Content } from "./TabsContent.svelte";
import { default as List } from "./TabsList.svelte";
import { default as Trigger } from "./TabsTrigger.svelte";

const { Root } = Primitive;

export const Tabs = Object.assign(Root, { Content, List, Trigger });
