<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm currently an undergraduate student at International Institute of Information Technology studying Electronics and Communication.
      <br />After joining university, I've been working on a few projects, both personal and professional, and have been involved in a few activities as well.
      <br />I have experience in both team projects as well as solo projects, and I'm always looking for new challenges.
      <br />Eventually I decided indulge in game development and to put all of them in one place, so here it is.
      <br />
      <br />Right now I'm making my way through college, developing games both solo and with a group of friends.  
      <br />
      <br />Besides development, I'm passionate about video games (obviously), and I love swimming, martial arts and non-fiction.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Aakash Reddy.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/" alt="Photo of Aakash" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Education</h2>

      <h3>The International Institute of Information Technology Hyderabad</h3>
      <h4>2020-2024(expected)</h4>

      <div>Currently pursueing a degree in Electronics and Communications Engineering</div>

      <h3>FIITJEE - Intermediate Schooling</h3>
      <h4>2018-2019</h4>

      <div>Studied Math, Physics, Chemistry as core subjects.</div>


  

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="C/C++" :rate="4" />
        <SkillRate name="Python" :rate="2" />
        <SkillRate name="Javascript" :rate="3" />
        <SkillRate name="Three js" :rate="3" />
        <SkillRate name="OpenGL" :rate="3" />
        <SkillRate name="MatLab" :rate="4" />
        <SkillRate name="Unreal Engine" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Soft</h3>
        <SkillRate name="Time Management" />
        <SkillRate name="Teamwork"  />
        <SkillRate name="Improvisation"  />
        <SkillRate name="Communication"  />
      </div>
      <div style="clear:both" />

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Born and raised in the USA till I was 12</div>
        <SkillRate name="" :rate="5" />
      
      <h3>French</h3>
      <div>Learnt during my intermediate education</div>
        <SkillRate name="" :rate="2" />
      
      <h3>Hindi</h3>
      <div>Frequently spoken in my city</div>
        <SkillRate name="" :rate="3" />
          
      <h3>Telugu</h3>
      <div>My mother tongue, spoken from childhood</div>
        <SkillRate name="" :rate="5" />
        
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>