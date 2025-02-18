<template>
  <div class="min-h-screen bg-gradient-to-r from-green-800 to-emerald-400 text-white flex flex-col items-center">
    <!-- Шапка с эффектом стекла -->
    <header class="w-full fixed top-0 left-0 bg-white/20 backdrop-blur-md py-4 shadow-md">
      <h1 class="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-200">
        Halyk Weather
      </h1>
    </header>
  
      <!-- Контент страницы -->
      <main class="flex-1 flex items-center justify-center w-full">
        <slot />
      </main>
  
      <!-- Footer -->
      <footer class="w-full bg-green-950 text-white text-center py-4 mt-6">
        <p>&copy; 2025 Halyk Weather. All rights reserved.</p>
        <p class="text-sm">
          Developed by <a href="https://github.com/danialissakov" class="underline">Danial Issak</a>
        </p>
      </footer>
    </div>
  </template>