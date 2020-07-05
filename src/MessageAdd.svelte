<script>
  import { center } from "./notifications";

  let value = null;

  const addMessage = () => {
    if (!value) return;

    center.add(value);
    value = null;
  };
</script>

<!-- AddMessage.svelte -->
<h2 class="text-2xl font-medium">Add new message</h2>
<form class="mt-3" on:submit|preventDefault={addMessage}>
  <input
    type="text"
    class="w-1/3 p-2"
    bind:value
    placeholder="Enter your message" />
  <button
    class="px-4 py-2 text-gray-200 bg-gray-700 text-xs rounded uppercase"
    type="submit">
    new message
  </button>
</form>
