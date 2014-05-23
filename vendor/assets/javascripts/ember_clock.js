App.Clock = Ember.Object.extend({
  second: null,
  minute: null,
  hour:   null,

  init: function() {
    this.tick();
  },

  tick: function() {
    var now = new Date();

    this.setProperties({
      second: now.getSeconds(),
      minute: now.getMinutes(),
      hour:   now.getHours()
    });

    var self = this;
    Ember.run.later(function(){ self.tick(); }, 1000);
  }
});

Ember.ControllerMixin.reopen({ clock: null });

App.Clock.reopenClass({
  register: function(container, application) {
    container.optionsForType('clock', { singleton: true });
    container.register('clock', 'main', application.Clock);
    container.typeInjection('controller', 'clock', 'clock:main');      
  }
});
