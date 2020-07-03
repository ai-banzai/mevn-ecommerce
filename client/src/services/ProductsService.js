import Api from '@/services/Api';

export default {
  fetchProducts() {
    return Api().get('products');
  },
  addProduct(params) {
    return Api().post('products', params);
  },
  updateProduct (params) {
    return Api().put('products/' + params.id, params)
  },
  getProduct (params) {
    return Api().get('product/' + params.id)
  },
  deleteProduct (id) {
    return Api().delete('products/' + id)
  },
};
