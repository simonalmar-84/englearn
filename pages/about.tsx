import Meta from "../components/Meta";


export default function About() {
  const title = 'Englearn About';
  const description = 'Learn more about Englearn'

  return (
    <div>
      <Meta title={title} description={description} />
      <h1>About</h1>
    </div>
  )
}