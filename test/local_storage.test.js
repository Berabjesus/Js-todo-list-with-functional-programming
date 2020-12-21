import {
  getAllTasks, addTask, getKeys, setKey, getSortedTasksBydate, editTask, deleteTask,
} from '../src/Models/local_storage'

const testKey = 'test with jest'

describe('local storage setKey', () => {
  it('should set a key that has value a value with clock.me extension', () => {
    setKey(testKey);
    expect((Object.keys(localStorage)).filter(key => key.includes('clock.me')).length > 0).toBeTruthy()
  });
});

describe('local storage getKeys', () => {
  console.log(Object.keys(localStorage));
});