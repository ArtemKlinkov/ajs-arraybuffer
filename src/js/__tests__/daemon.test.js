/* eslint-disable no-new */
import Daemon from '../daemon';

test('should throw error "Слишком близко. Невозможно атаковать соперника!"', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = -1;
  // eslint-disable-next-line no-unused-vars
  expect(() => { const { attack } = newChatacter.attack; }).toThrow('Слишком близко. Невозможно атаковать соперника!');
});

test('should throw error "Слишком далеко. Невозможно атаковать соперника!"', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 6;
  // eslint-disable-next-line no-unused-vars
  expect(() => { const { attack } = newChatacter.attack; }).toThrow('Слишком далеко. Невозможно атаковать соперника!');
});

test('атака на 1 клетку без дурмана. Должна вернуть 100', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 1;
  expect(newChatacter.attack).toBe(100);
});

test('атака на 2 клетки без дурмана. Должна вернуть 90', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 2;
  expect(newChatacter.attack).toBe(90);
});

test('атака на 5 клеток без дурмана. Должна вернуть 60', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 5;
  expect(newChatacter.attack).toBe(60);
});

test('атака на 1 клетку c дурманом. Должна вернуть 100', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 1;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(100);
});

test('атака на 2 клеткb c дурманом. Должна вернуть 85', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 2;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(85);
});

test('атака на 2 клеткb c дурманом. Должна вернуть 48', () => {
  const newChatacter = new Daemon('Валера');
  newChatacter.distance = 5;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(48);
});
