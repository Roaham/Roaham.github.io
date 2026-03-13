<script>
  import "../app.css";

  
  // Recibimos 'children' (las páginas) como una propiedad
  let { children } = $props();
</script>

<div class="main-content">
  <main class="content">
    {#if children}
      {@render children()}
    {/if}
  </main>
</div>