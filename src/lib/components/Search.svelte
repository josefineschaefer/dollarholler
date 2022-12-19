<script lang="typescript">
  import Search from '$lib/components/icons/Search.svelte';
</script>

<div class="relative flex w-full items-basline">
  <div class="mr-2 text-pastelPurple"><Search /></div>
  <input
    type="text"
    name="search"
    placeholder="search by keyword"
    class="w-full lg:w-72 md:w-[14rem] border-b-2 border-dashed border-b-pastelPurple bg-transparent front-sansSerif text-black  text-base lg:text-xl outline-none focus:border-b-lavenderIndigo focus:border-solid"
  />
  <button class="font-sansSerif text-xl font-black text-pastelPurple">Search</button>
  <div />
</div>
