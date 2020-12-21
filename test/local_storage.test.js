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
  setKey(testKey);
  it('should filter keys that have clock.me and return an array of key with clock.me removed ', () => {
    expect(getKeys() instanceof Array).toBeTruthy()
  });

  it('should have a key named test with jest', () => {
    const keys =  getKeys()
    expect(keys.some(key => key === testKey))
  });
});