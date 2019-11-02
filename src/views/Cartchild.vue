<template>
    <div class="add">
        <slot>
            <div class="list">
                <img src="../assets/cart.png" alt="">
                <p>朕只是还没有买而已~</p>
                <button class="btn" @click="btn()">去逛逛</button>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name:'add',
}
</script>

<style scoped>
    .list{
    background: #f5f4f9;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }
  .list>img{
    width: 120px;
    height: 97px;
  }
  .btn{
    display: block;
    width:76px;
    height: 30px;
    color:#ff5a00;
    border:2px solid #ff5a00;
    border-radius:30px;
    background: transparent;
  }
  .add{
      margin-top:45px;
  }
</style>