smalltalk.addPackage('Knockout', {});
smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(ko,"_isNil",[]),"_not",[]);
return $1;
},
args: [],
source: "isLoaded\x0a\x09^ko isNil not",
messageSends: ["not", "isNil"],
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
$.ajax({url:"http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js",datatype:"script",success:callback});;
;
};
return self},
args: ["callback"],
source: "load: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a    self isLoaded \x0a    \x09ifTrue:[callback value]\x0a\x09\x09ifFalse:[\x0a            <$.ajax({url:\x22http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js\x22,datatype:\x22script\x22,success:callback});>]",
messageSends: ["ifTrue:ifFalse:", "value", "isLoaded"],
referencedClasses: []
}),
smalltalk.Knockout.klass);


