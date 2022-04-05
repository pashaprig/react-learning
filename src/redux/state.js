let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, its me.', likes: 3, imgSrc: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
            { id: 2, message: 'Hi, its you.', likes: 8, imgSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80' }
        ]
    },

    messagesPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Im from IT' },
            { id: 3, message: 'ok' },
            { id: 4, message: 'yo' },
            { id: 5, message: 'yo' }
        ],

        dialogs: [
            { id: 1, name: 'Anton' },
            { id: 2, name: 'Pasha' },
            { id: 3, name: 'Victor' },
            { id: 4, name: 'Dima' },
            { id: 5, name: 'Stas' }
        ]
    },

    sidebar: {
    }
}

export const addPost = (postMessage) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likes: 0,
        imgSrc: 'ulr'
    };
    state.profilePage.posts.push(newPost);
}

export default state;