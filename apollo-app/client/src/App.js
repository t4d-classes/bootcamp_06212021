import { useQuery, gql } from "@apollo/client";

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

function App() {
    const { loading, error, data } = useQuery(APP_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.message}

            <ul>
                {data.authors.map(a => <li key={a.id}>
                    {a.fullName} - {a.phoneNumber}</li>)}
            </ul>
        </div>
    );
}

export default App;
