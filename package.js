Package.describe({
  name: 'bchrobot:accounts-sqrl',
  version: '0.0.1',
  summary: 'Let your users log in with SQRL https://www.grc.com/sqrl/sqrl.htm',
  git: 'https://github.com/bchrobot/accounts-sqrl.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.4');

  api.use([
    'ecmascript',
    'random',
    'accounts-base',
  ]);

  api.use([
    'templating',
    'less',
  ],'client');

  api.use('bchrobot:kjua@0.1.0', 'client');

  api.mainModule('accounts-sqrl-client.js', 'client');
  api.mainModule('accounts-sqrl-server.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bchrobot:accounts-sqrl');
  api.mainModule('accounts-sqrl-tests.js');
});
