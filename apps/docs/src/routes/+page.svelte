<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { Button } from 'flowbite-svelte';
  import { page } from '$app/stores';

  page.subscribe((value) => console.log(value));
</script>

<div class="w-full h-full grid place-items-center">
  {#if $page.data.session?.user}
    {#if $page.data.session.user.image}
      <span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user.email || $page.data.session.user.name}</strong>
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
		<div class="flex flex-col">
			<span class="notSignedInText">You are not signed in</span>
			<Button on:click={() => signIn()}>Sign In</Button>
		</div>
  {/if}
</div>
