import onEnterOrSpace from '../index';

describe('onEnterOrSpace', () => {
  test('onEnterOrSpace accept a callback that is called for enter event', () => {
    const cb = jest.fn();
    onEnterOrSpace(cb)({ keyCode: 13 });
    expect(cb).toHaveBeenCalledWith({ keyCode: 13 });
  });

  test('onEnterOrSpace accept a callback that is called for space event', () => {
    const cb = jest.fn();
    onEnterOrSpace(cb)({ keyCode: 32 });
    expect(cb).toHaveBeenCalledWith({ keyCode: 32 });
  });

  test('onEnterOrSpace accept a callback that is not called for tab event', () => {
    const cb = jest.fn();
    onEnterOrSpace(cb)({ keyCode: 9 });
    expect(cb).not.toHaveBeenCalled();
  });
});
