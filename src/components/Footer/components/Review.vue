<template>
  <div class="review">
    <div class="rating">4.9</div>
    <div class="rating-decription-stars">
      <div class="rating-decription">Great service and prices!</div>
      <div class="rating-stars">
        <img src="@/assets/img/icon/star.svg" alt="star" />
        <img src="@/assets/img/icon/star.svg" alt="star" />
        <img src="@/assets/img/icon/star.svg" alt="star" />
        <img src="@/assets/img/icon/star.svg" alt="star" />
        <img src="@/assets/img/icon/star.svg" alt="star" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review"
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.review {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 188px;
  margin-left: 30px;
  .rating {
    font-size: 30px;
    line-height: 48px;
    color: $white;
    font-family: 'Exo-regular';
    }
  .rating-decription-stars {
    display: flex;
    height: 24px;
    flex-direction: column;
    justify-content: center;
    margin-right: 11px;
    .rating-decription {
      font-size: 12px;
      line-height: 20px;
      color: #c4c4c4;
      font-family: OpenSans-light;
    }
    .rating-stars {
      width: 62px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>