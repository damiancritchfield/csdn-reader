// ==UserScript==
// @name         csdn页面阅读优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
    var css = [
".blog_container_aside {",
"    display: none;",
"}",
".recommend-box {",
"    display: none;",
"}",
".csdn-side-toolbar {",
"    display: none;",
"}",
"#rightAside {",
"    display: none;",
"}",
"#csdn-toolbar {",
"    display: none;",
"}",
"pre:hover .hljs-button{",
"    display: none;",
"}",
".nodata .container main {",
"    width: 100%;",
        "max-width:100%;",
"}",
        "#mainBox{margin-left:0rem;}"
    ].join("\n");
lsAddStyle(css);
(function() {
    'use strict';

    // Your code here...
    $("#csdn-toolbar").remove();
})();

function lsAddStyle(css){
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}