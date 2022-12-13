<script lang="typescript">
  import Search from '$lib/components/Search.svelte';
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<!-- list of invoices -->
<div>
  <Search />

  <!-- new invoice button -->
  <div>
    <button
      class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
      >+ Invoice</button
    >
  </div>
  <div>
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amoung</h3>
    <!-- view icon -->
    <div />
    <!-- three dots -->
    <div />
  </div>
</div>

<!-- invoices -->
<div>
  <div>Tag</div>
  <div>8/1/2023</div>
  <div>12345</div>
  <div>Compressed.fm</div>
  <div>504.00$</div>
</div>

<div>Total amount: 4.500$</div>
