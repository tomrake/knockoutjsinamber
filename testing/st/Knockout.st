Smalltalk current createPackage: 'Knockout'!
Object subclass: #Knockout
	instanceVariableNames: ''
	package: 'Knockout'!

!Knockout class methodsFor: 'not yet classified'!

isLoaded
"Test that the google.load() function is defined"
<return typeof(ko) !!== 'undefined'>
!

load: callback
! !

