import { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";

const APP_QUERY = gql`
query App {
  message
  authors {
    id
    fullName
    phoneNumber
  }
}
`;

const APPEND_AUTHOR_MUTATION = gql`
mutation AppendAuthor($newAuthor: NewAuthor) {
    appendAuthor(author: $newAuthor) {
        id
        firstName
        lastName
        fullName
        phoneNumber
    }
}
`;

function App() {
    const { loading, error, data } = useQuery(APP_QUERY);

    const [mutateAppendAuthor] = useMutation(APPEND_AUTHOR_MUTATION);

    const [authorForm, setAuthorForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    const change = (e) => {
        setAuthorForm({
            ...authorForm,
            [e.target.name]: e.target.value,
        });
    };

    const appendAuthor = () => {
        mutateAppendAuthor({
            variables: {
                newAuthor: { ...authorForm },
            },
            refetchQueries: [{ query: APP_QUERY }]
        }).then(() => {
            setAuthorForm({
                firstName: "",
                lastName: "",
                phoneNumber: "",
            });
        })
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.message}

            <ul>
                {data.authors.map(a => <li key={a.id}>
                    {a.fullName} - {a.phoneNumber}</li>)}
            </ul>

            <form>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={authorForm.firstName}
                        onChange={change}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={authorForm.lastName}
                        onChange={change}
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={authorForm.phoneNumber}
                        onChange={change}
                    />
                </div>
                <button type="button" onClick={appendAuthor}>
                    Add Author
                </button>
            </form>
        </div>
    );
}

export default App;
