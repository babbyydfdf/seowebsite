import Image from 'next/image';

export default function Photos() {
  return (
    <>
      <h1>Photos</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        <Image
          src="/thillainathan.png"
          alt="Thillai Nathan"
          width={400}
          height={400}
        />

        <Image
          src="/thillai-nathan.png"
          alt="Thillai Nathan"
          width={400}
          height={400}
        />

        <Image
          src="/thillai-nathan-personal-image.jpg"
          alt="Thillai Nathan"
          width={400}
          height={400}
        />

        <Image
          src="/thillai-nathan-event.png"
          alt="Thillai Nathan"
          width={400}
          height={400}
        />
      </div>
    </>
  );
}