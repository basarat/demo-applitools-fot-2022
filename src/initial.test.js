import { sendEmail } from './initial';

test('empty values should throw error', () => {
  expect(() => sendEmail(undefined)).toThrow('Invalid Email');
});

test('non string values should throw error', () => {
  expect(() => sendEmail({ email: 'hello@example.com' })).toThrow('Invalid Email');
});

// The only one really needed
test('should work', () => {
  expect(sendEmail('hello@example.com')).toBe(true);
});