Smalltalk current createPackage: 'Knockout' properties: #{}!
Object subclass: #Knockout
	instanceVariableNames: ''
	package: 'Knockout'!

!Knockout class methodsFor: 'not yet classified'!

isLoaded
"Test that the google.load() function is defined"
^<typeof(ko) !!== 'undefined'>
!

load: callback
	"Load knockoutjs and do callback when loaded"
    self isLoaded 
<<<<<<< HEAD
    	ifTrue: [callback value]
		ifFalse: [<$.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);>]
! !

Object subclass: #ScriptLoader
	instanceVariableNames: ''
	package: 'Knockout'!

!ScriptLoader class methodsFor: 'not yet classified'!

jQLoadScriptUrl: url callback: callback
	"comment stating purpose of message"
<$.getScript(url,callback);>
!

loadScriptUrl: url callback: callback
	"comment stating purpose of message"
|script|
	script := document createElement: 'script'.
	script type: 'text/javascript'.
	((script hasOwnProperty: 'readyState') and:[(script readyState = nil) not]) 
		ifTrue:[
			script onreadystatechange: [
				(((script readyState) = 'loaded') or:[(script readyState = 'complete')]) ifTrue:[
					script onreadystatechange = nil.
					callback value.
			]]]
		 
	 ifFalse:[
        script inspect.
		script onload:[callback value]].
	script src:url.
	document body appendChild:script
=======
    	ifTrue:[callback value]
		ifFalse:[
            <
              var script = document.createElement("script");
  script.src = "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
            >.
            "Should spin here  (self isLoaded) whileFalse:[self sleep]"
            callback value
]
>>>>>>> 4c23fcb66b001001a45c85da23d7e808c1142489
! !

