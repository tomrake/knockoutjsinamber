define("com_github_tomrake_knockoutjs/Knockout", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Knockout');
smalltalk.packages["Knockout"].transport = {"type":"amd","amdNamespace":"com_github_tomrake_knockoutjs"};

smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

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
return self}, function($ctx1) {$ctx1.fill(self,"load:",{callback:callback},smalltalk.Knockout.klass)})},
args: ["callback"],
source: "load: callback\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.Knockout.klass);

});
