<template>
    <div class="w-full max-w-[1440px] h-[100vh] flex flex-col">
      <LayoutHeader />
      <main class="flex flex-col w-full flex-1">
        <slot/>
      </main>
    </div>
  </template>