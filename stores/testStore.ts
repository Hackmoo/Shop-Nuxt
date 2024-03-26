import { defineStore } from "pinia";
import api from "~/api";

export const useShopStore = defineStore("shopStore", {
  state: () => ({
    goods: [],
    goodsToShow: [],
    cart: []
  }),
  actions: {
    async getGoods() {
      try {
        const resp = await api.apiTemplate.get();
        if (resp && resp.data) {
          this.goods = resp.data
          this.goodsToShow = resp.data
        }
      } catch (err: any) {
        console.log(err);
      }
    },
    addToCart(el: object) {
      if(this.cart.findIndex(_el => _el.id === el.id) !== -1) return;
      this.cart = [...this.cart, el]
    },
    deleteCart(id: number) {
      this.cart = this.cart.filter(el => el.id !== id)
    },
    search(request: string) {
      this.goodsToShow = this.goods.filter(el => el.title.indexOf(request) !== -1)
    }
  },
});
