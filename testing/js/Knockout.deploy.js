smalltalk.addPackage('Knockout');
smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_applyBindings_",
smalltalk.method({
selector: "applyBindings:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return ko.applyBindings(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"applyBindings:",{anObject:anObject},smalltalk.Knockout.klass)})},
messageSends: []}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_computed_with_",
smalltalk.method({
selector: "computed:with:",
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return ko.computed(aBlock,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"computed:with:",{aBlock:aBlock,anObject:anObject},smalltalk.Knockout.klass)})},
messageSends: []}),
smalltalk.Knockout.klass);

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
"_observable_",
smalltalk.method({
selector: "observable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return ko.observable(aString);
return self}, function($ctx1) {$ctx1.fill(self,"observable:",{aString:aString},smalltalk.Knockout.klass)})},
messageSends: []}),
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
messageSends: ["with:", "onClick:", "open", "button", "p", "at:put:", "strong", "input"]}),
smalltalk.KnockoutExample);


smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Knockout || Knockout))._load_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.KnockoutExample.klass)})},
messageSends: ["load:", "appendToJQuery:", "asJQuery", "new"]}),
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


