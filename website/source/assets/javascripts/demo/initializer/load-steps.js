Ember.Application.initializer({
  name: 'load-steps',
  after: 'store',

  initialize: function(container, application) {
    var store = container.lookup('store:main');
    var steps = {
      "steps": [
        { id: 0, name: 'welcome', humanName: "Welcome to the Vault Interactive Demo!"},
        { id: 1, name: 'steps', humanName: "Step 1: Overview"},
        { id: 2, name: 'init', humanName: "Step 2: Initialize your Vault"},
        { id: 3, name: 'unseal', humanName: "Step 3: Unsealing your Vault"},
        { id: 4, name: 'auth', humanName: "Step 4: Authorize your requests"},
        { id: 5, name: 'mounts', humanName: "Step 5: Mount a backend"},
        { id: 6, name: 'secrets', humanName: "Step 6: Read, write and delete secrets"},
        { id: 7, name: 'seal', humanName: "Step 7: Seal your Vault"},
      ]
    };

    application.register('model:step', Demo.Step);

    store.pushPayload('step', steps);
  },
});
