const { fetchCallback, fetchPromise } = require('./asyncData');

test('asyn fun with callback', (done) => {

    fetchCallback(function (data) {

        expect(data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false });
        done()
    });

});
test('asyn fun with promise', () => {
    fetchPromise().then((data) => {
        expect(data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false })
    })
});

test('asyn fun with asyn/await', async () => {
    let data = await fetchPromise();
    expect(data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false })

});

