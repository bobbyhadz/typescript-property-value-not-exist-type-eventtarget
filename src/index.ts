const input = document.getElementById('first_name');

function handleEvent(event: Event) {
  const target = event.target as HTMLInputElement;

  console.log(target.value);
}

input?.addEventListener('input', handleEvent);