<template>
  <div class="min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat" style="background-image: url('/bg-nature.jpg');">
    <!-- Шапка с эффектом стекла -->
    <header class="w-full fixed top-0 left-0 bg-white/30 backdrop-blur-md py-4 shadow-md">
      <h1 class="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
        Halyk Weather
      </h1>
    </header>

    <!-- Контент страницы -->
    <main class="flex-1 flex items-center justify-center w-full mt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full text-white text-center py-4 mt-6">
      <p>&copy; 2025 Halyk Weather. All rights reserved.</p>
      <p class="text-sm">
        Developed by <a href="https://github.com/danialissakov" class="underline">Danial Issak</a>
      </p>
    </footer>
  </div>
</template>