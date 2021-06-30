import { PubSub } from 'apollo-server-express';

import fetch from 'node-fetch';

const pubSub = new PubSub();

export const resolvers = {
    Query: {
        message() {
            return 'Welcome to React and Apollo!';
        },
        authors() {
            return fetch('http://localhost:5050/authors')
                .then(res => res.json());
        },
        author(_, args) {
            return fetch('http://localhost:5050/authors/'
                + encodeURIComponent(args.id)).then(res => res.json());
        },
        num1() {
            return 1;
        },
        num2() {
            return 10.1;
        },
        test() {
            return false;
        }
    },
    Author: {
        // id: (author) => {
        //     return author.id;
        // }
        fullName: (author) => {
            return author.firstName + " " + author.lastName;
        }
    }
};
