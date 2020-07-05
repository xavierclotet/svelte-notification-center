<script>
  // Main stylesheet. Snowpack will inject it in the head tag
  import "./main.css";
  import Messages from "./Messages.svelte";
  import { onMount } from "svelte";
  import { center } from "./notifications";
  import MessageAdd from "./MessageAdd.svelte";
  let title = "Svelte app";
  onMount(() => {
    center.init(["Successful login attempt by @jack"]);
  });
</script>

<style>

</style>

<div class="container flex flex-col max-w-4xl min-h-screen mx-auto mt-2">
  <!-- top menu -->
  <header
    class="flex items-center justify-between px-5 py-3 text-gray-100 bg-gray-800">
    <h1 class="text-2xl">{title}</h1>
    <nav class="relative">
      <Messages count="4" />
    </nav>
  </header>

  <div class="flex-grow px-5 py-3 bg-gray-200">
    <MessageAdd />
  </div>

</div>
