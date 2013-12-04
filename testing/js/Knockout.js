define("com_github_tomrake_knockoutjs/Knockout", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Knockout');
smalltalk.packages["Knockout"].transport = {"type":"amd","amdNamespace":"com_github_tomrake_knockoutjs"};

smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
smalltalk.method({
selector: "applyBindings:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ko.applyBindings(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"applyBindings:",{anObject:anObject},smalltalk.Knockout.klass)})},
args: ["anObject"],
source: "applyBindings: anObject\x0a\x09<return ko.applyBindings(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "computed:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ko.computed(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"computed:",{aBlock:aBlock},smalltalk.Knockout.klass)})},
args: ["aBlock"],
source: "computed: aBlock \x0a\x09<return ko.computed(aBlock)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "computed:with:",
category: 'not yet classified',
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ko.computed(aBlock,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"computed:with:",{aBlock:aBlock,anObject:anObject},smalltalk.Knockout.klass)})},
args: ["aBlock", "anObject"],
source: "computed: aBlock with: anObject\x0a\x09<return ko.computed(aBlock,anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof(ko) !== 'undefined';
return self}, function($ctx1) {$ctx1.fill(self,"isLoaded",{},smalltalk.Knockout.klass)})},
args: [],
source: "isLoaded\x0a\x22Test that the google.load() function is defined\x22\x0a<return typeof(ko) !== 'undefined'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
category: 'not yet classified',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isLoaded();
if(smalltalk.assert($1)){
_st(callback)._value();
} else {
self._primitiveLoad_(callback);
};
return self}, function($ctx1) {$ctx1.fill(self,"load:",{callback:callback},smalltalk.Knockout.klass)})},
args: ["callback"],
source: "load: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a    self isLoaded \x0a    \x09ifTrue: [callback value]\x0a\x09\x09ifFalse: [self primitiveLoad:callback]",
messageSends: ["ifTrue:ifFalse:", "isLoaded", "value", "primitiveLoad:"],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "observable:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ko.observable(aString);
return self}, function($ctx1) {$ctx1.fill(self,"observable:",{aString:aString},smalltalk.Knockout.klass)})},
args: ["aString"],
source: "observable: aString\x0a\x09<return ko.observable(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "primitiveLoad:",
category: 'not yet classified',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$.getScript('../bower_components/knockoutjs/build/output/knockout-latest.js',callback);;
return self}, function($ctx1) {$ctx1.fill(self,"primitiveLoad:",{callback:callback},smalltalk.Knockout.klass)})},
args: ["callback"],
source: "primitiveLoad: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a\x09<$.getScript('../bower_components/knockoutjs/build/output/knockout-latest.js',callback);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);


smalltalk.addClass('KnockoutExample', smalltalk.Widget, [], 'Knockout');
smalltalk.addMethod(
smalltalk.method({
selector: "initModel",
category: 'not yet classified',
fn: function (){
var self=this;
function $Knockout(){return smalltalk.Knockout||(typeof Knockout=="undefined"?nil:Knockout)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st($Knockout())._observable_("Tom");
$ctx1.sendIdx["observable:"]=1;
$2="firstName".__minus_gt($3);
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,"lastName".__minus_gt(_st($Knockout())._observable_("Tom"))]);
_st($Knockout())._applyBindings_($1);
return self}, function($ctx1) {$ctx1.fill(self,"initModel",{},smalltalk.KnockoutExample)})},
args: [],
source: "initModel\x0a\x09Knockout applyBindings: #{'firstName' -> (Knockout observable:'Tom').'lastName' -> (Knockout observable:'Tom')}",
messageSends: ["applyBindings:", "->", "observable:"],
referencedClasses: ["Knockout"]
}),
smalltalk.KnockoutExample);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$9,$11,$10,$12,$13,$14,$15;
$1=_st(html)._p();
$ctx1.sendIdx["p"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st($Browser())._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$3=_st($2)._with_("class browser");
$ctx2.sendIdx["with:"]=2;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$4=_st(html)._p();
$ctx1.sendIdx["p"]=2;
_st($4)._with_("First Name: ");
$ctx1.sendIdx["with:"]=3;
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._strong();
$ctx2.sendIdx["strong"]=1;
return _st($6)._at_put_("data-bind","text: firstName");
$ctx2.sendIdx["at:put:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=4;
$7=_st(html)._p();
$ctx1.sendIdx["p"]=3;
_st($7)._with_("Last Name: ");
$ctx1.sendIdx["with:"]=5;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._strong())._at_put_("data-bind","text: lastName");
$ctx2.sendIdx["at:put:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["with:"]=6;
$9=_st(html)._p();
$ctx1.sendIdx["p"]=4;
_st($9)._with_("First Name: ");
$ctx1.sendIdx["with:"]=7;
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$11=_st(html)._input();
$ctx2.sendIdx["input"]=1;
return _st($11)._at_put_("data-bind","text: firstName");
$ctx2.sendIdx["at:put:"]=3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["with:"]=8;
$12=_st(html)._p();
_st($12)._with_("Last Name: ");
$ctx1.sendIdx["with:"]=9;
$13=_st($12)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._input())._at_put_("data-bind","text: lastName");
$ctx2.sendIdx["at:put:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
$ctx1.sendIdx["with:"]=10;
$14=_st(html)._button();
_st($14)._at_put_("data-bind","click: capitalizeLastName");
$15=_st($14)._with_("Go Caps");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.KnockoutExample)})},
args: ["html"],
source: "renderOn: html\x0a    html p\x0a\x09\x09with:[\x0a\x09\x09\x09html button onClick:[Browser open];\x0a\x09\x09\x09with:'class browser'].\x0a\x09html p\x0a    \x09with: 'First Name: ';\x0a\x09\x09with:[\x0a        \x09     html strong\x0a                 \x09at: 'data-bind' put: 'text: firstName'].\x0a    html p\x0a    \x09with: 'Last Name: ';\x0a        with: [\x09html strong\x0a                 \x09at: 'data-bind' put: 'text: lastName'].\x0a\x09html p\x0a    \x09with: 'First Name: ';\x0a\x09\x09with: [\x0a        \x09     html input\x0a                 \x09at: 'data-bind' put: 'text: firstName'].\x0a    html p\x0a    \x09with: 'Last Name: ';\x0a\x09\x09with: [\x0a        \x09     html input\x0a                 \x09at: 'data-bind' put: 'text: lastName'].\x0a    html button\x0a    \x09at: 'data-bind' put: 'click: capitalizeLastName';\x0a    \x09with:  'Go Caps'",
messageSends: ["with:", "p", "onClick:", "button", "open", "at:put:", "strong", "input"],
referencedClasses: ["Browser"]
}),
smalltalk.KnockoutExample);


smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
function $Knockout(){return smalltalk.Knockout||(typeof Knockout=="undefined"?nil:Knockout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st($Knockout())._load_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._new();
_st($1)._appendToJQuery_("body"._asJQuery());
$2=_st($1)._initModel();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.KnockoutExample.klass)})},
args: [],
source: "begin\x0a\x09Knockout load: [\x0a\x09\x09self new appendToJQuery: 'body' asJQuery;\x0a\x09\x09\x09\x09initModel]",
messageSends: ["load:", "appendToJQuery:", "new", "asJQuery", "initModel"],
referencedClasses: ["Knockout"]
}),
smalltalk.KnockoutExample.klass);


smalltalk.addClass('ScriptLoader', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
smalltalk.method({
selector: "jQLoadScriptUrl:callback:",
category: 'not yet classified',
fn: function (url,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$.getScript(url,callback);;
return self}, function($ctx1) {$ctx1.fill(self,"jQLoadScriptUrl:callback:",{url:url,callback:callback},smalltalk.ScriptLoader.klass)})},
args: ["url", "callback"],
source: "jQLoadScriptUrl: url callback: callback\x0a\x09\x22comment stating purpose of message\x22\x0a<$.getScript(url,callback);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScriptLoader.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadScriptUrl:callback:",
category: 'not yet classified',
fn: function (url,callback){
var self=this;
var script;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$6,$5,$4;
script=_st(document)._createElement_("script");
_st(script)._type_("text/javascript");
$1=_st(_st(script)._hasOwnProperty_("readyState"))._and_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(script)._readyState();
$ctx2.sendIdx["readyState"]=1;
$2=_st($3).__eq(nil);
$ctx2.sendIdx["="]=1;
return _st($2)._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
_st(script)._onreadystatechange_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(script)._readyState();
$ctx2.sendIdx["readyState"]=2;
$5=_st($6).__eq("loaded");
$ctx2.sendIdx["="]=2;
$4=_st($5)._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(script)._readyState()).__eq("complete");
$ctx3.sendIdx["="]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
if(smalltalk.assert($4)){
_st(_st(script)._onreadystatechange()).__eq(nil);
return _st(callback)._value();
$ctx2.sendIdx["value"]=1;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
} else {
_st(script)._inspect();
_st(script)._onload_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
};
_st(script)._src_(url);
_st(_st(document)._body())._appendChild_(script);
return self}, function($ctx1) {$ctx1.fill(self,"loadScriptUrl:callback:",{url:url,callback:callback,script:script},smalltalk.ScriptLoader.klass)})},
args: ["url", "callback"],
source: "loadScriptUrl: url callback: callback\x0a\x09\x22comment stating purpose of message\x22\x0a|script|\x0a\x09script := document createElement: 'script'.\x0a\x09script type: 'text/javascript'.\x0a\x09((script hasOwnProperty: 'readyState') and:[(script readyState = nil) not]) \x0a\x09\x09ifTrue:[\x0a\x09\x09\x09script onreadystatechange: [\x0a\x09\x09\x09\x09(((script readyState) = 'loaded') or:[(script readyState = 'complete')]) ifTrue:[\x0a\x09\x09\x09\x09\x09script onreadystatechange = nil.\x0a\x09\x09\x09\x09\x09callback value.\x0a\x09\x09\x09]]]\x0a\x09\x09 \x0a\x09 ifFalse:[\x0a        script inspect.\x0a\x09\x09script onload:[callback value]].\x0a\x09script src:url.\x0a\x09document body appendChild:script",
messageSends: ["createElement:", "type:", "ifTrue:ifFalse:", "and:", "hasOwnProperty:", "not", "=", "readyState", "onreadystatechange:", "ifTrue:", "or:", "onreadystatechange", "value", "inspect", "onload:", "src:", "appendChild:", "body"],
referencedClasses: []
}),
smalltalk.ScriptLoader.klass);

});
