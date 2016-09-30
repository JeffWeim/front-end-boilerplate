export function addition(a, b) {
  return a + b;
};

export function subtraction(a, b) {
  return a - b;
};

export function show() {
  $("p").show();
};

export function ajax() {
  let xhr = $.ajax('/some/url')
      .done(function(res) { 
          console.log( res ); 
      })
      .fail(function() { 
          console.log( "error" ); 
      })
      .always(function() { 
          console.log( "complete" ); 
      });
}