smalltalk.addPackage('Knockout', {});
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
$.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);;
;
};
return self}
}),
smalltalk.Knockout.klass);


smalltalk.addClass('KnockoutExample', smalltalk.Widget, [], 'Knockout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$3,$4,$5,$6,$7,$8,$2;
var workspace;
workspace=smalltalk.send((smalltalk.SourceArea || SourceArea),"_new",[]);
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["section center"]);
$2=smalltalk.send($1,"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_h1",[]),"_with_",["Give Jtalk a try!"]);
smalltalk.send(workspace,"_renderOn_",[html]);
return smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
$3=smalltalk.send(html,"_button",[]);
smalltalk.send($3,"_with_",["DoIt"]);
$4=smalltalk.send($3,"_onClick_",[(function(){
return smalltalk.send(workspace,"_doIt",[]);
})]);
$4;
$5=smalltalk.send(html,"_button",[]);
smalltalk.send($5,"_with_",["PrintIt"]);
$6=smalltalk.send($5,"_onClick_",[(function(){
return smalltalk.send(workspace,"_printIt",[]);
})]);
$6;
$7=smalltalk.send(html,"_button",[]);
smalltalk.send($7,"_with_",["InspectIt"]);
$8=smalltalk.send($7,"_onClick_",[(function(){
return smalltalk.send(workspace,"_inspectIt",[]);
})]);
return $8;
})]);
})]);
return self}
}),
smalltalk.KnockoutExample);


smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self}
}),
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
return self}
}),
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
}
}),
smalltalk.ScriptLoader.klass);


