<template>
    <div class="login-form">
      <div class="g-form">
        <div class="g-form-line">
          <span class="g-form-label">用户名：</span>
          <div class="g-form-input">
            <input type="text" v-model="usernameModel" placeholder="请输入用户名">
          </div>
          <span class="g-form-error">{{userErrors.errorText}}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">密码：</span>
          <div class="g-form-input">
            <input type="password" placeholder="请输入密码" v-model="passwordModel">
          </div>
          <span class="g-form-error">{{passwordErrors.errorText}}</span>
        </div>
        <div class="g-form-line">
          <div class="g-form-btn">
            <a @click="onLogin" class="button">登录</a>
          </div>
        </div>
        <p>{{errorText}}</p>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                usernameModel:'',
              passwordModel:'',
              errorText:''
            }
        },
      computed:{
            userErrors(){
                let errorText,status
                if(!/@/g.test(this.usernameModel)){
                    status=false
                  errorText="不包含@"
                }else{
                    status=true
                  errorText=""
                }
                return{
                    status,errorText
                }
            },
            passwordErrors(){
                let errorText,status
              if(!/^\w{1,6}$/g.test(this.passwordModel)){
                    status=false
                errorText="密码必须包含6位有效数字"
              }else{
                  status=true
                errorText=""
              }
              return{
                  status,errorText
              }
            }
      },
      methods:{
            onLogin(){
                if(!this.userErrors.status||!this.passwordErrors.status){
                    this.errorText="部分选项未通过"
                }else{
                    this.errorText=""
                  this.$http
                    .get('api/login')
                    .then((res)=>{
                        this.$emit('has-log',res.data)
                      console.log(res.data)
                    },(error)=>{
                        console.log(error)
                    })
                }
            }
      }
    }
</script>
<style>

</style>
