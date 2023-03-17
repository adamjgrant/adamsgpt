import Component from "../../mozart.js";
import sidebar from "../sidebar/sidebar.js";

let navbar = new Component("navbar");

let toggle = navbar.q(".toggle");
toggle.addEventListener("click", sidebar.toggle);

export default navbar;
