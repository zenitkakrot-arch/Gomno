javascript:(function(){
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
  new Notification('Салам, щегол 🕊️');
})();
