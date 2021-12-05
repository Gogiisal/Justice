//Адаптив меню
const menuBurger = document.querySelector(".button-menu-burger");
const closeMenu = document.querySelector(".button-close");
const btnAdd = document.querySelector('.button-add')
menuBurger.addEventListener("click", menuActive);

function menuActive() {
  const menuAdd = document.querySelector(".row-menu-auth");
  menuAdd.className = 'row-menu-auth-active';
}

closeMenu.addEventListener("click", menuClose);

function menuClose () {
  const menuAdd = document.querySelector(".row-menu-auth-active");
  menuAdd.className = 'row-menu-auth';
}
//------>End

//Добавление заметок
btnAdd.addEventListener("click", addNote)

function addNote() {
  const getInputValue = () => document.getElementById('input-text')
  let {value} = getInputValue()
  
  let = noteBlockRow = document.querySelector('.note-block-row')

  //Создаем блок блок заметки
  let divRow = document.createElement('div');
  divRow.className = 'note-content-row'
  noteBlockRow.prepend(divRow);

  //Создаем блок с нижнем меню
  let blockEditDelete = document.createElement('div');
  blockEditDelete.className = 'block-edit-delete'
  divRow.append(blockEditDelete)
  let btnEditMedia = document.querySelector('.button-edit-media')
  btnEditMedia = btnEditMedia.cloneNode(true)
  blockEditDelete.append(btnEditMedia)
  let btnDelMedia = document.querySelector('.button-delete-media')
  btnDelMedia = btnEditMedia.cloneNode(true)
  blockEditDelete.append(btnDelMedia)

  //Создаем note-content
  let noteContent = document.createElement('div');
  noteContent.className = 'note-content'
  divRow.prepend(noteContent);
  console.log(noteBlockRow)

  //Создаем content-text
  let contentText = document.createElement('p');
  contentText.className = 'content-text'
  contentText.innerHTML = value
  noteContent.prepend(contentText)
  //Добавляем кнопку удалить
  let buttonDelete = document.querySelector('.button-delete')
  buttonDelete = buttonDelete.cloneNode(true)
  noteContent.append(buttonDelete)
  //Добавляем кнопку редактировать
  let buttonEdit = document.querySelector('.button-edit')
  buttonEdit = buttonEdit.cloneNode(true)
  noteContent.append(buttonEdit)
  //Добавляем кнопку frame
  let buttonFrame = document.querySelector('.button-frame')
  buttonFrame = buttonFrame.cloneNode(true)
  noteContent.append(buttonFrame) 
}
//------>End


  

