import { default as Root } from "./Avatar.svelte";
import { default as Fallback } from "./AvatarFallback.svelte";
import { default as Image } from "./AvatarImage.svelte";

export const Avatar = Object.assign(Root, { Fallback, Image });
