smalltalk.addPackage('Knockout');
smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function () {
    var self = this;
    var $1;
    $1 = typeof ko !== "undefined";
    return $1;
},
messageSends: []}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_load_",
smalltalk.method({
selector: "load:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isLoaded();
if(smalltalk.assert($1)){
_st(callback)._value();
} else {
_st(self)._primitiveLoad_(callback);
};
return self}, function($ctx1) {$ctx1.fill(self,"load:",{callback:callback},smalltalk.Knockout.klass)})},
messageSends: ["ifTrue:ifFalse:", "value", "primitiveLoad:", "isLoaded"]}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_primitiveLoad_",
smalltalk.method({
selector: "primitiveLoad:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { $.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);;
return self}, function($ctx1) {$ctx1.fill(self,"primitiveLoad:",{callback:callback},smalltalk.Knockout.klass)})},
messageSends: []}),
smalltalk.Knockout.klass);


smalltalk.addClass('KnockoutExample', smalltalk.Widget, [], 'Knockout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx2) {"First Name: ";
return _st(_st(html)._strong())._at_put_("data-bind","text: firstName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx2) {"Last Name: ";
return _st(_st(html)._strong())._at_put_("data-bind","text: lastName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx2) {"First Name: ";
return _st(_st(html)._input())._at_put_("data-bind","text: firstName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx2) {"Last Name: ";
return _st(_st(html)._input())._at_put_("data-bind","text: lastName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(html)._button();
_st($1)._at_put_("data-bind","click: capitalizeLastName");
$2=_st($1)._with_("Go Caps");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.KnockoutExample)})},
messageSends: ["with:", "at:put:", "strong", "p", "input", "button"]}),
smalltalk.KnockoutExample);


smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.KnockoutExample.klass);


smalltalk.addClass('ScriptLoader', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_jQLoadScriptUrl_callback_",
smalltalk.method({
selector: "jQLoadScriptUrl:callback:",
fn: function (url,callback){
var self=this;
$.getScript(url,callback);;
;
return self},
messageSends: []}),
smalltalk.ScriptLoader.klass);

smalltalk.addMethod(
"_loadScriptUrl_callback_",
smalltalk.method({
selector: "loadScriptUrl:callback:",
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
messageSends: ["createElement:", "type:", "ifTrue:ifFalse:", "onreadystatechange:", "ifTrue:", "=", "onreadystatechange", "value", "or:", "readyState", "inspect", "onload:", "and:", "not", "hasOwnProperty:", "src:", "appendChild:", "body"]}),
smalltalk.ScriptLoader.klass);


