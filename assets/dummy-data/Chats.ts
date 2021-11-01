export default {
  id: "1",
  users: [
    {
      id: "u1",
      name: "Vadim",
      imageUri:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    },
    {
      id: "u2",
      name: "Elon Musk",
      imageUri:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
    },
  ],
  messages: [
    {
      id: "m1",
      content: "Hey Pasindu! how are you doing?",
      createdAt: "2020-10-10T12:48:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m2",
      content: "I am doing great",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Elon Musk",
      },
    },
    {
      id: "m3",
      content: "What about you?",
      createdAt: "2020-10-03T14:49:40.000Z",
      user: {
        id: "u2",
        name: "Elon Musk",
      },
    },
    {
      id: "m4",
      content: "Same here, busy with studies",
      createdAt: "2020-10-03T14:50:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m5",
      content: "How is your degree programme going?",
      createdAt: "2020-10-03T14:51:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m6",
      content: "Just got done with exams",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Elon Musk",
      },
    },
    {
      id: "m7",
      content: "btw, i have to go now. catch you later",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u2",
        name: "Elon Musk",
      },
    },
    {
      id: "m8",
      content: "Bye man, see you later. lets hangou someyime",
      createdAt: "2020-10-03T14:51:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m9",
      content: "Yeah we should definitely hagout soon!",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u2",
        name: "Elon Musk",
      },
    },
  ],
};
