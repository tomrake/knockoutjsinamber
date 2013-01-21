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
    	ifTrue:[callback value]
		ifFalse:[
            <$.ajax({url:"http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js",datatype:"script",success:callback});>]
! !

