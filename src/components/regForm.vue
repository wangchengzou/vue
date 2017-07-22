<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line" v-for="formLine in formData">
        <span class="g-form-label">{{ formLine }}：</span>
        <div class="g-form-input">
          <input type="text" v-model="formLine.model" >
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onReg">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'isShow': 'boolean'
    },
    data(){
        return{
          formData:['用户名','密码','生日']
        }
    },
    methods: {
      onReg () {
        console.log(formLine.model)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
