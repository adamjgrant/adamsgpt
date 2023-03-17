import Component from "../../mozart.js";

let sidebar = new Component("sidebar");

sidebar.toggle = function() {
    let me = this.me;
    if (me.classList.contains("show")) {
        return me.classList.remove("show");
    }
    return me.classList.add("show");
}

export default sidebar;
