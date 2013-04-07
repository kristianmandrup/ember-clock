# Ember Clock

Clock for Ember, extracted from: http://livsey.org/blog/2013/02/20/tick-tock/

## Installation

Add this line to your application's Gemfile:

    gem 'ember-clock'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install ember-clock


In your Rails assets js manifest:

```javascript
//= require ember-clock
```

## Setup

Make clock singleton instance available to all controllers ;)

```javascript
Ember.Application.initializer({
  name: "clock",
  initialize: function(container, application) {
    App.Clock.register(container, application);
  }
})
```

We can now reuse the clock anywhere in the application, by just adding `clock.second`, `clock.minute` or `clock.hour` to property bindings. Then they’ll be automatically re-calculated at the appropriate points in time.

## Usage

Example use:

```javascript
App.CommentController = Ember.ObjectController.extend({
  isEditable: function(){
    // ...
  }.property("postedBy", "currentPerson", "postedAt", "clock.minute")
});
```

Adds `clock.minute` to the property bindings which causes this to automatically update once a minute.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
