let markAsRead = document.getElementById('mark');
let notifyText = document.getElementById('notify-text');
let readMode = localStorage.getItem('read-mode');

const markRead = () => {
   
   notifyText.textContent = '0'; 
   localStorage.setItem('read-mode', 'enabled');
   const redDot = document.querySelectorAll('.red');
      redDot.forEach((element) => {
         element.style.backgroundColor = 'transparent';
      });
   const infoCard = document.querySelectorAll('.note');
   infoCard.forEach((element) => {
      element.style.backgroundColor = 'transparent';
      });

}


const unRead = () => {
   notifyText.textContent = '0'; 
   localStorage.setItem('read-mode', 'disabled');
   const redDot = document.querySelectorAll('.red');
      redDot.forEach((element) => {
         element.style.backgroundColor = 'transparent';
      });
   const infoCard = document.querySelectorAll('.note');
   infoCard.forEach((element) => {
      element.style.backgroundColor = 'transparent';
      });

}



if (readMode === 'enabled') {
   markRead();
}

markAsRead.onclick = (e) => {
   readMode = localStorage.getItem('read-mode');
   if (readMode === 'disabled') {
      markRead();
   } else {
      unRead();
   }
}
