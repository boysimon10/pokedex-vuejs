<template>
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="text-center">
                <h1 class="text-6xl font-extrabold text-red-600">404</h1>
                <p class="mt-4 text-xl text-gray-700">Oups! La page que vous recherchez n'existe pas.</p>
                <p class="mt-2 text-lg text-gray-500">Retournez à la <router-link to="/" class="text-blue-500 hover:underline">page d'accueil</router-link>.</p>
            </div>
        </div>
</template>

<script>

export default {
    name: 'NotFoundView',
}
</script>
