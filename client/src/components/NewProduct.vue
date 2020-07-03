<template>
  <div class="new-product">
    <h1>Add Product</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <textarea rows="1" cols="15" placeholder="PRICE" v-model="price"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addProduct">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import ProductsService from '../services/ProductsService.js'; // eslint-disable-line

export default {
  name: 'NewProduct',
  data() {
    return {
      title: '',
      description: '',
      price: '',
    };
  },
  methods: {
    async addProduct() {
      await ProductsService.addProduct({
        title: this.title,
        description: this.description,
        price: this.price,
      });
      this.$router.push({ name: 'Products' });
    },
  },
};
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
