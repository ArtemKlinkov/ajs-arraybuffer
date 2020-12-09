import ArrayBufferConverter from '../arraybufferconverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

const buffer = getBuffer();

test('проверка правильности выполнения кода', () => {
  const test = new ArrayBufferConverter();
  test.load(buffer);
  const received = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toEqual(test.toString());
});

test('проверка типа данных', () => {
  const test = new ArrayBufferConverter();
  test.load(buffer);
  const received = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(typeof (received)).toEqual(typeof (test.toString()));
});
