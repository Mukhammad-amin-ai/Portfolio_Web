<template >
    <div class="w-[100%] h-[80px] flex justify-center items-center">
        <div
            class="2xl:w-[93.45%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] h-[100%] flex justify-between items-center">
            <div
                class="w-[103px] h-[auto] text-black text-[32px] font-medium font-['Roboto'] leading-[32.86px] cursor-pointer">
                LOGO</div>
            <div class="2xl:w-[700px] xl:w-[700px] lg:w-[700px] h-[100%] lg:flex  md:hidden  justify-between items-center">
                <div
                    class="w-[119.63px] h-[auto]  text-black text-2xl font-medium font-['Roboto'] leading-normal cursor-pointer hover">
                    About me
                </div>
                <div
                    class="w-[109.10px] h-[auto] text-black text-2xl font-medium font-['Roboto'] leading-normal cursor-pointer hover">
                    Portfolio</div>
                <div
                    class="w-[114.84px] h-[auto] text-center text-black text-2xl font-medium font-['Roboto'] leading-normal cursor-pointer hover">
                    Contacts</div>
                <NuxtLink to="#hearMe">

                    <button class="w-24 h-10 relative rounded-[10px] shadow border border-black">
                        <div
                            class="cursor-pointer w-[93.79px] h-[auto] border-black flex items-center  justify-center text-black text-2xl font-medium font-['Roboto'] leading-normal">
                            Hire me
                        </div>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.hover {
    overflow: hidden;
    position: relative;
}

.hover:hover {
    color: #00FF79;
    transition: all .3s ease;

}

.hover:hover::after {
    transition: all 1s ease;
    width: 100%;
}


.hover::after {
    content: "";
    width: 0%;
    height: 1px;
    border: 1px solid #00FF79;
    position: absolute;
    bottom: 0;
    left: -5px;
}
</style>