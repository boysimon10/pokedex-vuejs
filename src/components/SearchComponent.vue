<template>
    <div class="relative">
                    <input type="text" placeholder="Search Pokemon..." class="bg-[#f6f5fa] rounded-full px-6 py-2 pl-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

    </div>
</template>

<script> 
    export default{
        name: 'SearchComponent'
    }
</script>