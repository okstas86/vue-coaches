import { createStore } from "vuex";
import coahesModule from "./modules/couches/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    coaches: coahesModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
