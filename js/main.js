//svg


document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodod(value);
    document.getElementById('item').value = '';
  }
});

//removeItem

function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);


}


//completeItem

function completeItem(){

  var item = this.parentNode.parentNode,
      parent = item.parentNode,
      id = parent.id,
      fa = this.childNodes[0];

  var target = (id === 'todo') ? document.getElementById('compeleted'):document.getElementById('compeleted');


  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
  fa.className = 'fa fa-check-circle fa-lg';

}


// add ane item
function addItemTodod(text){

//UL tag
  var list = document.getElementById('todo');

// li tag
  var item = document.createElement('li');
  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'liMa');
  item.innerText = text;

//buttons div

  var buttons = document.createElement('div');
  buttons.classList.add('btn-group', 'Access');


//remove button

  var remove = document.createElement('button');
  remove.classList.add('btn', 'btn-secondary', 'remove');

  var iRemove = document.createElement('i');
  iRemove.classList.add('fa', 'fa-trash', 'fa-lg');


// Remove click

  remove.addEventListener('click', removeItem);

//complete button
  var complete = document.createElement('button');
  complete.classList.add('btn', 'btn-secondary', 'complete');


  var icomplete = document.createElement('i');
  icomplete.classList.add('fa', 'fa-check-circle-o', 'fa-lg');

  // Remove click

  complete.addEventListener('click', completeItem);


  //appends
remove.appendChild(iRemove);
complete.appendChild(icomplete);
buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

list.insertBefore(item, list.childNodes[0]);



}
