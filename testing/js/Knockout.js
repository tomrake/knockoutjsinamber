smalltalk.addPackage('Knockout');
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isLoaded();
if(smalltalk.assert($1)){
_st(callback)._value();
} else {
_st(self)._primitiveLoad_(callback);
};
return self}, function($ctx1) {$ctx1.fill(self,"load:",{callback:callback},smalltalk.Knockout.klass)})},
args: ["callback"],
source: "load: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a    self isLoaded \x0a    \x09ifTrue: [callback value]\x0a\x09\x09ifFalse: [self primitiveLoad:callback]       ",
messageSends: ["ifTrue:ifFalse:", "value", "primitiveLoad:", "isLoaded"],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_primitiveLoad_",
smalltalk.method({
selector: "primitiveLoad:",
category: 'not yet classified',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { $.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);;
return self}, function($ctx1) {$ctx1.fill(self,"primitiveLoad:",{callback:callback},smalltalk.Knockout.klass)})},
args: ["callback"],
source: "primitiveLoad: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a\x09<$.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);>      ",
messageSends: [],
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
args: ["html"],
source: "renderOn: html\x0a\x09html p\x0a    \x09with: ['First Name: '.\x0a        \x09     html strong\x0a                 \x09at: 'data-bind' put: 'text: firstName'].\x0a    html p\x0a    \x09with: ['Last Name: '.\x0a        \x09     html strong\x0a                 \x09at: 'data-bind' put: 'text: lastName'].\x0a\x09html p\x0a    \x09with: ['First Name: '.\x0a        \x09     html input\x0a                 \x09at: 'data-bind' put: 'text: firstName'].\x0a    html p\x0a    \x09with: ['Last Name: '.\x0a        \x09     html input\x0a                 \x09at: 'data-bind' put: 'text: lastName'].\x0a    html button\x0a    \x09at: 'data-bind' put: 'click: capitalizeLastName';\x0a    \x09with:  'Go Caps'\x0a\x0a        \x09   ",
messageSends: ["with:", "at:put:", "strong", "p", "input", "button"],
referencedClasses: []
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


