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
    	ifTrue: [callback value]
		ifFalse: [<$.getScript('//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js',callback);>]
! !

Widget subclass: #KnockoutExample
	instanceVariableNames: ''
	package: 'Knockout'!

!KnockoutExample methodsFor: 'not yet classified'!

renderOn: html
	html p
    	with: ['First Name: '.
        	     html strong
                 	at: 'data-bind' put: 'text: firstName'].
    html p
    	with: ['Last Name: '.
        	     html strong
                 	at: 'data-bind' put: 'text: lastName'].
	html p
    	with: ['First Name: '.
        	     html input
                 	at: 'data-bind' put: 'text: firstName'].
    html p
    	with: ['Last Name: '.
        	     html input
                 	at: 'data-bind' put: 'text: lastName'].
    html button
    	at: 'data-bind' put: 'click: capitalizeLastName'
    	with:  'Go Caps'
! !

!KnockoutExample class methodsFor: 'not yet classified'!

begin
	self new appendToJQuery: 'body' asJQuery
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
! !

