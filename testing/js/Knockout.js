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
$1=typeof(ko) !== 'undefined';
;
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

              var script = document.createElement("script");
  script.src = "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
            ;
;
smalltalk.send(callback,"_value",[]);
};
return self},
args: ["callback"],
source: "load: callback\x0a\x09\x22Load knockoutjs and do callback when loaded\x22\x0a    self isLoaded \x0a    \x09ifTrue:[callback value]\x0a\x09\x09ifFalse:[\x0a            <\x0a              var script = document.createElement(\x22script\x22);\x0a  script.src = \x22http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js\x22;\x0a  script.type = \x22text/javascript\x22;\x0a  document.getElementsByTagName(\x22head\x22)[0].appendChild(script);\x0a            >.\x0a            \x22Should spin here  (self isLoaded) whileFalse:[self sleep]\x22\x0a            callback value\x0a]",
messageSends: ["ifTrue:ifFalse:", "value", "isLoaded"],
referencedClasses: []
}),
smalltalk.Knockout.klass);


