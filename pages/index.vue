<template>
  <div class="container">
        <b-container fluid>
            <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
            </b-row>
        </b-container>
    <div>
      <logo />

      <input-field 
        label="Text"
        help-text="Help text"/>

      <input-int 
        v-model="fs"
        :label="$t( 'index.hello' )"
        help-text="Help text"/>

      <input-measure 
        v-model="vas"
        label="VAS"
        help-text="Help text"
        :measure="measure"
        :system="1"/>

      <h1 class="title">
        TestNuxt
      </h1>
      <h2 class="subtitle">
        My shining Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link :to="switchLocalePath('en')">{{ $t( 'common.en' ) }}</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')">{{ $t( 'common.ru' ) }}</nuxt-link>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import InputField from '~/components/Input/InputField.vue'
import InputInt from '~/components/Input/InputInt.vue'
import InputMeasure from '~/components/Input/InputMeasure.vue'
import { MeasureSystem, MeasureValue } from '~/core/Measure'

export default {
  data() {
    return {
      fs: 213,
      vas: 123.1234,
      measure: MeasureValue.volume
    }
  },
  components: {
    Logo,
    InputField,
    InputInt,
    InputMeasure
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
