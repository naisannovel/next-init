import Link from 'next/link';

const User = ({data}) =>{
    return (
        <>
        {
            data?.map(item => <h1 key={item.id}><Link href={`/user/${item.id}`}>{item.name}</Link></h1>)
        }
        </>
    )
}

export const getStaticProps = async () =>{
    const jsonData = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await jsonData.json();
    

    return {
        props: {
            data: user
        }
    }
}

export default User;