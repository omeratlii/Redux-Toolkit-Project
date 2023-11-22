import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/cartSlice";


// merkezi yönetim yerimiz burası. tüm kontrolü buradan parçalara bölerek sağlıyoruz.
// proje daha komplike hale geldiğinde yani bir çok state management yaptığımızda, neyin kontrolünü yapıyorsak ona bir reducer açıp cart altına eklemeye devam edeceğiz.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
