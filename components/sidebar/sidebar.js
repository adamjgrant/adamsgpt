import Component from "../../mozart.js";

let sidebar = new Component("sidebar");

const SHOW_SIDEBAR_CLASS = "show-sidebar";
sidebar.toggle = function() {
    let body = document.body;
    if (body.classList.contains(SHOW_SIDEBAR_CLASS)) {
        return body.classList.remove(SHOW_SIDEBAR_CLASS);
    }
    return body.classList.add(SHOW_SIDEBAR_CLASS);
}

export default sidebar;
