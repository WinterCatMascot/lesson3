import './style.css'

const form = document.getElementById('form');

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  const data = {};
  formData.forEach((value, key) => data[key] = value); // key - это атрибут name у input

  console.log(data);
}

form.addEventListener('submit', handleSubmit);