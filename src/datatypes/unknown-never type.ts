//unknown type
// never type

//unknown type
let userinput: unknown;
let username: string;
userinput = 9;
username = "Akash";

if (typeof userinput === "string") {
  username = userinput;
}

// never type
function genertaeError(message: string, code: number): never {
  throw { messgae: message, codenumber: code };
}
genertaeError("an uncaught error ocuured", 400);
