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

              var script = document.createElement("script");
  script.src = "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
            ;
;
smalltalk.send(callback,"_value",[]);
};
return self}
}),
smalltalk.Knockout.klass);


