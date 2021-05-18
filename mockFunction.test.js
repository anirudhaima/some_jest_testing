const axios = require('axios');

const arr = [2, 4];
// const newArr = arr.map(function(x){
//     return x+2;
// })

class Api {
    static getUsers() {
        return axios.get('/mock-api-user.json')
    }
}

jest.mock('axios');

test('mock function definition', () => {
    const mockFun = jest.fn(function (x) {
        return x + 2;
    });
    arr.map(mockFun)
    expect(mockFun.mock.calls.length).toBe(2);
    expect(mockFun.mock.results[1].value).toBe(6)
});

test('mock return values', () => {
    const mockFun = jest.fn();
    mockFun.mockReturnValueOnce(2).mockReturnValueOnce(4);

    arr.map(mockFun)
    //mockFun();
    expect(mockFun.mock.results[0].value).toBe(2)
});

test('mock module ', () => {

    const data = [{ name: 'Bill' }];
    const res = { data };
     axios.get.mockResolvedValue(res);

    Api.getUsers().then(data=>expect(data).toMatch(data))
});


