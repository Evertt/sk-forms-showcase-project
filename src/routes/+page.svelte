<script lang="ts">
  import { BellRing, Check } from "lucide-svelte";
  import { Button } from "$ui/button";
  import { Card } from "$ui/card";
  import { Switch } from "$ui/switch";
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago"
    },
    {
      title: "You have a new message!",
      description: "1 hour ago"
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago"
    }
  ];
</script>

<div class="flex justify-center items-center h-40">
  <h2 class="text-4xl font-bold tracking-tight">Choose any tab to see an example</h2>
</div>