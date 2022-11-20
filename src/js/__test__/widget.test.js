import InnFormWidget from '../widget';

test('test1', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(InnFormWidget.markup);
});

test('test2', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '4539692087728875';
  widget.submit.click();

  expect(widget.input.classList.contains('valid')).toEqual(true);
});
