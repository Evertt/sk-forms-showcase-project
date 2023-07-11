<script lang="ts">
	import '../app.postcss';
	import { Button } from "$ui";
	import { PageHeader, ExamplesNav } from "$components";
</script>

<div class="container relative pb-10">
	<PageHeader>
		<PageHeader.Heading class="hidden md:block">
			Check out some examples
		</PageHeader.Heading>
		<PageHeader.Heading class="md:hidden">Examples</PageHeader.Heading>
		<PageHeader.Description>
			Dashboard, cards, authentication. Some examples built using the
			components. Use this as a guide to build your own.
		</PageHeader.Description>
		<section class="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
			<Button href="/docs" class="rounded-[6px]">Get Started</Button>
			<Button href="/components" variant="outline" class="rounded-[6px]"
				>Components</Button
			>
		</section>
	</PageHeader>
	<section>
		<ExamplesNav />
		<div
			class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl"
		>
			<slot />
		</div>
	</section>
</div>