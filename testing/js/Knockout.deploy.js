smalltalk.addPackage('Knockout', {});
smalltalk.addClass('Knockout', smalltalk.Object, [], 'Knockout');

smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
var $1;
$1=typeof(ko) !== 'undefined';
;
return $1;
}
}),
smalltalk.Knockout.klass);

smalltalk.addMethod(
"_load_",
smalltalk.method({
selector: "load:",
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
return self}
}),
smalltalk.Knockout.klass);


