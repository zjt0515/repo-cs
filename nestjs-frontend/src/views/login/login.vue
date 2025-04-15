<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <form class="col-4 shadow rounded p-4 border">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <div class="d-felx flex-column align-items-center px-4">
        <button type="submit" class="btn btn-primary w-100 ">登陆</button>
        <button type="submit" class="btn w-100">注册 </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>