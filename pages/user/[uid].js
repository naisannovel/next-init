const UserDetails = ({ userDetails }) =>{
    return <>
    <h1>{userDetails.username}</h1>
    <h1>{userDetails.name}</h1>
    <h1>{userDetails.email}</h1>
    <h1>{userDetails.phone}</h1>
    </>
}

export const getStaticProps = async (context) =>{
    const jsonData = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.uid}`);
    const data = await jsonData.json();

    return {
        props: {
            userDetails: data
        }
    }
}

export const getStaticPaths = async () =>{
    const jsonData = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await jsonData.json();
    const ids = data.map(item => ({ params: { uid: item.id.toString() }}));

    return {
        paths: ids,
        fallback: false
    }
}

export default UserDetails;