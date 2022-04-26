<template>
  <div class="modal">
    <div class="modal__center">
      hello word !!!
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.modal {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__center {
    width: 50%;
    min-width: 500px;
    height: 40%;
    min-height: 400px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
