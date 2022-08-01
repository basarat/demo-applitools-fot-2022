import { sendEmail } from './index';

// The only one really needed
test('should work', () => {
  expect(sendEmail('hello@example.com')).toBe(true);
});