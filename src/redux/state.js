const state = {
  profilePage: {
    postsData: [
      { id: "1", message: "Hi, I'm here!", likesCount: "5" },
      { id: "2", message: "My first post", likesCount: "20" },
      { id: "3", message: "My second post", likesCount: "0" },
    ],
  },
  messagePage: {
    dialogsData: [
      { id: 1, name: "User 1", avatar: "https://thumbs.dreamstime.com/b/chef-worker-character-isolated-background-chef-avatar-chef-worker-character-isolated-background-chef-avatar-vectros-stock-159615194.jpg" },
      { id: 2, name: "User 2", avatar: "https://cdn2.iconfinder.com/data/icons/professions/512/cook_woman_user-512.png" },
      { id: 3, name: "User 3", avatar: "https://thumbs.dreamstime.com/b/cook-icon-vector-chef-avatar-man-flat-88903559.jpg" },
      { id: 4, name: "User 4", avatar: "https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171106690/89530162-avatar-chef-profesional-ilustraci%C3%B3n-vectorial-de-personajes.jpg" },
      { id: 5, name: "User 5", avatar: "https://thumbs.dreamstime.com/b/woman-cook-icon-chef-avatar-vector-flat-79429816.jpg" },
      { id: 6, name: "User 6", avatar: "https://cdn4.vectorstock.com/i/1000x1000/01/58/funny-chef-avatar-character-vector-15210158.jpg" },
    ],
    messagesData: [
      { id: 1, message: "Hi", sender: "from" },
      { id: 2, message: "I am glad to see you! Bla-bla-bla", sender: "from" },
      { id: 3, message: "How are you?", sender: "from" },
      { id: 4, message: "Hello, I am good", sender: "to" },
      { id: 5, message: "And you?", sender: "to" },
      { id: 6, message: "I am ok", sender: "from" },
    ],
  },
  friendsBar: [
    { id: 1, userName: "User 1", avatar: "https://thumbs.dreamstime.com/b/chef-worker-character-isolated-background-chef-avatar-chef-worker-character-isolated-background-chef-avatar-vectros-stock-159615194.jpg" },
    { id: 2, userName: "User 2", avatar: "https://cdn2.iconfinder.com/data/icons/professions/512/cook_woman_user-512.png" },
    { id: 3, userName: "User 3", avatar: "https://thumbs.dreamstime.com/b/cook-icon-vector-chef-avatar-man-flat-88903559.jpg" },
  ],
};

export default state;
