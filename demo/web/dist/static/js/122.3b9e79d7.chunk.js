(this["webpackJsonp@instinct-prj/web-demo"]=this["webpackJsonp@instinct-prj/web-demo"]||[]).push([[122],{733:function(e,a){var n;(n=Prism).languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:n.languages.lua}},n.hooks.add("before-tokenize",(function(e){n.languages["markup-templating"].buildPlaceholders(e,"etlua",/<%[\s\S]+?%>/g)})),n.hooks.add("after-tokenize",(function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"etlua")}))}}]);