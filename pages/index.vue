<template>
  <div>
    <div class="conatainer">
      <header class="home w-[100%] h-[100vh] bg-[#FCF7F7]">
        <Navbar />
        <div class="main-content w-[100%] h-[500px] mt-[70px] flex justify-center">
          <div class="w-[93.45%] h-[100%] flex justify-between items-end">
            <div class="w-[650px] h-[100%] ">
              <div class="w-[100%] h-[auto] text-black text-[80px] font-bold font-['Roboto Condensed']">
                Muhammadamin</div>
              <div class="w-[100%] h-[71px] mt-[40px]"><span
                  class="text-black text-6xl font-normal font-['Roboto Condensed'] "> {</span><span
                  class="text-cyan-400 text-6xl font-bold font-['Roboto Condensed'] ">Front-End}
                </span><span class="text-black text-6xl font-normal font-['Roboto Condensed'] ">Developer</span>
              </div>
              <div class="w-[100%] v-[100%] flex justify-between">
                <button class="w-[150px] h-[52.55px] mt-[40px] rounded-[10.20px]"
                  style="background: linear-gradient(106deg, rgba(255, 255, 255, 0.21) 40.3%, rgba(15, 45, 207, 0.12) 58.72%), linear-gradient(180deg, rgba(145, 17, 205, 0.35) 0%, rgba(0, 209, 255, 0.47) 100%)">
                  <div class="w-[150px] h-[100%] flex justify-center items-center  ">
                    <div class="w-[150px] h-[38px] text-neutral-800 text-2xl font-medium font-['Roboto'] leading-normal">
                      &lt Hire me />
                    </div>
                  </div>
                </button>
                <div class="w-[463.456px] h-[300.467px]">
                  <!-- <img class="w-[100%]"  src="../assets/images/Ale-icons.svg" alt="#"/> -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 [width] [height]">
                    <image href="../assets/images/Ale-icons.svg" width="100%" height="100%" />
                  </svg>
                </div>
              </div>


            </div>

            <div class="mac-box w-[650px] h-[100%] ">
              <div class="box">

              </div>


            </div>
          </div>

        </div>
      </header>
    </div>
  </div>
</template>

<script  setup>

</script>



<style scoped>
.conatainer {
  width: 100vw;
  max-width: 100%;
  height: auto;
}

.mac-box {
  background: radial-gradient(135.9% 70.91% at 89.64% 35.57%, rgba(0, 209, 255, 0.20) 0%, rgba(255, 0, 229, 0.20) 84%), linear-gradient(128deg, rgba(123, 239, 204, 0.00) 16.18%, rgba(123, 169, 239, 0.59) 58.38%);
  border-radius: 30.563px;

}

.box {
  width: 100%;
  height: 92px;
  border-radius: 30.563px 30.563px 0px 0px;
  border: 1px solid #000;
  background: rgba(217, 217, 217, 0.00);
}
</style>
