smalltalk.addPackage('Knockout');
smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_applyBindings_",
smalltalk.method({
selector: "applyBindings:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return ko.applyBindings(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"applyBindings:",{anObject:anObject},smalltalk.Knockout.klass)})},
args: ["anObject"],
source: "applyBindings: anObject\x0a\x09<return ko.applyBindings(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_computed_with_",
smalltalk.method({
selector: "computed:with:",
category: 'not yet classified',
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return ko.computed(aBlock,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"computed:with:",{aBlock:aBlock,anObject:anObject},smalltalk.Knockout.klass)})},
args: ["aBlock", "anObject"],
source: "computed: aBlock with: anObject\x0a\x09<return ko.computed(aBlock,anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

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
"_observable_",
smalltalk.method({
selector: "observable:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return ko.observable(aString);
return self}, function($ctx1) {$ctx1.fill(self,"observable:",{aString:aString},smalltalk.Knockout.klass)})},
args: ["aString"],
source: "observable: aString\x0a\x09<return ko.observable(aString)>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._button();
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2=_st($1)._with_("class browser");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._p();
_st($3)._with_("First Name: ");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._strong())._at_put_("data-bind","text: firstName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._p();
_st($5)._with_("Last Name: ");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._strong())._at_put_("data-bind","text: lastName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._p();
_st($7)._with_("First Name: ");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._input())._at_put_("data-bind","text: firstName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._p();
_st($9)._with_("Last Name: ");
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._input())._at_put_("data-bind","text: lastName");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$11=_st(html)._button();
_st($11)._at_put_("data-bind","click: capitalizeLastName");
$12=_st($11)._with_("Go Caps");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.KnockoutExample)})},
args: ["html"],
source: "renderOn: html\x0a    html p\x0a\x09\x09with:[\x0a\x09\x09\x09html button onClick:[Browser open];\x0a\x09\x09\x09with:'class browser'].\x0a\x09html p\x0a    \x09with: 'First Name: ';\x0a\x09\x09with:[\x0a        \x09     html strong\x0a                 \x09at: 'data-bind' put: 'text: firstName'].\x0a    html p\x0a    \x09with: 'Last Name: ';\x0a        with: [\x09html strong\x0a                 \x09at: 'data-bind' put: 'text: lastName'].\x0a\x09html p\x0a    \x09with: 'First Name: ';\x0a\x09\x09with: [\x0a        \x09     html input\x0a                 \x09at: 'data-bind' put: 'text: firstName'].\x0a    html p\x0a    \x09with: 'Last Name: ';\x0a\x09\x09with: [\x0a        \x09     html input\x0a                 \x09at: 'data-bind' put: 'text: lastName'].\x0a    html button\x0a    \x09at: 'data-bind' put: 'click: capitalizeLastName';\x0a    \x09with:  'Go Caps'\x0a\x0a        \x09   ",
messageSends: ["with:", "onClick:", "open", "button", "p", "at:put:", "strong", "input"],
referencedClasses: ["Browser"]
}),
smalltalk.KnockoutExample);


smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Knockout || Knockout))._load_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.KnockoutExample.klass)})},
args: [],
source: "begin\x0a\x09Knockout load: [\x0a\x09\x09self new appendToJQuery: 'body' asJQuery]",
messageSends: ["load:", "appendToJQuery:", "asJQuery", "new"],
referencedClasses: ["Knockout"]
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


