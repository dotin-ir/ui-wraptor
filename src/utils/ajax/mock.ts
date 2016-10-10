export default [
  {
    url: '/createCustomer',
    value: new Promise((resolve) => {
      setTimeout(function() {
        resolve({
          componentName: 'deposit.createCustomer',
          props: {
              a: 1,
              b: 2,
          }
        });        
      }, 500);
    })
  }, {
    url: '/selectPerson',
    value: new Promise((resolve) => {
      setTimeout(function() {
        resolve({
          componentName: 'folan.selectPerson'
        });        
      }, 500);
    })
  }, {
    url: '/divText',
    value: new Promise((resolve) => {
      setTimeout(function() {
        resolve({text: 'hello from ajax'});        
      }, 2000);
    })
  }
];