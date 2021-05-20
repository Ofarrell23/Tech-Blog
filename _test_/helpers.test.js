const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2021-05-20 16:12:03');
    expect(format_date(date)).toBe('5/20/2021');
});