import "../scss/style.scss";
import burger from "./files/burger.js";
import inputDates from "./files/inputDates.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import more from "./files/more.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tab from "./files/tab.js";

spoller();
burger();
sliders();
more();
tab();
inputmask();
inputDates();
map();

Fancybox.bind("[data-fancybox]", {});
