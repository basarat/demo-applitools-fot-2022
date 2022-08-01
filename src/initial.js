export function sendEmail(email) {
  if (email == null || typeof email !== 'string') throw new Error('Invalid Email');

  // ... 
  // ... send the email
  return true;
}

/** Why? */

// correct
sendEmail(user.email);

// incorrect: empty
sendEmail(user.emale);

// incorrect: type
sendEmail(user);
sendEmail(user.id);