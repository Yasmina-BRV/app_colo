class Bot {
  constructor(name) {
    this.name = name;
  }

  respondTo(message) {
    switch (message.toLowerCase()) {
      case 'weather':
        return this.fetchWeatherInfo();
      case 'help':
        return Promise.resolve('Commandes disponibles: weather, help');
      default:
        return Promise.resolve('Désolé, je ne comprends pas cette commande.');
    }
  }

  fetchWeatherInfo() {
    return Promise.resolve('Il fait actuellement ensoleillé.');
  }
}

export default Bot;
