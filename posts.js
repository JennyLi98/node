const posts = [
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "every wednesday evenings",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 2,
    status: 0,   //0: not finished, 1: signed up, 2: finished
  },
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "evenings",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 1,
    status: 0,   //0: not finished, 1: signed up, 2: finished
  },
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "weekend",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 0,
    status: 2,   //0: not finished, 1: signed up, 2: finished
  },
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "May 1st 2019, 7:00pm",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 1,
    status: 1,   //0: not finished, 1: signed up, 2: finished
  }
]

localStorage.setItem("posts",posts);
