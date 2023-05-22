$('.upBtn').on('click', ()=>{
    upArrowKey();
})

$('.downBtn').on('click', ()=>{
    downArrowKey();
})

$('.leftBtn').on('click', ()=>{
    leftArrowKey();
})

$('.rightBtn').on('click', ()=>{
    rightArrowKey();
})

function upArrowKey() {
    var event = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      keyCode: 38,
      which: 38,
      code: 'ArrowUp',
      keyIdentifier: 'Up'
    });
  
    document.dispatchEvent(event);
  }
  
  function downArrowKey() {
    var event = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
      code: 'ArrowDown',
      keyIdentifier: 'Down'
    });
  
    document.dispatchEvent(event);
  }
  
  function leftArrowKey() {
    var event = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
      keyCode: 37,
      which: 37,
      code: 'ArrowLeft',
      keyIdentifier: 'Left'
    });
  
    document.dispatchEvent(event);
  }
  
  function rightArrowKey() {
    var event = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      keyCode: 39,
      which: 39,
      code: 'ArrowRight',
      keyIdentifier: 'Right'
    });
  
    document.dispatchEvent(event);
  }
  