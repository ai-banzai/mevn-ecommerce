<template>
  <div class="products">
    <h1>Products</h1>
    <div v-if="products.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewProduct' }" class="">Add Product</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100">Price</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="product in products">
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditProduct', params: { id: product._id } }">Edit</router-link> |
            <a href="#" @click="deleteProduct(product._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no products.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewProduct' }" class="add_product_link">Add Product</router-link>
    </div>
  </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
  name: 'products',
  data () {
    return {
      products: [],
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      const response = await ProductsService.fetchProducts()
      this.products = response.data.products
    },
    async deleteProduct (id) {
      await ProductsService.deleteProduct(id)
      const response = await ProductsService.fetchProducts()
      this.products = response.data.products
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_product_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>