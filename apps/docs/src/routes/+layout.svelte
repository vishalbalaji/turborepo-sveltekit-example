<script lang="ts">
  import '../app.css';
  // eslint-disable-next-line object-curly-newline
  import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer } from 'flowbite-svelte';
</script>

<div class="h-screen w-screen flex flex-col">
  <Navbar let:hidden let:toggle>
    <NavBrand href="/" class="mr-auto">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
    </NavBrand>
    <DarkMode />
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} class="lg:items-center w-full">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>

  <div class="container mx-auto flex-grow">
    <slot />
  </div>

  <Footer />
</div>
