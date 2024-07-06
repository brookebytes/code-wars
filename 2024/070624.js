// Email Address Obfuscator - 7kyu


obfuscate = function(email) {
  return email.replace('@', ' [at] ').replaceAll('.', ' [dot] ')
}
