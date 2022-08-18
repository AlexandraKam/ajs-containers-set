import Team from '../app';

test('Объект добавлен в команду', () => {
  const newTeam = new Team();
  newTeam.add('Иван');
  expect(newTeam.toArray()).toEqual(['Иван']);
});

test('Объект уже есть в команде', () => {
  const newTeam = new Team();
  newTeam.add('Иван');
  expect(() => newTeam.add('Иван')).toThrow('Объект уже существует в команде');
});

test('Объекты добавлены в команду', () => {
  const newTeam = new Team();
  newTeam.addAll('Иван', 'Ivan');
  expect(newTeam.toArray()).toEqual(['Иван', 'Ivan']);
});

test('Объекты уже есть в команде', () => {
  const newTeam = new Team();
  expect(() => newTeam.addAll('Иван', 'Иван', 'Ivan')).toThrow('Объект уже существует в команде');
});
