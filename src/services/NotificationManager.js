import PushNotification from 'react-native-push-notification';

class NotificationManager {
  criarCanal = () => {
    PushNotification.createChannel({
      channelId: 'channel-id',
      channelName: 'My channel',
      channelDescription: 'A channel to categorise your notifications',
      playSound: false,
      soundName: 'default',
      //importance: Importance.HIGH,
      vibrate: true,
    });
  };

  configurar = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token:', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);
      },
    });
  };

  // É aqui que nossa notificação para o Android é construida
  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      channelId: 'channel-id',
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  // Fução que exibe a notificação
  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      ...this.buildAndroidNotification(id, title, message, data, options),
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  mostrarNotificacao() {
    PushNotification.localNotification({
      //... You can use all the options from localNotifications
      id: 2,
      channelId: 'channel-id',
      title: 'O tempo de foco terminou!',
      message: 'Faça uma breve pausa', // (required)
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      vibrate: true,
    });
  }
}

export const notificationManager = new NotificationManager();
