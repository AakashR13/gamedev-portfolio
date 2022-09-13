<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Aakash Reddy</strong>, an 3rd-year undergraduate student at International Institute of Information Technology Hyderabad.<br/>
       I spend my days glued to my laptop screen grinding video games, petting furries and reading books. I'm a sucker for Souls-like games and love a challenge above all else.
      </div>

      <div style="margin-top: 20px;">I've worked on a few <router-link to="/game-projects">games</router-link>(mostly as a personal interest), on other <router-link to="/other-projects">tech and management</router-link> related activities, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for internships</strong> related to game design and programming. You can reach me at <a href="mailto:aakash.re13@gmail.com">aakash.re13@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/" alt="Avatar of Aakash" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>