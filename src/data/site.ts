// Single source of truth for details that appear in more than one place.
export const email = 'param10.dave@gmail.com';
export const mailto = `mailto:${email}`;

export const resumeUrl =
  'https://drive.google.com/file/d/15KrFphCU_7DVGiPR1wP2tHohGw3woHly/view?usp=sharing';

export const github = 'https://github.com/ParamDave5';
export const linkedin = 'https://www.linkedin.com/in/param-dave-823910136/';

// Bump this date whenever the "Now" section on the home page changes.
export const nowUpdated = new Date('2026-08-01T00:00:00Z');
export const nowLabel = nowUpdated.toLocaleDateString('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});
