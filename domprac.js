
var elements = document.getElementsByClassName('list-group-item');
var len=0
var l=document.getElementById('itemsLength')
function addList(){
  const ul = document.getElementById('items')
  const li = document.createElement('li')
  const input = document.querySelector('input[type=text]').value
  const i = document.createElement('i')
  const a = document.createElement('a')

  i.className = 'fa fa-trash-o fa-1x'
  li.className = 'list-group-item'
  a.href = '#'
  a.className = 'btn btn-sq-xs btn-danger'
  a.style = 'float: right;'
  a.onclick= deleteItem
  a.appendChild(i)
  li.textContent = input;
  li.appendChild(a)
  ul.appendChild(li)
  len+=1
  l.innerHTML='<p><b>No. of Items in list :</b></p>'+len
}

function deleteItem(e){
  const li = e.currentTarget.parentElement
  const ul = document.getElementById('items')
  ul.removeChild(li)
  len-=1
  l.innerHTML='<p><b>No. of Items in list :</b></p>'+len
}


