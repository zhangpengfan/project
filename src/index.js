import jQuery from "jquery"
import _ from "lodash"
import { a } from "@/script/app"
import "@/style/index.less"
import "@/index.css"

jQuery(function () {
    console.log(123);
})

jQuery.ajax({
    url: "/api/abc",
})

jQuery.ajax({
    url: "/api1/abc1",
})

console.log(_);
console.log(a);
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);