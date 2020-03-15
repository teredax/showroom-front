<template>
  <header class="masthead" id="page-top">
    <div class="container">
      <div class="intro-text">
        <HeaderSearchbar></HeaderSearchbar>
        <div class="intro-lead-in"></div>
        <div class="intro-heading text-uppercase">
          <HeaderData></HeaderData>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

export default {
     name: 'Header',
  props: {
    msg: String
  },
  components:{
    HeaderSearchbar: () => import('@/components/Header/SearchBar'),
    HeaderData: () => import('@/components/Header/Numbers'),
  }
}
</script>

<style>
header.masthead {
    text-align: center;
    color: white;
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size:cover;
  }
  
  header.masthead .intro-text {
    padding-top: 150px;
    padding-bottom: 10px;
;  }
  
  header.masthead .intro-text .intro-lead-in {
    font-size: 22px;
    font-style: italic;
    line-height: 22px;
    margin-bottom: 25px;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  
  header.masthead .intro-text .intro-heading {
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 0px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  
  @media (min-width: 768px) {
    header.masthead .intro-text {
      padding-top: 150px;
      padding-bottom: 10px;
    }
    header.masthead .intro-text .intro-lead-in {
      font-size: 40px;
      font-style: italic;
      line-height: 40px;
      margin-bottom: 25px;
      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
    header.masthead .intro-text .intro-heading {
      font-size: 75px;
      font-weight: 700;
      line-height: 75px;
      margin-bottom: 0px;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
  }
  
</style>