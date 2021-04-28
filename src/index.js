import "./styles/index.scss";
import styles from "./styles/module-styles.css";

const h2 = document.querySelector("h2");
h2.classList.add(styles.heading);

const obj = {
  a: "apple crisp",
  b: "buttercream",
  c: {
    cd: "cheese danish",
  },
};

console.log(obj?.c?.cd, obj?.f?.fa);

if (module.hot) {
  module.hot.accept();
}
