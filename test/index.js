const expect = require('expect');
const getIn = require('./../index');

describe('getIn', function() {
    const context = {
        user: {
            profile: {
                gender: 'female'
            },
            avatar: null
        },
        type: 'best',
        13: 'Lucky number'
    };

    it('should return value in object by Array path', function() {
        expect(getIn(context, ['user', 'profile', 'gender'])).toBe('female');
    });

    it('should return value in object by string path', function() {
        expect(getIn(context, 'type')).toBe('best');
    });

    it('should return value in object by number path', function() {
        expect(getIn(context, 13)).toBe('Lucky number');
    });

    it('should return undefined if part of path is undefined', function() {
        expect(getIn(context, ['user', 'address', 'country'])).toBe(undefined);
    });

    it('should return undefined if part of path is null', function() {
        expect(getIn(context, ['user', 'avatar'])).toBe(undefined);
    });

    it('should return defaultValue if part of path is undefined', function() {
        expect(getIn(context, ['user', 'address', 'country'], 'slovakia')).toBe('slovakia');
    });

    it('should return defaultValue if part of path is null', function() {
        expect(getIn(context, ['user', 'avatar'], 'slovakia')).toBe('slovakia');
    });

    it('should return context if context is falsy', function() {
        const context = null;
        expect(getIn(context, ['user', 'address', 'country'])).toBe(null);
    });

    it('should return defaultValue if context is falsy', function() {
        const context = null;
        expect(getIn(context, ['user', 'address', 'country'], 'slovakia')).toBe('slovakia');
    });

    it('should not mutate path argument', function(){
        const path = ['user', 'profile', 'gender'];
        getIn(context, path, 'male');

        expect(path).toEqual(['user', 'profile', 'gender']);
    });

    it('should throw error if path is undefined', function() {
        expect(function() {
            getIn(context, undefined, 'slovakia')
        }).toThrow('Path is not defined');
    });

    it('should throw error if path is empty array', function() {
        expect(function() {
            getIn(context, [], 'slovakia')
        }).toThrow('Path is not defined');
    });
});