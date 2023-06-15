/* eslint-disable no-unused-vars */
export default function Card({ country, flagId }) {
  return (
    <div className="card">
      <div className="image">
        <img src={process.env.PUBLIC_URL + 'images/' + flagId + '.webp'} />
      </div>
      <h1>{country}</h1>
    </div>
  );
}
