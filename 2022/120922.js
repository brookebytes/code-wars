//Hello, Name or World!

/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
 * Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).*/

function hello(name) {
  return name ? `Hello, ${name[0].toUpperCase()+name.substring(1,name.length).toLowerCase()}!` : 'Hello, World!';
}
