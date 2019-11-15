var todos = [];
var input = prompt("What you want to add");
while(input !== "quit")
{
    //handle input
    if(input === "list")
    {
        listTodos();       
    } 
    else if(input === "new")
    {
        addTodo();
    } 
    else if(input === "delete")
    {
        deleteTodo();
    }
    //ask again for new input
    input = prompt("what you want to add"); 
}
console.log("OK,YOU QUIT THE APP");

function listTodos()
{
    console.log("**********");
    //To retrieve each and every todo
    todos.forEach(function(todo,i)
    { 
        console.log(i + ":" + todo);
    });
    console.log("**********");
}

function addTodo()
{
    //ask for new todo
    var newtodo = prompt("Enter new Todo");
    //add to todos array
    todos.push(newtodo);
    console.log("Added Todo");
}

function deleteTodo()
{
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete the todo
    todos.splice(index,1);
    console.log("Deleted Todo");
}