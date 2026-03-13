<script>
  import "../app.css";
  
  // En Svelte 5, los componentes usan $props()
  let { children } = $props();
</script>

<div class="main-content">
  <main class="content">
    {#if children}
      {@render children()}
    {/if}
  </main>
</div>