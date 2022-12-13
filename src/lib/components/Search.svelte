<script lang="typescript">
  import Search from '$lib/components/icons/Search.svelte';
</script>

<div class="relative flex w-full items-basline">
  <div class="mr-2 text-pastelPurple"><Search /></div>
  <input
    type="text"
    name="search"
    placeholder="search by keyword"
    class="w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent front-sansSerif text-black text-xl outline-none focus:border-b-lavenderIndigo focus:border-solid"
  />
  <button class="font-sansSerif text-xl font-black text-pastelPurple">Search</button>
  <div />
</div>
