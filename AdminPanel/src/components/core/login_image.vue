<template>

<figure>
  <figcaption><code>img</code>, auto size</figcaption>
  <div>
  <img 
    class="building-image"
    src="" >
  </div>
</figure>

 
</template>
<style>
/* 
  Media queries to control footer sizing in smartphones
*/
  @media (max-width: 600px) {
    .building-image {
      width: 55%;
      height: 50vh;
      margin-left: -150%
    }
  }
  /* 
    Media queries to control footer sizing in computers
  */
  @media (min-width: 600px) {
    
    .building-image {
      margin-left: 45%;
      height: 95vh;
      width: 55%
    }
  }

  .gradient-image {
    width: 100%;
    color: rgb(90, 79, 239)
  }
  .background-html {
    width: 100%
  }
</style>
