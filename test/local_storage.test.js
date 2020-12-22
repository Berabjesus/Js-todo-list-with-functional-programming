import {
  getAllTasks, addTask, getKeys, setKey, getSortedTasksBydate, deleteTask, editTask,
} from '../src/Models/local_storage';

const testKey = 'test with jest';
const newtaskObject = {
  category: 'personal',
  data: {
    title: 'personal title',
    description: 'personal description ',
    dueDate: '01/01/2020',
    priority: 'personal priority',
    id: 0,
  },
};

describe('local storage setKey', () => {
  it('should set a key that has value a value with clock.me extension', () => {
    setKey(testKey);
    expect((Object.keys(localStorage)).filter(key => key.includes('clock.me')).length > 0).toBeTruthy();
  });
});

describe('local storage getKeys', () => {
  setKey(testKey);
  it('should filter keys that have clock.me and return an array of key with clock.me removed ', () => {
    expect(getKeys() instanceof Array).toBeTruthy();
  });

  it('should have a key named test with jest', () => {
    const keys = getKeys();
    expect(keys.some(key => key === testKey)).toBeTruthy();
  });
});

describe('local storage addTask', () => {
  it(`should store a new object by a category name of ${newtaskObject.category}`, () => {
    addTask(newtaskObject);
    expect(getKeys().length > 0).toBeTruthy();
    expect(getKeys().some(key => key === newtaskObject.category)).toBeTruthy();
  });

  it('should store object values of newtaskObject', () => {
    const value = localStorage.getItem(`${newtaskObject.category}clock.me`);
    expect(JSON.parse(value)[0]).toEqual(newtaskObject.data);
  });
});

describe('local storage getAllTasks', () => {
  it('should set a new key name personal if the local storage is empty', () => {
    expect(getKeys().length > 0 && getKeys().some(key => key === 'personal')).toBeTruthy();
  });

  it('should fire the JSON.parse() command on every local storage key value pair and return an array with atleast one object of category name personal', () => {
    addTask(newtaskObject);
    expect(getAllTasks().length > 0).toBeTruthy();
    expect(getAllTasks().some(task => task.category === newtaskObject.category)).toBeTruthy();
  });
});

describe('local storage getSortedTasksBydate', () => {
  it('should return two objects named pastTasks and upcomingTasks', () => {
    expect(Object.keys(getSortedTasksBydate()).length === 2 && Object.keys(getSortedTasksBydate()).some(key => key === 'pastTasks' || key === 'upcomingTasks')).toBeTruthy();
  });
});

describe('local storage editTask', () => {
  it('should delete the task object from local storage', () => {
    const newerTask = { ...newtaskObject };
    newerTask.title = 'edited task';
    editTask(newtaskObject, newerTask);
    expect(getAllTasks().some(obj => obj.data !== 'personal title')).toBeTruthy();
  });
});

describe('local storage deletetask', () => {
  it('should delete the task object from local storage', () => {
    deleteTask(newtaskObject);
    expect(getAllTasks().some(obj => obj.data !== 'personal title')).toBeTruthy();
  });
});