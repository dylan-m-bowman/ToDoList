//adds items to list, clears input field!//
/*function fade()
{
    console.log(this, " was clicked.")
    if (this.classList.contains("toDo"))
    {
        this.classList.remove('toDo'),
        this.classList.add('done')
    } 
    else 
    {
        this.classList.remove('done'),
        this.classList.add('toDo')
    }
};*/

function addItem() 
{
    var toDoItem = document.getElementById("toDoItem"),
     list = document.getElementById('list'),
     newToDo = document.createElement('li'),
     input = document.querySelector('input');
 
     if (input.value != '')
     {
         newToDo.innerHTML = input.value;
         list.appendChild(newToDo);
         newToDo.classList.add('toDo');
         console.log(input.value, "was added to list.")
         //couldn't get this code block to work.. annoyed!
        /* newToDo.addEventListener('click', function()
         {
             console.log(this, "has been clicked.")
             if (this.classList.contains("toDo"))
             {
                 this.classList.remove("toDo"),
                 this.classList.add("done")
                 setTimeout(function()
                 {
                     console.log(this, " will be deleted.");
                     this.remove(this);

                 }, 1000);
             } 
             else 
             {
                 this.classList.remove("done");
                 this.classList.add("toDo");
             }
         })*/

         input.value = '';
     } 
     else
     {
         alert("I'm sure you have something to do...")
     }
};





/*newToDo.addEventListener('click',fade())
{
    if (this.classList.contains("toDo"))
    {
        this.classList.remove("toDo");
        this.classList.add("done", "complete");
    } 
    else 
    {
        this.classList.remove("done", "complete"),
        this.classList.add("toDo"),
    }
}*/