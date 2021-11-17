module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/style.js',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'screen',
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{pascalCase screen}}/index.js',
        templateFile: 'plop-templates/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase screen}}/style.js',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('listItem', {
    description: 'Create a listItem',
    prompts: [
      {
        type: 'input',
        name: 'screen',
        message: 'What is your listItem name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is your directory path? (eg. src/Login)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase screen}}ListItem/index.js',
        templateFile: 'plop-templates/ListItem.js.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase screen}}ListItem/style.js',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('reducer', {
    description: 'Create a reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your reducer name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/redux/{{pascalCase name}}Redux.js',
        templateFile: 'plop-templates/Reducer.js.hbs',
      },
    ],
  });
  plop.setGenerator('saga', {
    description: 'Create a saga',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your saga name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/saga/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Saga.js.hbs',
      },
    ],
  });
  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is your directory path? (eg. app/module)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}Service.js',
        templateFile: 'plop-templates/Service.js.hbs',
      },
    ],
  });
  plop.setGenerator('async', {
    description: 'Create a async',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your async name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/async/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Async.js.hbs',
      },
    ],
  });
};
