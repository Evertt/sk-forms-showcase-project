<script lang="ts">
	import { Button } from "$components/ui/button";
	import { Card } from "$ui";
	import { Label } from "$components/ui/label";
	import { Switch } from "$components/ui/switch";
</script>

<Card>
	<Card.Header>
		<Card.Title>Cookie Settings</Card.Title>
		<Card.Description>Manage your cookie settings here.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<div class="flex items-center justify-between space-x-2">
			<Label for="necessary" class="flex flex-col space-y-1">
				<span>Strictly Necessary</span>
				<span class="font-normal leading-snug text-muted-foreground">
					These cookies are essential in order to use the website and
					use its features.
				</span>
			</Label>
			<Switch id="necessary" defaultChecked />
		</div>
		<div class="flex items-center justify-between space-x-2">
			<Label for="functional" class="flex flex-col space-y-1">
				<span>Functional Cookies</span>
				<span class="font-normal leading-snug text-muted-foreground">
					These cookies allow the website to provide personalized
					functionality.
				</span>
			</Label>
			<Switch id="functional" />
		</div>
		<div class="flex items-center justify-between space-x-2">
			<Label for="performance" class="flex flex-col space-y-1">
				<span>Performance Cookies</span>
				<span class="font-normal leading-snug text-muted-foreground">
					These cookies help to improve the performance of the
					website.
				</span>
			</Label>
			<Switch id="performance" />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button variant="outline" class="w-full">Save preferences</Button>
	</Card.Footer>
</Card>
