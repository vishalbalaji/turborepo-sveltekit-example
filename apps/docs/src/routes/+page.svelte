<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { Button } from 'flowbite-svelte';
  import { page } from '$app/stores';
</script>

<div class="w-full h-full grid place-items-center">
  <div class="flex flex-col justify-center gap-5">
    {#if $page.data.session?.user}
      <div class="flex gap-5 items-center">
        {#if $page.data.session.user.image}
          <span class="h-20 aspect-square rounded-full overflow-hidden"
            ><img src={$page.data.session.user.image} alt="user-avatar" /></span
          >
        {/if}
        <span class="signedInText">
          <small>Signed in as</small><br />
          <strong>{$page.data.session.user.email || $page.data.session.user.name}</strong>
        </span>
      </div>
      <Button color="red" on:click={() => signOut()} class="button">Sign out</Button>
    {:else}
      <span class="notSignedInText">You are not signed in</span>
      <Button on:click={() => signIn()}>Sign In</Button>
    {/if}
  </div>
</div>
