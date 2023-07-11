import { default as Root } from "./Card.svelte";
import { default as Content } from "./CardContent.svelte";
import { default as Description } from "./CardDescription.svelte";
import { default as Footer } from "./CardFooter.svelte";
import { default as Header } from "./CardHeader.svelte";
import { default as Title } from "./CardTitle.svelte";

export const Card = Object.assign(Root, {
  Content, Description, Footer, Header, Title
});
