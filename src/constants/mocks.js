import pic from '../images/img-alps.jpg';

export const fakeData = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author_id: 'Author 1',
    created_at: '2014-10-14', // string()
    modified_at: '2014-10-15',
    pic,
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit 2',
    body: 'Lorem ipsum dolor sit amet,',
    author_id: 'Author 2',
    created_at: '2014-12-24', // string()
    modified_at: '2015-01-10',
    pic,
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, s',
    author_id: 'Author 3',
    created_at: '2013-05-11', // string()
    modified_at: '2015-07-28',
    pic,
  },
  {
    id: '4',
    title: 'Lorem ipsum dolor sit 4',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
    author_id: 'Author 4',
    created_at: '2014-12-24', // string()
    modified_at: '2015-01-10',
    pic,
  },
  {
    id: '5',
    title: 'Lorem ipsum dolor sit 5',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei',
    author_id: 'Author 5',
    created_at: '2013-05-11', // string()
    modified_at: '2015-07-28',
    pic,
  },
];

export const comments = [
  {
    id: '1',
    post_id: '1',
    post_author: 'Anonymous 1',
    body: 'Lorem ipsum dolor sit 1',
  },
  {
    id: '2',
    post_id: '2',
    post_author: 'Anonymous 2',
    body: 'Lorem ipsum dolor sit 2',
  },
  {
    id: '3',
    post_id: '3',
    post_author: 'Anonymous 3',
    body: 'Lorem ipsum dolor sit 3',
  },
  {
    id: '4',
    post_id: '4',
    post_author: 'Anonymous 4',
    body: 'Lorem ipsum dolor sit 4',
  },
  {
    id: '5',
    post_id: '5',
    post_author: 'Anonymous 5',
    body: 'Lorem ipsum dolor sit 5',
  },
  {
    id: '1',
    post_id: '6',
    post_author: 'Anonymous 1.1',
    body: 'Lorem ipsum dolor sit 1.1',
  },
];
