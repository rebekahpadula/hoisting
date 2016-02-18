// 1.

// the console will say undefined. because while the variable is declared
// and initialized at the global scope, you then try to overwrite it inside
// the function except since it's at the bottom of the function only the
// declaration will be hoisted to the top, but not the initialization.
// so your variable has been declared but not assigned to anything before 
// the console.log
  
  (function() {
  	var myvar = 'localvalue';
  	console.log(myvar);
  })();

  // this way the variable is declared and initialzied at the top o the 
  // global scope.






  // 2.
  // it will say undefined
  // in the if statement it's trying to redefine the value of flag, and again 
  // the declaration will be hoisted but the initialization won't be. Also 
  // the if else statments sound a little backwards to me. in the else
  // statement it reassigns the flag variable to true technically overwriting
  // the global scope value. 

  var flag = true;

  function test() {
  	if (flag) {
  		console.log('Switch flag from true to false');
  	}
  	else {
  		console.log('Switch flag from flase to true');
  	}
  }
  test();








  // 3. 
  // console.log will say undefined, because having var message = 'foo bar' below
  // console.log, the declaration is hoisted and the assignment/initialization 
  // is not.

  function saySomething() {
  	var message = 'Foo bar';
  	console.log(message);
  }
  saySomething();


  // 4. 
  // message would overwrite 'hello world' because it didn't have the var in front of it,
  // but still assumed it would say undefined because of hoisting. ran it and disovered the 
  // console.log will log out "hello world" and when you call the function it will say foo bar
  // if its supposed to say hello world then overwrite your global scope with a local one.


var message = 'Hello world'; 

function saySomething() {
    console.log(message);
}
saySomething();





// 5.
// a is undefined because the hoisting created a variable at the top but did not assign it 
// a value, and the function foo is not defined because the parent function doesn't know about
// its child,(okay ran it and console.log(foo()); does nothing. Im still thinking its because 
// its in the parent function that doesnt know about the child function) and 2 because 
// when you call the function foo it returns 2.


function test() {
	var a = 1;
    console.log(a);
    console.log(foo());
    function foo() {
        return 2;
    }
}

test();





// 6. 
// console.log(bar); is going to say bar is undefined because hoisting brought the var bar = 1 
// to the top , foo() will do nothing, and the function foo console.log("aloha") will log out aloha,
// and var bar 1 and baz 2 will do nothing. Now it will console.log bar and aloha.

(function() {
	var bar = 1;
    console.log(bar);
    foo();

    function foo() {
        console.log('aloha');
    }
})();








// 7.
// function fancy when called will console.log 'I can't run'. and the function run wont do anything because
// it doesnt get called. Aaaaaaand i just found out that it will console.log 'I can run'. That is because the
// function run () gets hoisted to the top of the local scope and has truthy value so when you say 
// if(run) console.log blah blah blah it logs it out because run i now truthy.

function fancy(arg1, arg2) {
	 function run() {
        console.log('Will I run?');
	}
	    if(run) {
	        console.log('I can run');
	    }
	    else {
	        console.log('I can\'t run');
	    }
}
fancy();





// 8. 
// The function will return undefined, because when you use the syntax var run = function() the var run gets 
// hoisted to the top but the = function() does not so now if (run) is falsy because undefined is falsy.  Okay
// nevermind ran it and the function says "i can't run" because if the first if statment is falsy then it executes
// the else statement which says "i can't run". 


function fancy(arg1, arg2) {
	var run = false;
	function run () {
        console.log('Will I run?');
    }
    if(run) {
        console.log('I can run');
    }
    else {
        console.log('I can\'t run');
    }
}

fancy();













