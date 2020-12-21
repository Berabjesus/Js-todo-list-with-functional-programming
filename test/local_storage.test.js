import {
  getAllTasks, addTask, getKeys, setKey, getSortedTasksBydate, editTask, deleteTask,
} from '../src/Models/local_storage'

const testKey = 'test with jest'
const newtaskObject = {
  category: 'personal',
  data: {
    title: 'personal title',
    description: 'personal description ',
    dueDate: '01/01/2020',
    priority: 'personal priority',
  }
}

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

describe('local storage addTask', () => {
  it(`should store a new object by a category name of ${newtaskObject.category}`, () => {
    addTask(newtaskObject)
    expect(getKeys().length > 0 && getKeys().some(key => key === newtaskObject.category))
  });

  it('should store object values of newtaskObject', () => {
    const value = localStorage.getItem(newtaskObject.category+'clock.me')
    expect(JSON.parse(value)[0]).toEqual(newtaskObject.data)
  });
});