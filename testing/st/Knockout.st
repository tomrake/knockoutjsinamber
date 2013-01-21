Smalltalk current createPackage: 'Knockout' properties: #{}!
Object subclass: #Knockout
	instanceVariableNames: ''
	package: 'Knockout'!

!Knockout class methodsFor: 'not yet classified'!

isLoaded
	^ko isNil not
!

load: callback
	"Load knockoutjs and do callback when loaded"
    self isLoaded 
    	ifTrue:[callback value]
		ifFalse:[
            <$.ajax({url:"http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js",datatype:"script",success:callback});>]
! !

