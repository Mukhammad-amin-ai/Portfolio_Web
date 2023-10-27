<template >
    <div class="w-[100%] h-[100vh] mt-[100px] flex justify-center items-center">
        <div class="w-[90%] h-[90%] flex items-center flex-col">
            <div class="w-[303px] h-[98px] text-black text-[82.64px] font-semibold font-['Roboto'] leading-[84.86px]">Hire
                Me</div>
            <div class="w-[893px] h-[614px] bg-black rounded-[27.02px] border-2 border-emerald-500 mt-[31px]">
                <div class="w-[100%] h-[60px]  border-b-2 border-emerald-500">
                    <div class="w-[100px] h-[16px] mt-[30px] ml-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 [width] [height]">
                            <image href="../assets/svg/icons.svg" width="100%" height="100%" />
                        </svg>
                    </div>
                </div>
                <div class="w-[90%] h-[80%] ml-[5%] mt-[10px] ">
                    <form class="w-[100%] h-[100%]">
                        <div class="mb-4">
                            <label class="block text-[#fff] text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-[#fff] vtext-sm font-bold mb-2" for="lastname">
                                Last Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastname" type="text" placeholder="Enter your last name" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-[#fff] text-sm font-bold mb-2" for="telephone">
                                Telephone Number
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="telephone" type="text" placeholder="Enter your telephone number" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-[#fff] text-sm font-bold mb-2" for="textarea">
                                Comments
                            </label>
                            <textarea
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="textarea" placeholder="Enter your comments">
                            </textarea>
                        </div>
                        <button class="w-[161px] h-[49.89px] rounded-[10px] bg-emerald-500 bg-opacity-40">
                            <span class="text-center text-white text-[21.35px] font-medium font-['Roboto'] leading-snug">
                                Submit
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>