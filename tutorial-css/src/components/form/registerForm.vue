<template>
  <form class="register">
    <span>
      <h2>用户注册</h2>
    </span>
    <div class="form-item phone">
      <input class="txt" maxlength="11" placeholder="请输入11位手机号" />
    </div>

    <div class="form-item vertify">
      <input class="txt" placeholder="请输入验证码" />
      <button>发送验证码</button>
    </div>

    <div class="form-item password">
      <input class="txt" type="password" placeholder="请输入密码" />
      <input class="txt" type="password" placeholder="确认密码" />
    </div>

    <div class="form-item">
      <select name="" id="">
        <option>爱好1</option>
        <option>爱好2</option>
        <option>爱好3</option>
        <option>爱好4</option>
        <option>爱好5</option>
      </select>
    </div>

    <div class="form-item sex">
      <span>性别</span>
      <div class="choose-sex">
        <input type="radio" name="sex" id="male" checked />
        <label for="male">男</label>
        <input type="radio" id="female" name="sex" />
        <label for="female">女</label>
      </div>
    </div>
    <!-- 文本域 -->
    <div class="form-item">
      <textarea name="" id="" placeholder="请输入个人简介"></textarea>
    </div>
    <!-- 同意 -->
    <div class="form-item">
      <label>
        <input type="checkbox" />
        <span>同意xxx</span>
      </label>
    </div>

    <!-- 按钮 -->
    <div class="form-item">
      <button>立即注册</button>
      <button type="reset">重置表单</button>
    </div>
  </form>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.register {
  background-color: #eee;
  border-radius: 8px;
  width: 400px;
  margin: 30px auto;
  padding: 30px;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .form-item {
    margin-bottom: 20px;
    .txt {
      outline: none;
      border: 1px solid #ccc;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding: 0 8px;
    }
  }

  button {
    background-color: #046814;
    border: 1px solid #555;
    outline: none;
    &:hover {
      background-color: #0aa224;
    }
  }
}
</style>
