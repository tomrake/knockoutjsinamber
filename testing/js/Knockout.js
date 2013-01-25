smalltalk.addPackage('Knockout', {});
smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = typeof ko !== "undefined";
    return $1;
},
args: [],
source: "isLoaded\x0a\x22Test that the google.load() function is defined\x22\x0a^<typeof(ko) !== 'undefined'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_load_",
smalltalk.method({
selector: "load:",
category: 'not yet classified',
fn: function (callback){
var self=this;
var $1;
$1=smalltalk.send(self,"_isLoaded",[]);
if(smalltalk.assert($1)){
smalltalk.send(callback,"_value",[]);
} else {
$.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);;
;
};
return self},
args: ["callback"],
source: "load: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a    self isLoaded \x0a    \x09ifTrue: [callback value]\x0a\x09\x09ifFalse: [<$.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);>]       ",
messageSends: ["ifTrue:ifFalse:", "value", "isLoaded"],
referencedClasses: []
}),
smalltalk.Knockout.klass);


smalltalk.addClass('KnockoutExample', smalltalk.Widget, [], 'Knockout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
var $1,$3,$4,$5,$6,$7,$8,$2;
var workspace;
workspace=smalltalk.send((smalltalk.SourceArea || SourceArea),"_new",[]);
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["section center"]);
$2=smalltalk.send($1,"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_h1",[]),"_with_",["Give Jtalk a try!"]);
smalltalk.send(workspace,"_renderOn_",[html]);
return smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
$3=smalltalk.send(html,"_button",[]);
smalltalk.send($3,"_with_",["DoIt"]);
$4=smalltalk.send($3,"_onClick_",[(function(){
return smalltalk.send(workspace,"_doIt",[]);
})]);
$4;
$5=smalltalk.send(html,"_button",[]);
smalltalk.send($5,"_with_",["PrintIt"]);
$6=smalltalk.send($5,"_onClick_",[(function(){
return smalltalk.send(workspace,"_printIt",[]);
})]);
$6;
$7=smalltalk.send(html,"_button",[]);
smalltalk.send($7,"_with_",["InspectIt"]);
$8=smalltalk.send($7,"_onClick_",[(function(){
return smalltalk.send(workspace,"_inspectIt",[]);
})]);
return $8;
})]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Jtalk a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"],
referencedClasses: ["SourceArea"]
}),
smalltalk.KnockoutExample);


smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self},
args: [],
source: "begin\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.KnockoutExample.klass);


smalltalk.addClass('ScriptLoader', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_jQLoadScriptUrl_callback_",
smalltalk.method({
selector: "jQLoadScriptUrl:callback:",
category: 'not yet classified',
fn: function (url,callback){
var self=this;
$.getScript(url,callback);;
;
return self},
args: ["url", "callback"],
source: "jQLoadScriptUrl: url callback: callback\x0a\x09\x22comment stating purpose of message\x22\x0a<$.getScript(url,callback);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScriptLoader.klass);

smalltalk.addMethod(
"_loadScriptUrl_callback_",
smalltalk.method({
selector: "loadScriptUrl:callback:",
category: 'not yet classified',
fn: function (url, callback) {
    var self = this;
    var $1, $2;
    var script;
    script = smalltalk.send(document, "_createElement_", ["script"]);
    smalltalk.send(script, "_type_", ["text/javascript"]);
    $1 = smalltalk.send(smalltalk.send(script, "_hasOwnProperty_", ["readyState"]), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(script, "_readyState", []), "__eq", [nil]), "_not", []);}]);
    if (smalltalk.assert($1)) {
        smalltalk.send(script, "_onreadystatechange_", [function () {$2 = smalltalk.send(smalltalk.send(smalltalk.send(script, "_readyState", []), "__eq", ["loaded"]), "_or_", [function () {return smalltalk.send(smalltalk.send(script, "_readyState", []), "__eq", ["complete"]);}]);if (smalltalk.assert($2)) {smalltalk.send(smalltalk.send(script, "_onreadystatechange", []), "__eq", [nil]);return smalltalk.send(callback, "_value", []);}}]);
    } else {
        smalltalk.send(script, "_inspect", []);
        smalltalk.send(script, "_onload_", [function () {return smalltalk.send(callback, "_value", []);}]);
    }
    smalltalk.send(script, "_src_", [url]);
    smalltalk.send(smalltalk.send(document, "_body", []), "_appendChild_", [script]);
    return self;
},
args: ["url", "callback"],
source: "loadScriptUrl: url callback: callback\x0a\x09\x22comment stating purpose of message\x22\x0a|script|\x0a\x09script := document createElement: 'script'.\x0a\x09script type: 'text/javascript'.\x0a\x09((script hasOwnProperty: 'readyState') and:[(script readyState = nil) not]) \x0a\x09\x09ifTrue:[\x0a\x09\x09\x09script onreadystatechange: [\x0a\x09\x09\x09\x09(((script readyState) = 'loaded') or:[(script readyState = 'complete')]) ifTrue:[\x0a\x09\x09\x09\x09\x09script onreadystatechange = nil.\x0a\x09\x09\x09\x09\x09callback value.\x0a\x09\x09\x09]]]\x0a\x09\x09 \x0a\x09 ifFalse:[\x0a        script inspect.\x0a\x09\x09script onload:[callback value]].\x0a\x09script src:url.\x0a\x09document body appendChild:script",
messageSends: ["createElement:", "type:", "ifTrue:ifFalse:", "onreadystatechange:", "ifTrue:", "=", "onreadystatechange", "value", "or:", "readyState", "inspect", "onload:", "and:", "not", "hasOwnProperty:", "src:", "appendChild:", "body"],
referencedClasses: []
}),
smalltalk.ScriptLoader.klass);


