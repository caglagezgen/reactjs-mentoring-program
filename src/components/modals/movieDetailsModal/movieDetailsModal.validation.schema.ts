import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('please add a title.')
    .min(2, 'title must contain at least 2 characters.')
    .max(120, 'title must be 120 characters or less.'),
  releaseDate: Yup.date()
    .required('please choose a release date.')
    .min('1920-01-01', 'the release date must be after 1920 year.')
    .max(new Date(), 'the release date in the future isn\'t allowed.'),
  url: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/,
      'it doesn\'t look like a valid url.',
    )
    .required('please add url.'),
  genre: Yup.array()
    .min(1, 'please choose at least one genre.'),
  description: Yup.string()
    .required('please add an overview.')
    .min(20, 'the overview must be at least 20 characters long.')
    .max(1000, 'the overview is too long, please make it less than 1000 characters.'),
  duration: Yup.number()
    .required('please add duration.')
    .min(10, 'the duration must be longer than 10 minutes.')
    .max(300, 'the duration must be shorter than 300 minutes.'),
});

export default schema;
